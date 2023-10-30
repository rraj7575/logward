import { Stack } from '@bedrock-layout/stack';
import { useExpandedNodes } from 'hooks';
import _isEmpty from 'lodash/isEmpty';
import { ChangeEvent, Ref, forwardRef, useEffect, useState } from 'react';
import { CiSearch } from 'react-icons/ci';

import { TextInput } from '../../Form/TextInput';
import { Typography } from '../../Typography';
import { OperatorsNodes } from './OperatorsNodes';
import { searchAttributes } from './helpers/search';

export type OperatorsProps = Record<string, Dataset>;

export type Dataset = {
  name: string;
  id: string;
  ops: Record<string, OperatorProps>;
};

export type OperatorProps = {
  name: string;
  leftOperands: number;
  rightOperands: number;
};

export type OperatorOnChange = {
  value: string;
  type: string;
  leftOperands: number;
  rightOperands: number;
};

export type OperatorsPopoverProps = {
  operators: OperatorsProps;
  onClick?: ({
    value,
    type,
    leftOperands,
    rightOperands,
  }: OperatorOnChange) => void;
  onChange?: ({
    value,
    type,
    leftOperands,
    rightOperands,
  }: OperatorOnChange) => void;
};

export const OperatorsPopover = forwardRef(
  (
    { operators, onClick, onChange }: OperatorsPopoverProps,
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
        setSearchedLeaves(searchAttributes(operators, searchInput));
      } else {
        setSearchedLeaves([]);
      }
    }, [searchInput]);

    return (
      <Stack gutter={10}>
        <TextInput
          type="text"
          placeholder="Search Attributes"
          icon={<CiSearch size={18} color="var(--color-suvaGray)" />}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setSearchInput(e.target.value);
          }}
          value={searchInput}
        />

        {areSearchedKeysAvailable() || _isEmpty(searchInput) ? (
          <OperatorsNodes
            operators={operators}
            parentNodeClickHandler={toggleNode}
            onClick={(value, type, leftOperands, rightOperands) => {
              if (typeof onChange === 'function') {
                onChange({ value, type, leftOperands, rightOperands });
              }

              if (typeof onClick === 'function') {
                onClick({ value, type, leftOperands, rightOperands });
              }
            }}
            expandedNodes={expandedNodes}
            searchInput={searchInput}
            searchedLeaves={searchedLeaves}
          />
        ) : (
          <Typography>No Operators Found</Typography>
        )}
      </Stack>
    );
  }
);

OperatorsPopover.displayName = 'OperatorsPopover';
