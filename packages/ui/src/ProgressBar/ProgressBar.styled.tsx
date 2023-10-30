import _clamp from 'lodash/clamp';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';

import { ProgressBarAppearance } from './ProgressBar';

const commonCssPropertyOfProgressBarContainer = css`
  height: 0.6rem;
  border-radius: 0.4rem;
  width: inherit;
`;

const commonCssPropertyOfProgress = css`
  height: inherit;
  border-radius: inherit;
`;

export type ProgressBarContainerProps = {
  /**
   * Fill value in percentages without a % symbol
   */
  fill: number;
  appearance: ProgressBarAppearance;
};

export const ProgressBarFilled = styled.div`
  ${commonCssPropertyOfProgress};
  transition: width 0.2s;
`;

const progressBarAppearance = theme('appearance', {
  dodgerBlue: css`
    ${commonCssPropertyOfProgressBarContainer};
    background: var(--color-whiteSmoke);

    & > ${ProgressBarFilled} {
      background: var(--color-dodgerBlue);
    }
  `,
  seaGreen: css`
    ${commonCssPropertyOfProgressBarContainer};
    background: var(--color-lightCyan);

    & > ${ProgressBarFilled} {
      background: var(--color-seaGreen);
    }
  `,
});

export const ProgressBarContainer = styled.div<ProgressBarContainerProps>`
  ${progressBarAppearance}

  & > ${ProgressBarFilled} {
    width: ${({ fill }) => `${_clamp(fill, 0, 100)}%`};
  }
`;
