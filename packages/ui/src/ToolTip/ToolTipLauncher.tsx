import { Inline } from '@bedrock-layout/primitives';
import { ReactElement, Ref, forwardRef } from 'react';

type ToolTipRefProps = {
  element: ReactElement;
};

export const ToolTipLauncher = forwardRef(
  ({ element }: ToolTipRefProps, ref: Ref<HTMLSpanElement>) => {
    return (
      <Inline>
        <span ref={ref}>{element}</span>
      </Inline>
    );
  }
);

ToolTipLauncher.displayName = 'ToolTipLauncher';
