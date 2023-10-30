import { Stack } from '@bedrock-layout/stack';
import { ReactNode, Ref, forwardRef } from 'react';

import { Popover, PopoverMethods } from './Popover';
import { PopoverMenuPadboxStyled } from './PopoverMenu.styled';

export type PopoverMenuProps = {
  children: ReactNode[];
};

export const PopoverMenu = forwardRef(
  ({ children, ...rest }: PopoverMenuProps, ref: Ref<PopoverMethods>) => {
    return (
      <Popover {...rest} ref={ref}>
        <PopoverMenuPadboxStyled as={Stack}>{children}</PopoverMenuPadboxStyled>
      </Popover>
    );
  }
);

PopoverMenu.displayName = 'PopoverMenu';
