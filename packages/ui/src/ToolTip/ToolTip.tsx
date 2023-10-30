import { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import type { Placement } from 'tippy.js';
import { PopoverPanel, Typography } from 'ui';

import { ToolTipStyled } from './ToolTip.style';
import { ToolTipLauncher } from './ToolTipLauncher';

export type ToolTipSize = 'small' | 'medium' | 'large';

export type ToolTipProps = {
  children: ReactElement;
  message: string;
  size?: ToolTipSize;
  placement?: Placement;
  launcher?: ReactElement;
  visible?: boolean;
};

export function ToolTip({
  children,
  message,
  size = 'small',
  placement = 'bottom',
  launcher,
  visible = true,
}: ToolTipProps) {
  return (
    <ThemeProvider theme={{ size }}>
      <PopoverPanel
        launcher={launcher ?? <ToolTipLauncher element={children} />}
        padding={0}
        placement={placement}
      >
        {visible ? (
          <ToolTipStyled padding="1rem">
            <Typography>{message}</Typography>
          </ToolTipStyled>
        ) : null}
      </PopoverPanel>
    </ThemeProvider>
  );
}
