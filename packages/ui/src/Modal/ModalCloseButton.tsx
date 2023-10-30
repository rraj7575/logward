import { Inline } from '@bedrock-layout/inline';
import { RxCross2 } from 'react-icons/rx';
import { IconButton } from 'ui';

export type ModalCloseButtonProps = {
  onClick: () => void;
};

export const ModalCloseButton = ({ onClick }: ModalCloseButtonProps) => {
  return (
    <Inline justify="end">
      <IconButton onClick={onClick}>
        <RxCross2 size={16} />
      </IconButton>
    </Inline>
  );
};
