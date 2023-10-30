import _isEmpty from 'lodash/isEmpty';

export function isSearchKeyFound(
  searchInput: string,
  searchedLeaves: string[],
  nodeKey: string
) {
  return !_isEmpty(searchInput) && searchedLeaves.includes(nodeKey);
}
