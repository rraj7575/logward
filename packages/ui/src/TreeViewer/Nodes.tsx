import { Stack } from '@bedrock-layout/stack';
import _map from 'lodash/map';

import { NodeBuilder } from './NodeBuilder';
import type { OnClickLeafNode } from './NodeBuilder';
import { Dataset } from './TreeViewer';

export type NodesProps = {
  dataset: Record<string, Dataset>;
  searchInput: string;
  searchedLeaves: string[];
  expandedNodes: Record<string, boolean>;
  parentNodeClickHandler: (id: string) => void;
  onClick?: OnClickLeafNode;
  hideChevronIcon: boolean;
};

export function Nodes({
  dataset,
  searchInput,
  searchedLeaves,
  expandedNodes,
  parentNodeClickHandler,
  onClick,
  hideChevronIcon,
}: NodesProps) {
  return (
    <Stack gutter="3px">
      {_map(dataset, (value, key) => {
        const depth = 0;

        return (
          <NodeBuilder
            key={key}
            nodeKey={key}
            parentNodeClickHandler={parentNodeClickHandler}
            depth={depth}
            nodeValue={value}
            onClick={onClick}
            expandedNodes={expandedNodes}
            searchInput={searchInput}
            searchedLeaves={searchedLeaves}
            hideChevronIcon={hideChevronIcon}
          />
        );
      })}
    </Stack>
  );
}
