import { RxCross2 } from 'react-icons/rx';

import {
  CossButtonContainer,
  CrossButtonStyled,
} from './SheetCrossButton.styled';

export type SheetCrossButtonProps = {
  onClick: () => void;
};

const slideInLeft = {
  initial: { opacity: 0, right: -100 },
  visible: { opacity: 1, right: 0 },
};

export const SheetCrossButton = ({ onClick }: SheetCrossButtonProps) => {
  return (
    <CossButtonContainer
      variants={slideInLeft}
      initial="initial"
      animate="visible"
      exit="initial"
    >
      <CrossButtonStyled onClick={onClick} padding={13}>
        <RxCross2 size={14} />
      </CrossButtonStyled>
    </CossButtonContainer>
  );
};
