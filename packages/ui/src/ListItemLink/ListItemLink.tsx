import { ReactNode, Ref, forwardRef } from 'react';

import { LinkStyled } from './ListItemLink.styled';

type ListItemProps = {
  children: ReactNode;
  to: string;
  active: boolean;
  isHide: boolean;
};

export const ListItemLink = forwardRef(
  (
    { children, to, active = false, isHide = true }: ListItemProps,
    ref: Ref<HTMLAnchorElement>
  ) => {
    return (
      <LinkStyled ref={ref} to={to} $active={active} $isHide={isHide}>
        {children}
      </LinkStyled>
    );
  }
);

ListItemLink.displayName = 'ListItemLink';
