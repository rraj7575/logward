import { Inline } from '@bedrock-layout/inline';
import { ReactElement, Ref, forwardRef } from 'react';

import { ListItemStyled } from './ListItem.styled';

export type ListItemProps = {
  onClick?: () => void;
  children: ReactElement[];
  active: boolean;
};

export const ListItem = forwardRef(
  (
    { onClick, children, active = false }: ListItemProps,
    ref: Ref<HTMLDivElement>
  ) => {
    return (
      <ListItemStyled
        padding={11}
        onClick={() => {
          if (typeof onClick === 'function') {
            onClick();
          }
        }}
        $active={active}
        ref={ref}
      >
        <Inline gutter={11} align="center" minItemWidth={22}>
          {children}
        </Inline>
      </ListItemStyled>
    );
  }
);

ListItem.displayName = 'ListItem';
