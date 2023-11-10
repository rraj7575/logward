import styled, { css } from 'styled-components';
import theme from 'styled-theming';
const textButtonAppearance = theme('appearance', {
    primary: css `
    color: var(--color-dodgerBlue);
  `,
    secondary: css `
    color: var(--color-charcoal);
  `,
    danger: css `
    color: var(--color-fireEngineRed);
  `,
});
export const TextButtonStyled = styled.button.attrs({
    type: 'button',
}) `
  ${textButtonAppearance}
  cursor: pointer;
  background: transparent;
  border: none;
  padding: 0;
`;
