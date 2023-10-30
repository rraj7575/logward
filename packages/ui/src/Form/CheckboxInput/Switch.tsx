import { Inline } from '@bedrock-layout/inline';
import { ReactNode } from 'react';

import { Typography } from '../../Typography';
import { SwitchStyled } from './Switch.styled';

export type CheckboxProps = {
  checked: boolean;
  label: ReactNode | string;
  hasError: boolean;
  disabled: boolean;
};

export function Switch({ checked, label, hasError, disabled }: CheckboxProps) {
  return (
    <Inline>
      <SwitchStyled checked={checked} hasError={hasError} />

      {typeof label === 'string' ? <Typography>{label}</Typography> : label}
    </Inline>
  );
}
