import { Id as ToastId, toast } from 'react-toastify';

import { Toast, ToastType } from './Toast';

function createToast(message: string, type: ToastType) {
  return toast(({ closeToast }) => {
    return <Toast message={message} type={type} onDismiss={closeToast} />;
  });
}

export const toasts: Record<ToastType, (message: string) => ToastId> = {
  info: (message: string) => createToast(message, 'info'),
  success: (message: string) => createToast(message, 'success'),
  error: (message: string) => createToast(message, 'error'),
  warning: (message: string) => createToast(message, 'warning'),
  infoBlue: (message: string) => createToast(message, 'infoBlue'),
};
