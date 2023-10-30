import styled, { css } from 'styled-components';
import theme from 'styled-theming';

import type { TextButtonAppearance } from './TextButton';

const textButtonAppearance = theme('appearance', {
  primary: css`
    color: var(--color-dodgerBlue);
  `,
  secondary: css`
    color: var(--color-charcoal);
  `,
  danger: css`
    color: var(--color-fireEngineRed);
  `,
});

type TextButtonStyledProps = {
  appearance: TextButtonAppearance;
};

export const TextButtonStyled = styled.button.attrs({
  type: 'button',
})<TextButtonStyledProps>`
  ${textButtonAppearance}
  cursor: pointer;
  background: transparent;
  border: none;
  padding: 0;
`;
