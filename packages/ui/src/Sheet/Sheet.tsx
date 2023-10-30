import { Inline } from '@bedrock-layout/inline';
import _isNil from 'lodash/isNil';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { useCurrentLayer } from '../Layer';
import { Overlay } from '../Overlay';
import { ContentContainer, ContentStyled } from './Sheet.styled';
import { SheetCrossButton } from './SheetCrossButton';

export type SheetSize = 'small' | 'medium' | 'mediumLarge' | 'large';

export type SheetProps = {
  children: ReactNode;
  size?: SheetSize;
  loading?: JSX.Element | null;
  onClose?: () => void;
};

export const Sheet = ({
  children,
  size = 'large',
  loading,
  onClose,
}: SheetProps) => {
  const { close, isLast } = useCurrentLayer();

  const slideInLeft = {
    initial: { opacity: 0, right: -100 },
    visible: { opacity: 1, right: 0 },
  };

  return (
    <ThemeProvider theme={{ size }}>
      <ContentContainer>
        <Overlay show={isLast} />

        <Inline gutter={8} align="start" minItemWidth={22} justify="end">
          <SheetCrossButton
            onClick={typeof onClose === 'function' ? onClose : close}
          />

          {!_isNil(loading) ? (
            <ContentStyled>loading</ContentStyled>
          ) : (
            <ContentStyled
              variants={slideInLeft}
              initial="initial"
              animate="visible"
              exit="initial"
            >
              {children}
            </ContentStyled>
          )}
        </Inline>
      </ContentContainer>
    </ThemeProvider>
  );
};
