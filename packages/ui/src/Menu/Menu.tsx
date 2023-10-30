import { Children, ReactElement, Ref, cloneElement, forwardRef } from 'react';
import type { Placement } from 'tippy.js';

import { PopoverMethods, PopoverPanel } from '../Popover';
import { StackWrapper } from './Menu.styled';
import { MenuLauncher } from './MenuLauncher';

export type MenuProps = {
  children: ReactElement | ReactElement[];
  onMenuItemClick: (val: any) => void;
  label?: string;
  launcher?: ReactElement;
  placement?: Placement;
  disabled?: boolean;
  maxWidth?: string;
};

export const Menu = forwardRef(
  (
    {
      children,
      onMenuItemClick,
      label,
      launcher,
      placement = 'bottom-end',
      disabled = false,
      maxWidth,
    }: MenuProps,
    ref: Ref<PopoverMethods>
  ) => {
    return (
      <PopoverPanel
        trigger="click"
        launcher={launcher ?? <MenuLauncher label={label} />}
        padding={[4, 0, 4, 0]}
        ref={ref}
        placement={placement}
        disabled={disabled}
      >
        <StackWrapper maxWidth={maxWidth} gutter={0}>
          {Children.map(children, (child, index) =>
            cloneElement(child, {
              onClick: onMenuItemClick,
            })
          )}
        </StackWrapper>
      </PopoverPanel>
    );
  }
);

Menu.displayName = 'Menu';
