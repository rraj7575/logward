import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';

import { LinkAppearance } from './Link';

const linkAppearance = theme('appearance', {
  primary: css`
    color: var(--color-dodgerBlue);
    text-decoration: none;
  `,
  secondary: css`
    color: var(--color-charcoal);
  `,
});

type LinkStyledProps = {
  appearance: LinkAppearance;
};

export const RouterLinkStyled = styled(Link)<LinkStyledProps>`
  ${linkAppearance}
`;
