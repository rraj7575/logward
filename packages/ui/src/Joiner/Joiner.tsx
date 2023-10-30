import { Children, Fragment, ReactElement } from 'react';

export type JoinerProps = {
  children: ReactElement[];
  delimiter?: string;
  isBlock?: boolean;
};

export function Joiner({
  children,
  delimiter = ',',
  isBlock = false,
}: JoinerProps) {
  const Element = isBlock ? 'div' : 'span';

  return (
    <>
      {Children.map(children, (child, index) => {
        return (
          <Fragment key={index}>
            <Element>
              {child}
              {index === children.length - 1 ? null : delimiter + ' '}
            </Element>
          </Fragment>
        );
      })}
    </>
  );
}
