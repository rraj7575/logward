import _isEmpty from 'lodash/isEmpty';

import type { Attributes, Dataset } from '../TreeViewer';

function search(
  data: Record<string, any>,
  value: any,
  path: string[],
  filteredFlatRecords: Record<string, any>
) {
  if (typeof data !== 'object') {
    return {};
  }

  if (!_isEmpty(data.attributes)) {
    for (const [attrKey, attrValue] of Object.entries<Attributes>(
      data.attributes
    )) {
      if (attrValue.name.toLowerCase().includes(value.toLowerCase())) {
        const key = path.concat(attrKey).join('.');

        filteredFlatRecords[key] = attrValue;
      }
    }
  }

  for (const [k, v] of Object.entries(data)) {
    if (k !== 'attributes') {
      search(v, value, path.concat(k), filteredFlatRecords);
    }
  }

  return filteredFlatRecords;
}

export function searchAttributes(
  dataset: Record<string, Dataset>,
  value: string
) {
  const filteredFlatRecords: Record<string, any> = search(
    dataset,
    value,
    [],
    {}
  );

  return Object.keys(filteredFlatRecords).length > 0
    ? Array.from(
        new Set(
          Object.keys(filteredFlatRecords).reduce<string[]>(
            (acc, curr: string) => {
              return [...acc, ...curr.split('.')];
            },
            []
          )
        )
      )
    : [];
}
