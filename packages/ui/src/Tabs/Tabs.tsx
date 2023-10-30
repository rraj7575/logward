import _isNil from 'lodash/isNil';
import {
  Children,
  ReactElement,
  cloneElement,
  useEffect,
  useState,
} from 'react';

export type TabsProps = {
  children: ReactElement[];
  defaultOpen?: number;
  type?: string;
  onTabChange?: (index: number) => void;
};

export function Tabs({
  children,
  defaultOpen,
  onTabChange,
  type = 'horizontal',
}: TabsProps) {
  const [activeIndex, setActiveIndex] = useState<number>(defaultOpen ?? 0);

  useEffect(() => {
    if (!_isNil(defaultOpen) && typeof defaultOpen === 'number') {
      setActiveIndex(defaultOpen);
    }
  }, [defaultOpen]);

  useEffect(() => {
    if (typeof onTabChange === 'function') {
      onTabChange(activeIndex);
    }
  }, [activeIndex]);

  const setNewActiveTabIndex = (activeIndex: number) =>
    setActiveIndex(activeIndex);

  return (
    <>
      {Children.map(children, (child) => {
        return cloneElement(child, {
          activeIndex,
          type,
          onClick: setNewActiveTabIndex,
        });
      })}
    </>
  );
}
