import { ReactNode } from 'react';

type ModalContentProp = {
  children?: ReactNode;
};

export const ModalContent = ({ children }: ModalContentProp) => {
  return <>{children}</>;
};
