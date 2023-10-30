import { Inline } from '@bedrock-layout/inline';
import type { ReactNode } from 'react';
import type { LinkProps as RouterLinkProps } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Typography } from '../Typography';
import { RouterLinkStyled } from './Link.styled';

export type LinkAppearance = 'primary' | 'secondary';

export type LinkProps = {
  children: ReactNode;
  to: string;
  iconLeading?: ReactNode;
  iconTrailing?: ReactNode;
  appearance?: LinkAppearance;
  bold?: boolean;
  target?: RouterLinkProps['target'];
};

export function Link({
  children,
  to,
  iconLeading,
  iconTrailing,
  appearance = 'primary',
  bold = true,
  target,
}: LinkProps) {
  return (
    <ThemeProvider theme={{ appearance, bold }}>
      <RouterLinkStyled to={to} appearance={appearance} target={target}>
        <Inline gutter=".8rem" align="center">
          {iconLeading}

          {/* eslint-disable-next-line react/forbid-component-props */}
          <Typography fontWeight={bold ? 700 : undefined}>
            {children}
          </Typography>

          {iconTrailing}
        </Inline>
      </RouterLinkStyled>
    </ThemeProvider>
  );
}
