import { ReactElement } from 'react';

export type TabPanelsProps = {
  children: ReactElement[] | ReactElement;
  activeIndex?: number;
};

export function TabPanels({ children, activeIndex = 0 }: TabPanelsProps) {
  return Array.isArray(children) ? children[activeIndex] : children;
}
