import type { PadBoxProps } from '@bedrock-layout/padbox';
import { Ref, forwardRef } from 'react';

import { Popover, PopoverMethods, PopoverProps } from './Popover';
import { PopoverPanelPadboxStyled } from './PopoverPanel.styled';

export type PopoverPanelProps = PopoverProps & PadBoxProps;

export const PopoverPanel = forwardRef(
  (
    { children, padding = '1.6rem', ...rest }: PopoverPanelProps,
    ref: Ref<PopoverMethods>
  ) => {
    return (
      <Popover {...rest} ref={ref}>
        <PopoverPanelPadboxStyled padding={padding}>
          {children}
        </PopoverPanelPadboxStyled>
      </Popover>
    );
  }
);

PopoverPanel.displayName = 'PopoverPanel';
