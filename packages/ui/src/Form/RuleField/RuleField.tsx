import { useController } from 'react-hook-form';
import type { FieldValues, UseControllerProps } from 'react-hook-form';
import { RulePopover, RulePopoverProps } from 'ui';

import { Field } from '../Field';

export type RuleFieldProps<P extends FieldValues> = UseControllerProps<P> &
  RulePopoverProps & {
    showError?: boolean;
  };

export const RuleField = <P extends FieldValues>({
  name,
  control,
  rules,
  defaultValue,
  showError,
  ...rest
}: RuleFieldProps<P>) => {
  const { field, fieldState } = useController({
    name,
    control,
    rules,
    defaultValue,
  });

  return (
    <Field fieldState={fieldState} showError={showError}>
      <RulePopover {...field} {...rest} />
    </Field>
  );
};
