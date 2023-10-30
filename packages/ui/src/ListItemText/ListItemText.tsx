import { ReactNode } from 'react';

import { Typography } from '../Typography';

export type ListItemTextProps = {
  children: ReactNode;
  active?: boolean;
};

export function ListItemText({ children, active }: ListItemTextProps) {
  return (
    <Typography name="sidebar" active={active}>
      {children}
    </Typography>
  );
}
