import { ThemeProvider } from 'styled-components';

import { ProgressBarContainer, ProgressBarFilled } from './ProgressBar.styled';

export type ProgressBarAppearance = 'dodgerBlue' | 'seaGreen';

export type ProgressBarProps = {
  appearance?: ProgressBarAppearance;
  fill: number;
};

export function ProgressBar({
  appearance = 'dodgerBlue',
  fill,
}: ProgressBarProps) {
  return (
    <ThemeProvider theme={{ appearance, fill }}>
      <ProgressBarContainer appearance={appearance} fill={fill}>
        <ProgressBarFilled />
      </ProgressBarContainer>
    </ThemeProvider>
  );
}
