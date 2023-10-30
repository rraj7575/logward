import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';

const modalSize = theme('size', {
  small: css`
    inline-size: 35rem;
  `,
  medium: css`
    inline-size: 45rem;
  `,
  large: css`
    inline-size: 55rem;
  `,
  extraLarge: css`
    inline-size: 65rem;
  `,
  doubleExtraLarge: css`
    width: 80vw;
    max-inline-size: 100rem;
  `,
});

export const ModalContainer = styled(motion.div)`
  background-color: var(--color-white);
  border-radius: 8px;
  position: absolute;
  top: 50%;
  left: 50%;
  overflow: hidden;
  transform: translate(-50%, -50%);
  ${modalSize}
`;
