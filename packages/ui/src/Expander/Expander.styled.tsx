import { PadBox } from '@bedrock-layout/padbox';
import styled from 'styled-components';

export const ContainerStyled = styled(PadBox)<{ $isCollapsed: boolean }>`
  ${({ $isCollapsed }) => $isCollapsed && 'display: none;'}
`;
