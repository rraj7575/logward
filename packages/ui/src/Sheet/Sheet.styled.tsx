import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';

const contentSize = theme('size', {
  small: css`
    width: 40%;
  `,
  medium: css`
    width: 60%;
  `,
  mediumLarge: css`
    width: 75%;
  `,
  large: css`
    width: 95%;
  `,
});

export const ContentStyled = styled(motion.div)`
  height: 100vh;
  background-color: var(--color-white);
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
  ${contentSize}
`;

export const ContentContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
`;
