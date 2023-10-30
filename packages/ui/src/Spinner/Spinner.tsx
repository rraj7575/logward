import { ThemeProvider } from 'styled-components';

import { SpinnerStyled } from './Spinner.styled';

export type Size = 'extraSmall' | 'small' | 'medium' | 'large';

export type SpinnerProps = {
  size?: Size;
};

export const Spinner = ({ size = 'small' }: SpinnerProps) => {
  return (
    <ThemeProvider theme={{ size }}>
      <SpinnerStyled />
    </ThemeProvider>
  );
};
