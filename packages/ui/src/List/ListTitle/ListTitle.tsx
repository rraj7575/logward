import _isEmpty from 'lodash/isEmpty';
import _isNil from 'lodash/isNil';

import { Typography } from '../../Typography';

type ListTitleProps = {
  text: string | undefined;
};

export const ListTitle = ({ text }: ListTitleProps) => {
  if (_isNil(text) || _isEmpty(text)) {
    return null;
  }

  return <Typography name="listTitle">{text}</Typography>;
};
