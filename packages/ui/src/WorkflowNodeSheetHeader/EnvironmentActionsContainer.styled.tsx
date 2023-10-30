import { Inline } from '@bedrock-layout/primitives';
import styled from 'styled-components';

export const EnvironmentContainer = styled(Inline)`
  inline-size: 20rem;
  block-size: 3.2rem;
  padding: 0.3rem;
  border-radius: 4px;
  background: var(--color-lightGray);
`;

export const EnvironmentButton = styled.button<{ $active: boolean }>`
  inline-size: 50%;
  border-radius: 4px;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 1.2rem;

  ${({ $active }) => $active && 'background: var(--color-white);'}
`;
