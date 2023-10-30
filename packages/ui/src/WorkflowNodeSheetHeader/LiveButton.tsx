import { Inline } from '@bedrock-layout/primitives';
import { BiCode } from 'react-icons/bi';

import { Typography } from '../Typography';
import { HeaderActionButton } from './WorkflowNodeSheetHeader.styled';

export type LiveButtonProps = {
  onClick: () => void;
};

export function LiveButton({ onClick }: LiveButtonProps) {
  return (
    <HeaderActionButton type="button" onClick={onClick}>
      <Inline align="center" gutter={6}>
        <BiCode size={18} />
        <Typography>View Live</Typography>
      </Inline>
    </HeaderActionButton>
  );
}
