import _isEmpty from 'lodash/isEmpty';
import type { Ref } from 'react';
import { useController } from 'react-hook-form';
import type { FieldValues, UseControllerProps } from 'react-hook-form';

import { ExpandingTextInput } from '../ExpandingTextInput';
import { Field } from '../Field';

export type ExpandingTextFieldProps<P extends FieldValues> =
  UseControllerProps<P> & {
    showError?: boolean;
    ref?: Ref<HTMLInputElement>;
    disabled?: boolean;
    placeholder?: string;
  };

export const ExpandingTextField = <P extends FieldValues>(
  props: ExpandingTextFieldProps<P>
) => {
  const { name, control, rules, ref, defaultValue, showError, ...rest } = props;
  const { field, fieldState } = useController({
    name,
    control,
    rules,
    defaultValue,
  });

  return (
    <Field fieldState={fieldState} showError={showError}>
      <ExpandingTextInput
        hasError={!_isEmpty(fieldState.error?.message)}
        {...field}
        {...rest}
      />
    </Field>
  );
};
