import _isEmpty from 'lodash/isEmpty';
import _isNil from 'lodash/isNil';

import { Node } from './Node';
import { NodeLeaf } from './NodeLeaf';
import { isSearchKeyFound } from './helpers/util';

export type OnClickLeafNode = (
  value: string,
  node: string,
  dataType: string
) => void;

export type NodeBuilderProps = {
  nodeKey: string;
  nodeValue: Record<string, any>;
  depth: number;
  searchInput: string;
  searchedLeaves: string[];
  expandedNodes: Record<string, boolean>;
  parentNodeClickHandler: (id: string) => void;
  hideChevronIcon: boolean;
  onClick?: OnClickLeafNode;
};

export function NodeBuilder({
  nodeKey,
  nodeValue,
  depth,
  searchInput,
  expandedNodes,
  parentNodeClickHandler,
  onClick,
  searchedLeaves,
  hideChevronIcon,
}: NodeBuilderProps) {
  const keyShouldNotBe = (key: string) => !['name', 'id'].includes(key);

  const nodeImageExists =
    !_isNil(nodeValue.image) && !_isEmpty(nodeValue.image);

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
        parentNodeClickHandler={parentNodeClickHandler}
        hideChevronIcon={hideChevronIcon}
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
              nodeImageExists={nodeImageExists}
              onClick={() => {
                if (typeof onClick === 'function') {
                  onClick(item, nodeKey, nodeValue.attributes[item].dataType);
                }
              }}
            />
          ))}

        {!_isNil(nodeValue.footer) && nodeValue.footer}
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
          hideChevronIcon={hideChevronIcon}
        >
          {nodesToRender.map((i) => (
            <span key={i}>
              <NodeBuilder
                key={i}
                nodeKey={i}
                parentNodeClickHandler={parentNodeClickHandler}
                depth={depth}
                nodeValue={nodeValue[i]}
                onClick={onClick}
                expandedNodes={expandedNodes}
                searchInput={searchInput}
                searchedLeaves={searchedLeaves}
                hideChevronIcon={hideChevronIcon}
              />
            </span>
          ))}
        </Node>
      ) : null}
    </div>
  );
}
