import { Inline } from '@bedrock-layout/inline';
import { ReactNode } from 'react';
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';

import { Typography } from '../../Typography';
import {
  CheckboxInputChecked,
  CheckboxInputUnchecked,
} from './CheckboxInput.styled';

export type CheckboxProps = {
  checked: boolean;
  label: ReactNode | string;
  hasError: boolean;
  disabled: boolean;
};

export function Checkbox({
  checked,
  label,
  hasError,
  disabled,
}: CheckboxProps) {
  return (
    <Inline gutter={7} align="center">
      {checked ? (
        <CheckboxInputChecked>
          <ImCheckboxChecked size={18} />
        </CheckboxInputChecked>
      ) : (
        <CheckboxInputUnchecked hasError={hasError} $disabled={disabled}>
          <ImCheckboxUnchecked size={18} />
        </CheckboxInputUnchecked>
      )}

      {typeof label === 'string' ? <Typography>{label}</Typography> : label}
    </Inline>
  );
}
