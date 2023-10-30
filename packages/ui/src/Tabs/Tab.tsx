import { ReactNode } from 'react';

import { Typography } from '../Typography';
import { TabLayoutType, TabStyled, TabStyledContainer } from './Tab.styled';

export type TabProps = {
  children: ReactNode;
  active?: boolean;
  type?: TabLayoutType;
  onClick?: () => void;
};

export function Tab({
  children,
  active = false,
  type = 'horizontal',
  onClick,
}: TabProps) {
  return (
    <TabStyledContainer
      type={type}
      $active={active}
      onClick={() => {
        if (typeof onClick === 'function') onClick();
      }}
    >
      <TabStyled $active={active} type={type}>
        <Typography name="paragraph" active={active}>
          {children}
        </Typography>
      </TabStyled>
    </TabStyledContainer>
  );
}
