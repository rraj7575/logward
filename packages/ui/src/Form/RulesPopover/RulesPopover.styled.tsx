import { PadBox, Stack } from '@bedrock-layout/primitives';
import styled from 'styled-components';

export const ContainerStyled = styled(Stack)`
  background: var(--color-white);
  min-block-size: 10rem;
  max-block-size: 20rem;
  overflow-y: auto;
`;

export const Informational = styled(PadBox)`
  background-color: var(--color-honeydew);
  color: var(--color-charcoal);
`;

export const PlaceHolderBox = styled(PadBox)<{ $isError?: boolean }>`
  border-radius: 4px;

  ${({ $isError = false }) =>
    $isError && 'background-color: var(--color-snow);'}
`;
