import { PadBox } from '@bedrock-layout/padbox';
import styled from 'styled-components';

type DropdownOptionProps = {
  $isSelected: boolean;
};

export const DropdownOption = styled(PadBox)<DropdownOptionProps>`
  cursor: pointer;
  background-color: ${({ $isSelected }) =>
    $isSelected ? 'var(--color-aliceBlue)' : 'var(--color-white)'};

  &:hover {
    background: var(--color-whiteSmoke);
  }
`;
