import { ReactNode, Ref, forwardRef } from 'react';
import { ThemeProvider } from 'styled-components';

import { Typography } from '../Typography';
import { TextButtonStyled } from './TextButton.styled';

export type TextButtonAppearance = 'primary' | 'secondary' | 'danger';

export type TextButtonProps = {
  onClick?: () => void;
  children: ReactNode;
  bold?: boolean;
  appearance?: TextButtonAppearance;
  disabled?: boolean;
};

export const TextButton = forwardRef(
  (
    {
      onClick,
      children,
      bold = true,
      appearance = 'primary',
      disabled = false,
    }: TextButtonProps,
    ref: Ref<HTMLButtonElement>
  ) => {
    return (
      <ThemeProvider theme={{ appearance, bold }}>
        <TextButtonStyled
          onClick={onClick}
          ref={ref}
          appearance={appearance}
          disabled={disabled}
        >
          {/* eslint-disable-next-line react/forbid-component-props */}
          <Typography fontWeight={bold ? 700 : undefined}>
            {children}
          </Typography>
        </TextButtonStyled>
      </ThemeProvider>
    );
  }
);

TextButton.displayName = 'TextButton';
