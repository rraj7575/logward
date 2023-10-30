import { useController } from 'react-hook-form';
import type { FieldValues, UseControllerProps } from 'react-hook-form';
import { RulesPopover } from 'ui';
import type { RulesPopoverProps } from 'ui';

import { Field } from '../Field';

export type RulesPopoverFieldProps<P extends FieldValues> =
  UseControllerProps<P> &
    RulesPopoverProps & {
      showError?: boolean;
    };

export const RulesPopoverField = <P extends FieldValues>(
  props: RulesPopoverFieldProps<P>
) => {
  const { name, control, rules, defaultValue, showError, ...rest } = props;
  const { field, fieldState } = useController({
    name,
    control,
    rules,
    defaultValue,
  });

  return (
    <Field fieldState={fieldState} showError={showError}>
      <RulesPopover {...field} {...rest} showError={showError} />
    </Field>
  );
};
