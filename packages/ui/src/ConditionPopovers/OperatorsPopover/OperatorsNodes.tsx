import { Stack } from '@bedrock-layout/stack';

import { OperatorBuilder } from './OperatorBuilder';

type OperatorsNodesProps = {
  operators: Record<string, any>;
  searchInput: string;
  searchedLeaves: string[];
  expandedNodes: Record<string, boolean>;
  parentNodeClickHandler: (id: string) => void;
  onClick: (
    value: string,
    type: string,
    leftOperands: number,
    rightOperands: number
  ) => void;
};

export function OperatorsNodes({
  operators,
  searchInput,
  searchedLeaves,
  expandedNodes,
  parentNodeClickHandler,
  onClick,
}: OperatorsNodesProps) {
  return (
    <Stack gutter="3px">
      {Object.keys(operators).map((key, index) => {
        const depth = 0;

        return (
          <OperatorBuilder
            key={index}
            nodeKey={key}
            parentNodeClickHandler={parentNodeClickHandler}
            depth={depth}
            nodeValue={operators[key]}
            onClick={onClick}
            expandedNodes={expandedNodes}
            searchInput={searchInput}
            searchedLeaves={searchedLeaves}
          />
        );
      })}
    </Stack>
  );
}
