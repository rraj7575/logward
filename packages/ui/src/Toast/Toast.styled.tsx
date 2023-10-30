import { PadBox } from '@bedrock-layout/padbox';
import styled, { css } from 'styled-components';

import type { ToastType } from './Toast';

const toastStyles = {
  info: {
    color: 'var(--color-white)',
    backgroundColor: 'var(--color-black)',
    border: 'none',
  },
  infoBlue: {
    color: 'var(--color-egyptianBlue)',
    backgroundColor: 'var(--color-aliceBlue2)',
    border: '1px solid var(--color-lightGray)',
  },
  success: {
    color: 'var(--color-green)',
    backgroundColor: 'var(--color-honeydew)',
    border: 'none',
  },
  warning: {
    color: 'var(--color-tangerine)',
    backgroundColor: 'var(--color-earlyDawn)',
    border: 'none',
  },
  error: {
    color: 'var(--color-fireEngineRed)',
    backgroundColor: 'var(--color-snow)',
    border: 'none',
  },
};

const toastCSS = css<{ $toastType: ToastType }>`
  color: ${({ $toastType }) => toastStyles[$toastType].color};
  background-color: ${({ $toastType }) =>
    toastStyles[$toastType].backgroundColor};
  border: ${({ $toastType }) => toastStyles[$toastType].border};
`;

export const ToastStyled = styled(PadBox)<{ $toastType: ToastType }>`
  border-radius: 6px;
  ${toastCSS}
`;
