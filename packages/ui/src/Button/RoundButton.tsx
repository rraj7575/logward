import { ReactNode, Ref, forwardRef } from 'react';

import { RoundButtonStyled } from './RoundButton.styled';

export type RoundButtonProps = {
  children: ReactNode;
  onClick: () => void;
  active?: boolean;
  disabled?: boolean;
};

export const RoundButton = forwardRef(
  (
    { onClick, children, active = false, disabled = false }: RoundButtonProps,
    ref: Ref<HTMLButtonElement>
  ) => {
    return (
      <RoundButtonStyled
        onClick={onClick}
        active={active}
        disabled={disabled}
        ref={ref}
      >
        {children}
      </RoundButtonStyled>
    );
  }
);

RoundButton.displayName = 'RoundButton';
