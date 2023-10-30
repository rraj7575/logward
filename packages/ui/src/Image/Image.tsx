import { Frame } from '@bedrock-layout/frame';
import type { FrameProps } from '@bedrock-layout/frame';
import _isNil from 'lodash/isNil';
import { ThemeProvider } from 'styled-components';

import { ImageContainer } from './Image.styled';

export type ImagePropsType = FrameProps & {
  src: string;
  alt: string;
  round?: boolean;
  size?: 'xs' | 'small' | 'medium' | 'large' | 'self';
};

export const Image = ({
  src,
  alt,
  ratio,
  round = false,
  size = 'small',
}: ImagePropsType) => {
  const pictureElement = (
    <picture>
      <img src={src} alt={alt} loading="lazy" />
    </picture>
  );

  return (
    <ThemeProvider theme={{ size }}>
      <ImageContainer round={round}>
        {_isNil(ratio) ? (
          pictureElement
        ) : (
          <Frame ratio={ratio}>{pictureElement}</Frame>
        )}
      </ImageContainer>
    </ThemeProvider>
  );
};
