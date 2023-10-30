import styled, { css } from 'styled-components';
import theme from 'styled-theming';

const ImageSize = theme('size', {
  xs: css`
    height: 2rem;
    width: 2rem;
  `,
  small: css`
    height: 2.4rem;
    width: 2.4rem;
  `,
  medium: css`
    height: 3.2rem;
    width: 3.2rem;
  `,
  large: css`
    height: 4.8rem;
    width: 4.8rem;
  `,
  self: css``,
});

export const ImageContainer = styled.span<{ round: boolean }>`
  ${({ round }) =>
    round &&
    css`
      border-radius: 50%;
    `}
  ${ImageSize}
`;
