import styled from 'styled-components';

type TabStyledProps = {
  $active: boolean;
};

export const TabStyled = styled.div<TabStyledProps>`
  position: relative;
  padding: var(--padding-buttonMediumVertical)
    var(--padding-buttonLargeHorizontal);
  cursor: pointer;
  ${({ $active }) =>
    $active &&
    `background-color: var(--color-solitudeSecondary);
    &:before {
        content:'';
        width: 100%;
        height: 0.3rem;
        background-color: blue;
        position: absolute;
        bottom: 0;
        inset-inline-start: 0;
    }
    `}
`;
