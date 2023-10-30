import { ThemeProvider } from 'styled-components';

import { Typography } from '../Typography';
import { PublishedStatusContainer } from './PublishedStatus.styled';

export const PublishedStatus = {
  new: 'New',
  draft: 'Draft',
  published: 'Published',
  tested: 'Tested',
  live: 'Live',
};

export type PublishedStatusLabelProps = {
  publishedStatus: keyof typeof PublishedStatus;
};

export function PublishedStatusLabel({
  publishedStatus,
}: PublishedStatusLabelProps) {
  return (
    <ThemeProvider theme={{ status: publishedStatus }}>
      <PublishedStatusContainer padding={['0.6rem', '0.8rem']}>
        <Typography name="paragraphSmall">
          {PublishedStatus[publishedStatus]}
        </Typography>
      </PublishedStatusContainer>
    </ThemeProvider>
  );
}
