import { Stack } from '@bedrock-layout/stack';
import { useExpandedNodes } from 'hooks';
import _isEmpty from 'lodash/isEmpty';
import { ChangeEvent, Ref, forwardRef, useEffect, useState } from 'react';
import { CiSearch } from 'react-icons/ci';

import { TextInput } from '../../Form/TextInput';
import { Dataset } from '../../TreeViewer/TreeViewer';
import { Typography } from '../../Typography';
import { RuleNodes } from './RuleNodes';
import { RuleSearchContainer } from './RulePopover.styled';
import { searchAttributes } from './helpers/search';

export type DataTypes =
  | 'date'
  | 'datetime'
  | 'numeric'
  | 'string'
  | 'boolean'
  | 'popup'
  | 'dateTime'
  | 'jsCondition'
  | 'dataSet'
  | 'json'
  | '';

export type Attributes = {
  name: string;
  dataType: DataTypes;
};

export type OnClickRuleArgs = {
  value: string;
  key: string;
  dataType: string;
};

export type RulePopoverProps = {
  dataset: Record<string, Dataset>;
  onClick?: ({ value, key, dataType }: OnClickRuleArgs) => void;
  onChange?: ({ value, key, dataType }: OnClickRuleArgs) => void;
  disabled?: boolean;
};

export const RulePopover = forwardRef(
  (
    { dataset, onClick, onChange, disabled = false }: RulePopoverProps,
    ref: Ref<HTMLElement>
  ) => {
    const [expandedNodes, toggleNode] = useExpandedNodes({ isExpanded: true });
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
        <RuleSearchContainer>
          <TextInput
            type="text"
            placeholder="Search Attributes"
            icon={<CiSearch size={18} color="var(--color-suvaGray)" />}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setSearchInput(e.target.value);
            }}
            value={searchInput}
            disabled={disabled}
          />
        </RuleSearchContainer>

        {areSearchedKeysAvailable() || _isEmpty(searchInput) ? (
          <RuleNodes
            dataset={dataset}
            parentNodeClickHandler={toggleNode}
            onClick={(value, key, dataType) => {
              // This check is used when this component is used via Form Manager
              if (typeof onChange === 'function') {
                onChange({ value, key, dataType });
              }

              // This check is used when this component is directly used.
              // ( Without form Manager)
              if (typeof onClick === 'function') {
                onClick({ value, key, dataType });
              }
            }}
            expandedNodes={expandedNodes}
            searchInput={searchInput}
            searchedLeaves={searchedLeaves}
          />
        ) : (
          <Typography>No Data</Typography>
        )}
      </Stack>
    );
  }
);

RulePopover.displayName = 'RulePopover';
