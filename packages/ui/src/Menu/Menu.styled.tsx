import { Stack } from '@bedrock-layout/stack';
import styled from 'styled-components';

export const StackWrapper = styled(Stack)`
  max-inline-size: ${(props) => props.maxWidth ?? '100%'};
`;
