import { Inline } from '@bedrock-layout/inline';
import _isNil from 'lodash/isNil';
import type { ReactNode } from 'react';
import { RxCross2 } from 'react-icons/rx';

import { IconButton } from '../Button/IconButton';
import { Typography } from '../Typography';
import { ToastStyled } from './Toast.styled';
import { ToastIcon } from './ToastIcon';

export type ToastType = 'info' | 'success' | 'warning' | 'error' | 'infoBlue';

export type ToastProps = {
  message: ReactNode;
  type?: ToastType;
  onDismiss?: () => void;
};

export function Toast({ message, type = 'info', onDismiss }: ToastProps) {
  return (
    <ToastStyled padding={16} $toastType={type}>
      <Inline gutter={8} align="start" stretch={1} minItemWidth={24}>
        <ToastIcon type={type} />
        {typeof message === 'string' ? (
          <Typography>{message}</Typography>
        ) : (
          message
        )}

        {!_isNil(onDismiss) && (
          <IconButton onClick={onDismiss} invertColor={type === 'info'}>
            <RxCross2 size={24} />
          </IconButton>
        )}
      </Inline>
    </ToastStyled>
  );
}
