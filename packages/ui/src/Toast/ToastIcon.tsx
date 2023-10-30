import { AiFillInfoCircle, AiFillWarning } from 'react-icons/ai';
import { BsCheckCircleFill } from 'react-icons/bs';

import type { ToastType } from './Toast';

type ToastIconProps = {
  type: ToastType;
};

export function ToastIcon({ type }: ToastIconProps) {
  if (['warning', 'error'].includes(type)) {
    return <AiFillWarning size={24} />;
  }

  if (type === 'success') {
    return <BsCheckCircleFill size={24} />;
  }

  return <AiFillInfoCircle size={24} />;
}
