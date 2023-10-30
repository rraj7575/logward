import _isEmpty from 'lodash/isEmpty';
import { Ref } from 'react';
import { useController } from 'react-hook-form';
import type { FieldValues, UseControllerProps } from 'react-hook-form';
import { DateInput, DateInputProps } from 'ui';

import { Field } from '../Field';

export type DateFieldPropTypes<P extends FieldValues> = UseControllerProps<P> &
  DateInputProps & {
    ref?: Ref<HTMLInputElement>;
    showError?: boolean;
  };

export const DateField = <P extends FieldValues>(
  props: DateFieldPropTypes<P>
) => {
  const { name, control, ref, rules, defaultValue, showError, ...rest } = props;
  const { field, fieldState } = useController({
    name,
    control,
    rules,
    defaultValue,
  });

  return (
    <Field fieldState={fieldState} showError={showError}>
      <DateInput
        hasError={!_isEmpty(fieldState.error?.message)}
        {...field}
        {...rest}
        showError={showError}
      />
    </Field>
  );
};
