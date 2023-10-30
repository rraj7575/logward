import { Inline } from '@bedrock-layout/primitives';
import { ImArrowLeft2 } from 'react-icons/im';

import { Typography } from '../Typography';
import { HeaderActionButton } from './WorkflowNodeSheetHeader.styled';

export type BackButtonProps = {
  onClick: () => void;
};

export function BackButton({ onClick }: BackButtonProps) {
  return (
    <HeaderActionButton type="button" onClick={onClick}>
      <Inline align="center" gutter={6}>
        <ImArrowLeft2 />
        <Typography>Back to editor</Typography>
      </Inline>
    </HeaderActionButton>
  );
}
