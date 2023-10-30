import type { ReactElement } from 'react';

import { HeaderSection } from './WorkflowNodeSheetHeader.styled';

export type WorkflowNodeSheetHeaderProps = {
  children: ReactElement[];
};

export function WorkflowNodeSheetHeader({
  children,
}: WorkflowNodeSheetHeaderProps) {
  return <HeaderSection>{children}</HeaderSection>;
}
