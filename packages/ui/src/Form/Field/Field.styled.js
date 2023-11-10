import { Stack } from '@bedrock-layout/stack';
import styled from 'styled-components';
export const ErrorTextStyled = styled.span `
  color: var(--color-fireEngineRed);
`;
export const FieldStyled = styled(Stack) `
  ${({ $heightFull = false }) => $heightFull && 'height: 100%'};
  ${({ $widthFull = false }) => $widthFull && 'width: 100%'};
`;
