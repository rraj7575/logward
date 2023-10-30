import { PadBox } from '@bedrock-layout/padbox';
import styled from 'styled-components';

export const ListItemStyled = styled(PadBox)<{ $active: boolean }>`
  font-size: 14px;
  border-radius: 6px;

  background-color: ${({ $active }) =>
    $active ? 'var(--color-aliceBlue)' : 'var(--color-white)'};
`;
