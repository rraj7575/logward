import { Inline } from '@bedrock-layout/inline';
import React, { Ref, forwardRef } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';

import { MenuLauncherStyled } from './MenuLauncher.styled';

export type MenuLauncherProps = {
  label?: string;
};

export const MenuLauncher = forwardRef(
  ({ label = '' }: MenuLauncherProps, ref: Ref<HTMLButtonElement>) => {
    return (
      <Inline as={MenuLauncherStyled} gutter={8} align="center" ref={ref}>
        {label}
        <AiFillCaretDown size={14} color={'var(--color-lightGray)'} />
      </Inline>
    );
  }
);

MenuLauncher.displayName = 'MenuLauncher';
