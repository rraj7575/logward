import { Stack } from '@bedrock-layout/stack';
import { useExpandedNodes } from 'hooks';
import _isEmpty from 'lodash/isEmpty';
import _map from 'lodash/map';
import { ChangeEvent, ReactNode, useEffect, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { DataTypes, TextInput, Typography } from 'ui';

import { Nodes } from './Nodes';
import { TreeSearchContainer } from './TreeViewer.styled';
import { searchAttributes } from './helpers/search';

export type Dataset = {
  name: string;
  id: string;
  attributes: Record<string, Attributes>;
  image?: string;
  tooltip?: ReactNode;
  footer?: ReactNode;
};

export type Attributes = {
  name: string;
  dataType: DataTypes;
};

export type TreeNodeClickOrChange = {
  value: string;
  key: string;
  dataType: string;
};

export type TreeViewerProps = {
  dataset: Record<string, Dataset>;
  onClick?: ({ value, key, dataType }: TreeNodeClickOrChange) => void;
  onChange?: ({ value, key, dataType }: TreeNodeClickOrChange) => void;
  showSearchField?: boolean;
  searchPlaceholder?: string;
  hideChevronIcon?: boolean;
  isExpanded?: boolean;
};

export function TreeViewer({
  dataset,
  onClick,
  onChange,
  showSearchField = false,
  searchPlaceholder = '',
  hideChevronIcon = false,
  isExpanded = true,
}: TreeViewerProps) {
  const [expandedNodes, toggleNode] = useExpandedNodes({
    isExpanded,
    idsToExpand: _map(dataset, (value) => {
      return value.id;
    }),
  });

  const [searchInput, setSearchInput] = useState<string>('');
  const [searchedLeaves, setSearchedLeaves] = useState<string[]>([]);

  const areSearchedKeysAvailable = () => {
    return !_isEmpty(searchInput) && !_isEmpty(searchedLeaves);
  };

  useEffect(() => {
    if (searchInput.length > 0) {
      setSearchedLeaves(searchAttributes(dataset, searchInput));
    } else {
      setSearchedLeaves([]);
    }
  }, [searchInput]);

  return (
    <Stack gutter={10}>
      {showSearchField && (
        <TreeSearchContainer>
          <TextInput
            type="text"
            placeholder={searchPlaceholder}
            icon={<CiSearch size={18} color="var(--color-suvaGray)" />}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setSearchInput(e.target.value);
            }}
            value={searchInput}
          />
        </TreeSearchContainer>
      )}

      {areSearchedKeysAvailable() || _isEmpty(searchInput) ? (
        <Nodes
          dataset={dataset}
          parentNodeClickHandler={toggleNode}
          onClick={(value, key, dataType) => {
            // This check is used when this component is used via Form Manager
            if (typeof onChange === 'function') {
              onChange({ value, key, dataType });
            }

            // This check is used when this component is directly used. ( Without form Manager)
            if (typeof onClick === 'function') {
              onClick({ value, key, dataType });
            }
          }}
          expandedNodes={expandedNodes}
          searchInput={searchInput}
          searchedLeaves={searchedLeaves}
          hideChevronIcon={hideChevronIcon}
        />
      ) : (
        <Typography>No Data</Typography>
      )}
    </Stack>
  );
}
