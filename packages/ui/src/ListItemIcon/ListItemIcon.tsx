import { ReactElement, cloneElement } from 'react';
import styled, { css } from 'styled-components';

export type ListItemIconProps = {
  icon: ReactElement;
  $active: boolean;
  isImage?: boolean;
};

const StyledListItemIcon = styled.span<{
  $active: boolean;
  $isImage: boolean;
}>`
  filter: grayscale(1);

  ${({ $active }) =>
    css`
      filter: ${$active ? 'grayscale(0)' : 'grayscale(1)'};
    `}
`;

export function ListItemIcon({
  icon,
  $active,
  isImage = false,
}: ListItemIconProps) {
  if (isImage) {
    return (
      <StyledListItemIcon $active={$active} $isImage={isImage}>
        {cloneElement(icon)}
      </StyledListItemIcon>
    );
  }

  return cloneElement(icon);
}
