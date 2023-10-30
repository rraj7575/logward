import React, { ReactElement } from 'react';

import { MenuItemStyled } from './MenuItem.styled';

export type MenuItemProps = {
  children: ReactElement;
  value: any;
  onClick?: (value: any) => void;
  selected?: boolean;
  removeHover?: boolean;
  minWidth?: string;
};

export const MenuItem = ({
  onClick,
  children,
  value,
  selected,
  removeHover = false,
  minWidth,
}: MenuItemProps) => {
  return (
    <MenuItemStyled
      type="button"
      minWidth={minWidth}
      onClick={() => {
        if (typeof onClick === 'function') {
          onClick(value);
        }
      }}
      selected={selected}
      removeHover={removeHover}
    >
      {children}
    </MenuItemStyled>
  );
};
