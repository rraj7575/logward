import _isNil from 'lodash/isNil';
import styled from 'styled-components';

type HorizontalLineStyledProps = {
  color?: string;
};

export const HorizontalLineStyled = styled.div<HorizontalLineStyledProps>`
  border: 1px solid
    ${({ color }) =>
      _isNil(color) ? 'var(--color-lightGray)' : `var(${color})`};
  height: 1px;
`;
