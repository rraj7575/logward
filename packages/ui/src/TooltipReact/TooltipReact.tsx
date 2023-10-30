import type { ReactElement, ReactNode } from 'react';
import { type PlacesType, Tooltip as ReactTooltip } from 'react-tooltip';

import { Launcher } from './Launcher';

export type TooltipReactProps = {
  children: ReactNode;
  id: string;
  launcher?: ReactElement;
  placement?: PlacesType;
};

export function TooltipReact({
  children,
  launcher,
  placement = 'top-start',
  id,
}: TooltipReactProps) {
  return (
    <span>
      {launcher != null ? (
        <span data-tooltip-id={id}>{launcher}</span>
      ) : (
        <Launcher id={id} />
      )}

      <ReactTooltip
        id={id}
        place={placement}
        style={{
          zIndex: 999,
          maxWidth: '30rem',
        }}
        clickable
      >
        {children}
      </ReactTooltip>
    </span>
  );
}
