import { ReactNode, Ref, forwardRef } from 'react';

import { ListStyled } from './List.styled';
import { ListTitle } from './ListTitle';

export type ListProps = {
  title?: string;
  children: ReactNode[] | ReactNode;
};

export const List = forwardRef(
  ({ title, children }: ListProps, ref: Ref<HTMLDivElement>) => {
    return (
      <ListStyled ref={ref}>
        <ListTitle text={title} />

        {children}
      </ListStyled>
    );
  }
);

List.displayName = 'List';
