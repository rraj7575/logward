import _isEmpty from 'lodash/isEmpty';
import { useController } from 'react-hook-form';
import type { FieldValues, UseControllerProps } from 'react-hook-form';
import { DropdownInput, DropdownProps } from 'ui';

import { Field } from '../Field';

export type DropdownFieldPropTypes<P extends FieldValues> =
  UseControllerProps<P> &
    DropdownProps & {
      showError?: boolean;
    };

export function DropdownField<P extends FieldValues>(
  props: DropdownFieldPropTypes<P>
) {
  const { name, control, rules, defaultValue, showError, ...rest } = props;
  const { field, fieldState } = useController({
    name,
    control,
    rules,
    defaultValue,
  });

  return (
    <Field fieldState={fieldState} showError={showError}>
      <DropdownInput
        {...field}
        {...rest}
        hasError={!_isEmpty(fieldState.error?.message)}
      />
    </Field>
  );
}
