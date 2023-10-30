import _isEmpty from 'lodash/isEmpty';

import { OperatorProps, OperatorsProps } from '../OperatorsPopover';

function search(
  data: Record<string, any>,
  value: any,
  path: string[],
  filteredFlatRecords: Record<string, any>
) {
  if (typeof data !== 'object') {
    return {};
  }

  if (!_isEmpty(data.ops)) {
    for (const [attrKey, attrValue] of Object.entries<OperatorProps>(
      data.ops
    )) {
      if (attrValue.name.toLowerCase().includes(value.toLowerCase())) {
        const key = path.concat(attrKey).join('.');

        filteredFlatRecords[key] = attrValue.name;
      }
    }
  }

  for (const [k, v] of Object.entries(data)) {
    if (k !== 'ops') {
      search(v, value, path.concat(k), filteredFlatRecords);
    }
  }

  return filteredFlatRecords;
}

export function searchAttributes(dataset: OperatorsProps, value: string) {
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
