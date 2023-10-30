import { ReactNode, Ref, forwardRef } from 'react';

import { IconButtonStyled } from './IconButton.styled';

export type IconButtonProps = {
  onClick?: () => void;
  children: ReactNode;
  invertColor?: boolean;
  border?: boolean;
  padding?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
};

export const IconButton = forwardRef(
  (
    {
      onClick,
      children,
      invertColor = false,
      border = false,
      padding = false,
      type = 'button',
      disabled = false,
    }: IconButtonProps,
    ref: Ref<HTMLButtonElement>
  ) => {
    return (
      <IconButtonStyled
        onClick={onClick}
        border={border}
        invertColor={invertColor}
        padding={padding}
        ref={ref}
        type={type}
        disabled={disabled}
      >
        {children}
      </IconButtonStyled>
    );
  }
);

IconButton.displayName = 'IconButton';
