import { PadBox } from '@bedrock-layout/padbox';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';

const publishedStatusAppearance = theme('status', {
  new: css`
    background-color: var(--color-amour);
    color: var(--color-jazzberryJam);
  `,
  draft: css`
    background: var(--color-earlyDawn);
    color: var(--color-tangerine);
  `,
  tested: css`
    background: var(--color-aliceBlue);
    color: var(--color-dodgerBlue);
  `,
  published: css`
    background: var(--color-honeydew);
    color: var(--color-malachite);
  `,
  live: css`
    background-color: var(--color-lightCyan);
    color: var(--color-green);
  `,
});

export const PublishedStatusContainer = styled(PadBox)`
  border-radius: 0.5rem;

  ${publishedStatusAppearance};
`;
