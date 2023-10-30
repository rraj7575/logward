import _isEmpty from 'lodash/isEmpty';

import { Node, NodeLeaf } from '../components';
import { isSearchKeyFound } from '../util';

type RuleNodeBuilderProps = {
  nodeKey: string;
  nodeValue: Record<string, any>;
  depth: number;
  searchInput: string;
  searchedLeaves: string[];
  expandedNodes: Record<string, boolean>;
  parentNodeClickHandler: (id: string) => void;
  onClick: (value: string, node: string, dataType: string) => void;
};

export const RuleNodeBuilder = ({
  nodeKey,
  nodeValue,
  depth,
  searchInput,
  expandedNodes,
  parentNodeClickHandler,
  onClick,
  searchedLeaves,
}: RuleNodeBuilderProps) => {
  const keyShouldNotBe = (key: string) => !['name', 'id'].includes(key);

  if (Object.keys(nodeValue).includes('attributes')) {
    depth += 1;

    return isSearchKeyFound(searchInput, searchedLeaves, nodeKey) ||
      _isEmpty(searchInput) ? (
      <Node
        depth={depth - 1}
        nodeValue={nodeValue}
        title={nodeValue.name}
        searchInput={searchInput}
        expandedNodes={expandedNodes}
        tooltip={nodeValue.tooltip}
        parentNodeClickHandler={parentNodeClickHandler}
      >
        {Object.keys(nodeValue.attributes)
          .filter((item) => {
            if (searchInput.length > 0) {
              return searchedLeaves.includes(item);
            }

            return true;
          })
          .map((item) => (
            <NodeLeaf
              key={item}
              title={nodeValue.attributes[item].name}
              dataType={nodeValue.attributes[item].dataType}
              onClick={() =>
                onClick(item, nodeKey, nodeValue.attributes[item].dataType)
              }
            />
          ))}
      </Node>
    ) : null;
  }

  depth += 1;

  const nodesToRender =
    searchInput.length > 0
      ? Object.keys(nodeValue).filter((key) => {
          return keyShouldNotBe(key) && searchedLeaves.includes(key);
        })
      : Object.keys(nodeValue).filter((key) => {
          return keyShouldNotBe(key);
        });

  return (
    <div>
      {(!_isEmpty(searchInput) && searchedLeaves.includes(nodeKey)) ||
      _isEmpty(searchInput) ? (
        <Node
          depth={depth - 1}
          nodeValue={nodeValue}
          title={nodeValue.name}
          expandedNodes={expandedNodes}
          searchInput={searchInput}
          parentNodeClickHandler={parentNodeClickHandler}
        >
          {nodesToRender.map((i) => (
            <span key={i}>
              <RuleNodeBuilder
                key={i}
                nodeKey={i}
                parentNodeClickHandler={parentNodeClickHandler}
                depth={depth}
                nodeValue={nodeValue[i]}
                onClick={onClick}
                expandedNodes={expandedNodes}
                searchInput={searchInput}
                searchedLeaves={searchedLeaves}
              />
            </span>
          ))}
        </Node>
      ) : null}
    </div>
  );
};
