import _isEmpty from 'lodash/isEmpty';
import _isNil from 'lodash/isNil';

export function isNotNilAndEmpty(value: any): boolean {
  return !_isNil(value) && !_isEmpty(value);
}

export function isNotNilOrEmpty(value: any): boolean {
  return !_isNil(value) || !_isEmpty(value);
}
