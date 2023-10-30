import { Inline } from '@bedrock-layout/inline';
import { ReactNode } from 'react';

import { Typography } from '../Typography';
import { TabStyled } from './Tab.styled';

export type TabProps = {
  children: ReactNode;
  active?: boolean;
  onClick?: () => void;
};

export function Tab({ children, active = false, onClick }: TabProps) {
  return (
    <Inline
      onClick={() => {
        if (onClick != null) onClick();
      }}
    >
      <TabStyled $active={active}>
        <Typography name="paragraph" active={active}>
          {children}
        </Typography>
      </TabStyled>
    </Inline>
  );
}

Tab.displayName = 'Tab';
