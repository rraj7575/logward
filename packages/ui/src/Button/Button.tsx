import { Inline } from '@bedrock-layout/inline';
import { ReactNode, Ref, forwardRef } from 'react';
import { ThemeProvider } from 'styled-components';

import { ButtonStyled } from './Button.styled';

export type Appearance =
  | 'contained'
  | 'bordered'
  | 'filled'
  | 'text'
  | 'danger'
  | 'neutral'
  | 'borderedNeutral'
  | 'bordered-black';

export type Size = 'small' | 'medium' | 'large';

export type Type = 'button' | 'submit' | 'reset';

export type ButtonProps = {
  onClick?: () => void;
  children?: ReactNode;
  label?: ReactNode;
  appearance?: Appearance;
  size?: Size;
  disabled?: boolean;
  type?: Type;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
};

export const Button = forwardRef(
  (
    {
      onClick,
      children,
      label,
      appearance = 'contained',
      size = 'small',
      disabled = false,
      type = 'button',
      leadingIcon,
      trailingIcon,
    }: ButtonProps,
    ref: Ref<HTMLButtonElement>
  ) => {
    const text = children ?? label;

    return (
      <ThemeProvider theme={{ appearance, size }}>
        <ButtonStyled
          type={type}
          disabled={disabled}
          onClick={onClick}
          ref={ref}
        >
          <Inline gutter="0.8rem" justify="center">
            {leadingIcon}
            {text}
            {trailingIcon}
          </Inline>
        </ButtonStyled>
      </ThemeProvider>
    );
  }
);

Button.displayName = 'Button';
