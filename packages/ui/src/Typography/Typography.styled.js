import _isNil from 'lodash/isNil';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';
const commonFont = css `
  font-size: 1.4rem;
  line-height: 1.57;
  font-weight: 400;

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;
const smallFont = css `
  font-size: 1.2rem;
  line-height: 1.33;
  font-weight: 400;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;
const namedTypography = theme('name', {
    xLarge: css `
    font-size: 4rem;
    line-height: 1.5;
    font-weight: 900;

    @media (max-width: 480px) {
      font-size: 3rem;
    }
  `,
    heading1: css `
    font-size: 2.4rem;
    line-height: 1.5;
    font-weight: 400;

    @media (max-width: 480px) {
      font-size: 2rem;
    }
  `,
    heading2: css `
    font-size: 2rem;
    line-height: 1.5;
    font-weight: 700;

    @media (max-width: 480px) {
      font-size: 1.6rem;
    }
  `,
    heading3: css `
    font-size: 1.6rem;
    line-height: 1.5;
    font-weight: 400;

    @media (max-width: 480px) {
      font-size: 1.4rem;
    }
  `,
    heading4: css `
    ${commonFont}
  `,
    heading5: css `
    ${smallFont}
  `,
    heading6: css `
    font-size: 1rem;
    line-height: 1.6;
    font-weight: 400;

    @media (max-width: 480px) {
      font-size: 0.8rem;
    }
  `,
    paragraph: css `
    ${commonFont}
  `,
    paragraphSmall: css `
    font-size: 1.2rem;
    line-height: 1.57;
    font-weight: 400;

    @media (max-width: 480px) {
      font-size: 1rem;
    }
  `,
    secondary: css `
    font-size: 1.6rem;
    line-height: 1.5;
    font-weight: 400;
    color: var(--color-darkGray);

    @media (max-width: 480px) {
      font-size: 1.4rem;
    }
  `,
    secondarySmall: css `
    font-size: 1.4rem;
    line-height: 1.5;
    font-weight: 400;
    color: var(--color-darkGray);

    @media (max-width: 480px) {
      font-size: 1.2rem;
    }
  `,
    secondarySmallDark: css `
    font-size: 1.4rem;
    line-height: 1.5;
    font-weight: 400;
    color: var(--color-charcoal);

    @media (max-width: 480px) {
      font-size: 1.2rem;
    }
  `,
    secondary2: css `
    ${commonFont};

    color: ${({ active }) => active ? 'var(--color-charcoal)' : 'var(--color-darkGray)'};
  `,
    secondaryXs: css `
    font-size: 1.2rem;
    line-height: 1.5;
    font-weight: 400;
    color: var(--color-darkGray);

    @media (max-width: 480px) {
      font-size: 1rem;
    }
  `,
    listTitle: css `
    font-size: 1.2rem;
    line-height: 2;
    font-weight: 400;
    color: var(--color-darkGray);
    text-transform: uppercase;

    @media (max-width: 480px) {
      font-size: 1rem;
    }
  `,
    sidebar: css `
    ${commonFont};

    color: ${({ active }) => active ? 'var(--color-dodgerBlue)' : 'var(--color-charcoal)'};
  `,
    error: css `
    ${smallFont};
    color: var(--color-fireEngineRed);
  `,
    success: css `
    ${smallFont};
    color: var(--color-green);
  `,
});
export const TypographyStyled = styled.p `
  ${namedTypography};

  text-decoration: ${({ textDecoration }) => textDecoration};

  ${({ fontWeight }) => !_isNil(fontWeight) &&
    css `
      font-weight: ${fontWeight};
    `};
`;
