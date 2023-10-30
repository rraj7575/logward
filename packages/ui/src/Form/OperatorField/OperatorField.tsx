import { useController } from 'react-hook-form';
import type { FieldValues, UseControllerProps } from 'react-hook-form';
import { OperatorsPopover, OperatorsPopoverProps } from 'ui';

import { Field } from '../Field';

export type OperatorFieldProps<P extends FieldValues> = UseControllerProps<P> &
  OperatorsPopoverProps & {
    showError?: boolean;
  };

export const OperatorField = <P extends FieldValues>({
  name,
  control,
  rules,
  defaultValue,
  showError,
  ...rest
}: OperatorFieldProps<P>) => {
  const { field, fieldState } = useController({
    name,
    control,
    rules,
    defaultValue,
  });

  return (
    <Field fieldState={fieldState} showError={showError}>
      <OperatorsPopover {...field} {...rest} />
    </Field>
  );
};
