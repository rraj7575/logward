import { ReactNode } from 'react';

export type TabPanelProps = {
  children: ReactNode;
};

export function TabPanel({ children }: TabPanelProps) {
  return <>{children}</>;
}
