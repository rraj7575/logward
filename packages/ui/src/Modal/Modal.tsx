import { Inline, PadBox } from '@bedrock-layout/primitives';
import _isNil from 'lodash/isNil';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { Typography, useCurrentLayer } from 'ui';
import { Overlay } from 'ui/src/Overlay';

import { ModalContainer } from './Modal.styled';
import { ModalCloseButton } from './ModalCloseButton';

export type ModalSize =
  | 'small'
  | 'medium'
  | 'large'
  | 'extraLarge'
  | 'doubleExtraLarge';

type ModalProps = {
  title?: ReactNode;
  children: ReactNode;
  size?: ModalSize;
  onClose?: () => void;
  hideCloseButton?: boolean;
};

export function Modal({
  children,
  size = 'large',
  title,
  onClose,
  hideCloseButton = false,
}: ModalProps) {
  const { close } = useCurrentLayer();

  const slideInTop = {
    initial: { opacity: 0, top: '40%' },
    visible: { opacity: 1, top: '50%' },
  };

  return (
    <ThemeProvider theme={{ size }}>
      <Overlay show={true} />

      <ModalContainer
        variants={slideInTop}
        initial="initial"
        animate="visible"
        exit="initial"
      >
        <PadBox padding="1.5rem">
          <Inline
            align="center"
            {...(_isNil(title) ? { justify: 'end' } : { stretch: 'start' })}
            minItemWidth={30}
          >
            {!_isNil(title) && typeof title === 'string' ? (
              <Typography name="heading2">{title}</Typography>
            ) : (
              title
            )}

            {!hideCloseButton && (
              <ModalCloseButton
                onClick={typeof onClose === 'function' ? onClose : close}
              />
            )}
          </Inline>

          {children}
        </PadBox>
      </ModalContainer>
    </ThemeProvider>
  );
}
