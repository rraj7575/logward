import Tippy from '@tippyjs/react/headless';
import {
  ForwardedRef,
  ReactElement,
  ReactNode,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
} from 'react';
import { IoEllipsisVerticalOutline } from 'react-icons/io5';
import type { Instance, Placement } from 'tippy.js';

import { IconButton } from '../Button/IconButton';

export type Trigger = 'hover' | 'click' | 'none';

export type PopoverProps = {
  children: ReactNode | string;
  launcher?: ReactElement;
  placement?: Placement;
  arrow?: string | boolean | SVGElement | DocumentFragment | undefined;
  trigger?: Trigger;
  disabled?: boolean;
};

export type PopoverMethods = {
  show: () => void;
  hide: () => void;
  toggle: () => void;
};

function getTrigger(trigger: Trigger) {
  switch (trigger) {
    case 'hover':
      return 'mouseenter focus click';
    case 'click':
      return 'click';
    default:
      return 'manual';
  }
}

export const Popover = forwardRef(
  (
    {
      launcher,
      children,
      placement = 'bottom-end',
      trigger = 'hover',
      arrow = false,
      disabled = false,
      ...rest
    }: PopoverProps,
    ref: ForwardedRef<PopoverMethods>
  ) => {
    const tippy = useRef<Instance>();
    const show = useCallback(() => tippy.current?.show(), []);
    const hide = useCallback(() => tippy.current?.hide(), []);
    const toggle = useCallback(() => {
      return tippy.current?.[tippy.current?.state.isShown ? 'hide' : 'show']();
    }, []);

    useImperativeHandle(
      ref,
      () => ({
        show,
        hide,
        toggle,
      }),
      [show, hide, toggle]
    );

    const launcherButton = (
      <IconButton border padding>
        <IoEllipsisVerticalOutline size={24} />
      </IconButton>
    );

    return (
      <Tippy
        onCreate={(instance) => (tippy.current = instance)}
        onDestroy={() => (tippy.current = undefined)}
        render={() => children ?? <span />}
        placement={placement}
        arrow={arrow}
        trigger={getTrigger(trigger)}
        interactive
        allowHTML={true}
        disabled={disabled}
        {...rest}
      >
        {launcher ?? launcherButton}
      </Tippy>
    );
  }
);

Popover.displayName = 'Popover';
