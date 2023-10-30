import { Inline, PadBox } from '@bedrock-layout/primitives';
import type { InlineProps } from '@bedrock-layout/primitives';
import { ReactNode } from 'react';

type ModalFooterProp = {
  children?: ReactNode;
  justify?: InlineProps['justify'];
};

export const ModalFooter = ({ children, justify = 'end' }: ModalFooterProp) => {
  return (
    <PadBox padding={['3rem', 0, 0]}>
      <Inline justify={justify} gutter="1rem">
        {children}
      </Inline>
    </PadBox>
  );
};
