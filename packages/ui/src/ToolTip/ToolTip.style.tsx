import { PadBox } from '@bedrock-layout/padbox';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';

const toolTipSize = theme('size', {
  small: css`
    max-inline-size: 20rem;
  `,
  medium: css`
    max-inline-size: 30rem;
  `,
  large: css`
    max-inline-size: 40rem;
  `,
});

export const ToolTipStyled = styled(PadBox)`
  min-inline-size: 15rem;
  background-color: var(--color-black);
  color: var(--color-white);
  border-radius: 4px;
  word-break: break-all;
  ${toolTipSize}
`;
