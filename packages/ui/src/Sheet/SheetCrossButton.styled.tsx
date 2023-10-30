import { PadBox } from '@bedrock-layout/padbox';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const CossButtonContainer = styled(motion.div)`
  position: relative;
  margin-top: 0.8rem;
`;

export const CrossButtonStyled = styled(PadBox)`
  background-color: var(--color-white);
  border-radius: 4px;
  border: none;
  cursor: pointer;
  line-height: 1;
`;
