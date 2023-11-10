import styled, { css } from 'styled-components';
import theme from 'styled-theming';
const disabledCssRules = css `
  cursor: default;
  color: var(--color-darkGray);
`;
const buttonAppearance = theme('appearance', {
    contained: css `
    border-color: var(--color-dodgerBlue);
    background-color: var(--color-dodgerBlue);
    color: var(--color-white);

    :disabled {
      ${disabledCssRules};
      background-color: var(--color-solitude);
      border-color: var(--color-solitude);
    }
  `,
    bordered: css `
    border-color: var(--color-dodgerBlue);
    background-color: var(--color-white);
    color: var(--color-dodgerBlue);

    :disabled {
      ${disabledCssRules};
      border-color: var(--color-solitude);
    }
  `,
    borderedNeutral: css `
    border-color: var(--color-whiteSmoke);
    background-color: var(--color-white);
    color: var(--color-black);

    :disabled {
      ${disabledCssRules};
      border-color: var(--color-solitude);
    }
  `,
    'bordered-black': css `
    border-color: var(--color-solitude);
    background-color: var(--color-white);
    color: var(--color-black);
    :disabled {
      ${disabledCssRules};
      background-color: var(--color-whiteSmoke);
    }
  `,
    filled: css `
    border-color: var(--color-aliceBlue);
    background-color: var(--color-aliceBlue);
    color: var(--color-dodgerBlue);

    :disabled {
      ${disabledCssRules};
      background-color: var(--color-white);
      border-color: var(--color-solitude);
    }
  `,
    text: css `
    border-color: transparent;
    background: var(--color-white);
    color: var(--color-dodgerBlue);

    :disabled {
      ${disabledCssRules}
    }
  `,
    danger: css `
    border-color: var(--color-fireEngineRed);
    background-color: var(--color-fireEngineRed);
    color: var(--color-white);

    :disabled {
      ${disabledCssRules};
      background-color: var(--color-white);
      border-color: var(--color-solitude);
    }
  `,
    neutral: css `
    border-color: var(--color-whiteSmoke);
    background-color: var(--color-whiteSmoke);
    color: var(--color-black);

    :disabled {
      ${disabledCssRules};
      background-color: var(--color-white);
      border-color: var(--color-solitude);
    }
  `,
});
const buttonSize = theme('size', {
    small: css `
    font-size: 1.4rem;
    padding: var(--padding-buttonSmallVertical)
      var(--padding-buttonSmallHorizontal);
  `,
    medium: css `
    font-size: 1.4rem;
    padding: var(--padding-buttonMediumVertical)
      var(--padding-buttonMediumHorizontal);
  `,
    large: css `
    font-size: 1.6rem;
    padding: var(--padding-buttonLargeVertical)
      var(--padding-buttonLargeHorizontal);
  `,
});
export const buttonBorderCss = css `
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
`;
export const ButtonStyled = styled.button `
  cursor: pointer;
  ${buttonBorderCss}
  ${buttonAppearance}
  ${buttonSize}
`;
