import _isEmpty from 'lodash/isEmpty';
import { Ref } from 'react';
import { useController } from 'react-hook-form';
import type { FieldValues, UseControllerProps } from 'react-hook-form';
import { TextAreaInput, TextAreaInputProps } from 'ui';

import { Field } from '../Field';

export type TextAreaFieldPropTypes<P extends FieldValues> =
  UseControllerProps<P> &
    TextAreaInputProps & {
      ref?: Ref<HTMLTextAreaElement>;
      showError?: boolean;
    };

export const TextAreaField = <P extends FieldValues>({
  name,
  control,
  ref,
  rules,
  defaultValue,
  showError,
  ...rest
}: TextAreaFieldPropTypes<P>) => {
  const { field, fieldState } = useController({
    name,
    control,
    rules,
    defaultValue,
  });

  return (
    <Field fieldState={fieldState} showError={showError}>
      <TextAreaInput
        hasError={!_isEmpty(fieldState.error?.message)}
        showError={showError}
        {...field}
        {...rest}
        ref={ref}
      />
    </Field>
  );
};
