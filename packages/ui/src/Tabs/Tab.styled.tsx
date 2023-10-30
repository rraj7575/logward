import { Inline } from '@bedrock-layout/inline';
import { InlineCluster } from '@bedrock-layout/inline-cluster';
import styled, { css } from 'styled-components';

export type TabLayoutType = 'horizontal' | 'vertical';

type TabStyledProps = {
  $active: boolean;
  type: TabLayoutType;
};

type TabListStyledProps = {
  type: TabLayoutType;
};

const getTabStylesBasedOnType = (type: TabLayoutType, $active: boolean) => {
  if (type === 'vertical') {
    return css`
      background-color: ${$active ? 'var(--color-aliceBlue)' : ''};
      display: block;
      inline-size: 100%;
      border-radius: 6px;
    `;
  }

  return css``;
};

const getTabListStylesBasedonType = (type: TabLayoutType) => {
  if (type === 'vertical') {
    return css`
      flex-direction: column;
      flex-wrap: nowrap;
    `;
  } else {
    return css`
      border-block-end: #e3e3e3 solid 1px;
    `;
  }
};

export const TabListStyled = styled(InlineCluster)<TabListStyledProps>`
  ${({ type }) => getTabListStylesBasedonType(type)}
`;

export const TabStyledContainer = styled(Inline)<TabStyledProps>`
  ${({ type, $active }) => getTabStylesBasedOnType(type, $active)}
`;

export const TabStyled = styled.div<TabStyledProps>`
  position: relative;
  cursor: pointer;

  padding: ${({ type }) =>
    type === 'horizontal'
      ? 'var(--padding-buttonMediumVertical) var(--padding-buttonLargeHorizontal)'
      : '1rem 2rem'};

  ${({ $active, type }) =>
    $active &&
    type === 'horizontal' &&
    `&::before {
          content:'';
          width: 100%;
          height: 3px;
          background-color: var(--color-dodgerBlue);
          position: absolute;
          bottom: 0;
          inset-inline-start: 0;
      }
    `}
`;
