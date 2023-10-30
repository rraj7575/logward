import { AriaAttributes, CSSProperties, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { TypographyStyled } from './Typography.styled';

export const typographyElements = {
  xLarge: 'h1',
  error: 'p',
  heading1: 'h1',
  heading2: 'h2',
  heading3: 'h3',
  heading4: 'h4',
  heading5: 'h5',
  heading6: 'h6',
  paragraph: 'p',
  paragraphSmall: 'p',
  secondary: 'p',
  secondarySmall: 'p',
  listTitle: 'p',
  sidebar: 'p',
  secondary2: 'p',
  secondaryXs: 'p',
  secondarySmallDark: 'p',
  success: 'p',
};

export type Name = keyof typeof typographyElements;

export type FontWeight = 400 | 700 | 900;

export type TypographyProps = AriaAttributes & {
  children: ReactNode;
  /** Name of the style to be applied */
  name?: Name;
  /** Element to render in the HTML, by default it's a *p* tag */
  element?: keyof JSX.IntrinsicElements;
  /** Only specific to sidebar */
  active?: boolean;
  /** You can override the font-weight manually. Shouldn't be used by user code. */
  fontWeight?: FontWeight;
  textDecoration?: CSSProperties['textDecoration']; // 'none' | 'line-through' | 'overline' | 'underline';
  className?: string;
};

export function Typography({
  className = '',
  children,
  name = 'paragraph',
  element,
  active = false,
  fontWeight,
  textDecoration = 'none',
}: TypographyProps) {
  const as =
    element ?? (typographyElements[name] as keyof JSX.IntrinsicElements);

  return (
    <ThemeProvider theme={{ name }}>
      <TypographyStyled
        as={as}
        active={active}
        fontWeight={fontWeight}
        textDecoration={textDecoration}
        className={className}
      >
        {children}
      </TypographyStyled>
    </ThemeProvider>
  );
}
