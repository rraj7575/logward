import styled, { css } from 'styled-components';
import theme from 'styled-theming';

const SpinnerSize = theme('size', {
  extraSmall: css`
    padding: 1rem;
    border: 0.2rem solid var(--color-aliceBlue);
    border-top: 0.2rem solid var(--color-navyBlue);
  `,
  small: css`
    padding: 2rem;
    border: 0.5rem solid var(--color-aliceBlue);
    border-top: 0.5rem solid var(--color-navyBlue);
  `,
  medium: css`
    padding: 3rem;
    border: 1.5rem solid var(--color-aliceBlue);
    border-top: 1.5rem solid var(--color-navyBlue);
  `,
  large: css`
    padding: 4rem;
    border: 2rem solid var(--color-aliceBlue);
    border-top: 2rem solid var(--color-navyBlue);
  `,
});

export const SpinnerStyled = styled.div`
  ${SpinnerSize}
  border-radius: 50%;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
