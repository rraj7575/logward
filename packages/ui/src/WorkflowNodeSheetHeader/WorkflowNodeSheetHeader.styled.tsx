import { Inline } from '@bedrock-layout/primitives';
import styled from 'styled-components';

export const HeaderSection = styled(Inline)`
  justify-content: space-between;
`;

export const HeaderActionButton = styled.button`
  background: var(--color-whiteSmoke);
  border: none;
  padding: 0.5rem 1.7rem;
  font-size: 1.4rem;
  border-radius: 4px;
  cursor: pointer;
`;
