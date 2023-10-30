import _isEmpty from 'lodash/isEmpty';

import { Node, NodeLeaf } from '../components';
import { isSearchKeyFound } from '../util';

type OperatorBuilderProps = {
  nodeKey: string;
  nodeValue: Record<string, any>;
  depth: number;
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

export const OperatorBuilder = ({
  nodeKey,
  nodeValue,
  depth,
  searchInput,
  expandedNodes,
  parentNodeClickHandler,
  onClick,
  searchedLeaves,
}: OperatorBuilderProps) => {
  if (Object.keys(nodeValue).includes('ops')) {
    depth += 1;

    return isSearchKeyFound(searchInput, searchedLeaves, nodeKey) ||
      _isEmpty(searchInput) ? (
      <Node
        depth={depth - 1}
        nodeValue={nodeValue}
        title={nodeValue.name}
        searchInput={searchInput}
        expandedNodes={expandedNodes}
        parentNodeClickHandler={parentNodeClickHandler}
      >
        {Object.keys(nodeValue.ops)
          .filter((item) => {
            if (searchInput.length > 0) {
              return searchedLeaves.includes(item);
            }

            return true;
          })
          .map((item) => (
            <NodeLeaf
              key={item}
              title={nodeValue.ops[item].name}
              onClick={() =>
                onClick(
                  item,
                  nodeKey,
                  nodeValue.ops[item].leftOperands,
                  nodeValue.ops[item].rightOperands
                )
              }
            />
          ))}
      </Node>
    ) : null;
  }

  return null;
};
