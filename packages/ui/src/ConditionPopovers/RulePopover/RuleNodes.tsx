import { Stack } from '@bedrock-layout/stack';

import { RuleNodeBuilder } from './RuleNodeBuilder';

type RuleNodesProps = {
  dataset: Record<string, any>;
  searchInput: string;
  searchedLeaves: string[];
  expandedNodes: Record<string, boolean>;
  parentNodeClickHandler: (id: string) => void;
  onClick: (value: string, key: string, dataType: string) => void;
};

export function RuleNodes({
  dataset,
  searchInput,
  searchedLeaves,
  expandedNodes,
  parentNodeClickHandler,
  onClick,
}: RuleNodesProps) {
  return (
    <Stack gutter="3px">
      {Object.keys(dataset).map((key, index) => {
        const depth = 0;

        return (
          <RuleNodeBuilder
            key={index}
            nodeKey={key}
            parentNodeClickHandler={parentNodeClickHandler}
            depth={depth}
            nodeValue={dataset[key]}
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
