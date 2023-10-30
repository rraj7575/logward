import { OverlayStyled } from './Overlay.styled';

export type OverlayProps = {
  show?: boolean;
};

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const Overlay = ({ show = false }: OverlayProps) => {
  return (
    <OverlayStyled
      show={show}
      variants={backdrop}
      initial="hidden"
      animate="visible"
      exit="hidden"
    />
  );
};
