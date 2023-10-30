import _isEmpty from 'lodash/isEmpty';
import { Ref } from 'react';
import { useController } from 'react-hook-form';
import type { FieldValues, UseControllerProps } from 'react-hook-form';
import { CheckboxInput, CheckboxInputProps } from 'ui';

import { Field } from '../Field';

export type CheckboxControllerProps = Omit<CheckboxInputProps, 'onChange'>;

export type CheckboxFieldPropTypes<P extends FieldValues> =
  UseControllerProps<P> &
    CheckboxControllerProps & {
      ref?: Ref<HTMLInputElement>;
      showError?: boolean;
      disabled?: boolean;
    };

export function CheckboxField<P extends FieldValues>(
  props: CheckboxFieldPropTypes<P>
) {
  const { name, control, rules, defaultValue, ref, showError, ...rest } = props;
  const { field, fieldState } = useController({
    name,
    control,
    rules,
    defaultValue,
  });

  return (
    <Field fieldState={fieldState} showError={showError}>
      <CheckboxInput
        {...field}
        checked={Boolean(field?.value)}
        ref={ref}
        hasError={!_isEmpty(fieldState.error?.message)}
        {...rest}
      />
    </Field>
  );
}
