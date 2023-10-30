import { Inline } from '@bedrock-layout/inline';
import { ReactNode, Ref, forwardRef } from 'react';
import type { ControllerRenderProps } from 'react-hook-form';

import { Checkbox } from './Checkbox';
import { CheckboxInputHidden } from './CheckboxInput.styled';
import { Switch } from './Switch';

export type CheckboxAppearance = 'switch' | 'checkbox';

export type CheckboxInputProps = Pick<ControllerRenderProps, 'onChange'> & {
  checked?: boolean;
  useId?: string;
  label?: ReactNode | string;
  hasError?: boolean;
  appearance?: CheckboxAppearance;
  disabled?: boolean;
  name?: string;
  value?: string | boolean;
};

const elementByAppearance: Record<
  string,
  (
    checked: boolean,
    hasError: boolean,
    label: ReactNode | string,
    disabled: boolean
  ) => JSX.Element
> = {
  checkbox: (
    checked: boolean,
    hasError: boolean,
    label: ReactNode | string,
    disabled: boolean
  ) => (
    <Checkbox
      checked={checked}
      hasError={hasError}
      label={label}
      disabled={disabled}
    />
  ),
  switch: (
    checked: boolean,
    hasError: boolean,
    label: ReactNode | string,
    disabled: boolean
  ) => (
    <Switch
      checked={checked}
      hasError={hasError}
      label={label}
      disabled={disabled}
    />
  ),
};

export const CheckboxInput = forwardRef(
  (
    {
      checked = false,
      useId = 'checkbox',
      label,
      onChange,
      hasError = false,
      appearance = 'checkbox',
      disabled = false,
      name,
      value,
    }: CheckboxInputProps,
    ref: Ref<HTMLInputElement>
  ) => (
    <Inline>
      <CheckboxInputHidden
        checked={checked}
        ref={ref}
        id={useId}
        name={name}
        value={value as string}
        onChange={onChange}
        disabled={disabled}
      />
      <label htmlFor={useId}>
        {elementByAppearance[appearance](checked, hasError, label, disabled)}
      </label>
    </Inline>
  )
);

CheckboxInput.displayName = 'CheckboxInput';
