import { motion } from 'framer-motion';
import styled from 'styled-components';

type SheetStyledProps = {
  show: boolean;
};

export const OverlayStyled = styled(motion.div)<SheetStyledProps>`
  position: absolute;
  height: 100vh;
  width: 100%;
  background-color: transparent;
  inset-block-start: 0;
  left: 0;
  ${({ show }) => show && 'background-color: rgba(1, 1, 1, 0.4);'}
`;
