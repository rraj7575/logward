import styled from 'styled-components';

import { buttonBorderCss } from './Button.styled';

export const IconButtonStyled = styled.button<{
  invertColor: boolean;
  border: boolean;
  padding: boolean;
}>`
  display: inline-block;
  cursor: pointer;
  padding: ${({ padding }) => (padding ? '0.5em 0.5em' : 0)};
  background: transparent;
  ${buttonBorderCss}
  border-color: ${({ border }) =>
    border ? 'var(--color-aliceBlue)' : 'transparent'};
  color: ${({ invertColor }) =>
    invertColor ? 'var(--color-white)' : 'var(--color-black)'};
`;
