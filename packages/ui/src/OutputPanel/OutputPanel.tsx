import { Inline } from '@bedrock-layout/primitives';
import { Stack } from '@bedrock-layout/stack';
import _isNil from 'lodash/isNil';
import type { ReactNode, RefObject } from 'react';
import { BiCopy } from 'react-icons/bi';
import { BsCheckCircleFill } from 'react-icons/bs';
import { RxCrossCircled } from 'react-icons/rx';
import { IconButton, Typography } from 'ui';

import { copy } from '../utils';
import { OutputPanelContainer } from './OutputPanel.styled';

export type OutputPanelProps = {
  children: ReactNode;
  executionTime: string;
  headingName: string;
  isSuccess: boolean;
  textToCopy?: string;
  toastMessage?: string;
  outputRef: RefObject<HTMLDivElement>;
};

export const OutputPanel = ({
  executionTime,
  isSuccess,
  children,
  headingName,
  textToCopy,
  toastMessage,
  outputRef,
}: OutputPanelProps) => {
  return (
    <OutputPanelContainer
      ref={outputRef}
      id="dataset-output-container"
      padding={['.8rem']}
    >
      <Stack gutter={'.8rem'}>
        <Inline align="center" gutter="2rem" stretch={1}>
          <Typography name="heading3">{headingName}</Typography>

          {isSuccess ? (
            <Inline align="center" gutter={'.5rem'}>
              <BsCheckCircleFill fill="green" />

              <Typography name="success">Success {executionTime}</Typography>
            </Inline>
          ) : (
            <Inline align="center" gutter={5}>
              <RxCrossCircled color="var(--color-fireEngineRed)" />

              <Typography name="error">Failed</Typography>
            </Inline>
          )}
          {!_isNil(textToCopy) && (
            <IconButton
              onClick={async () => await copy(textToCopy, toastMessage)}
            >
              <BiCopy />
            </IconButton>
          )}
        </Inline>

        {children}
      </Stack>
    </OutputPanelContainer>
  );
};
