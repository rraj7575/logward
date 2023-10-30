import { Children, ReactElement, cloneElement } from 'react';

import { TabListStyled } from './Tab.styled';

export type TabListProps = {
  children: ReactElement | ReactElement[];
  activeIndex?: number;
  type?: string;
  onClick?: (tab: number) => void;
};

export function TabList({
  children,
  activeIndex = 0,
  type = 'horizontal',
  onClick,
}: TabListProps) {
  const gutterByType = type === 'vertical' ? '0.5rem' : 0;

  return (
    <TabListStyled type={type} gutter={gutterByType}>
      {Children.map(children, (child, index) =>
        cloneElement(child, {
          active: activeIndex === index,
          type,
          onClick: () => {
            if (onClick != null) {
              onClick(index);
            }
          },
        })
      )}
    </TabListStyled>
  );
}
