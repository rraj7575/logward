import { PadBox } from '@bedrock-layout/padbox';
import styled from 'styled-components';

export const RuleItemStyled = styled(PadBox)`
  cursor: pointer;

  &:hover {
    background: var(--color-lightGray);
  }
`;
