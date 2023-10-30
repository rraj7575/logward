import { useController } from 'react-hook-form';
import type { FieldValues, UseControllerProps } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Field } from 'ui/src/Form/Field';

import { phoneFieldStyle } from './PhoneNumberField.styled';

export type PhoneNumberFieldPropTypes<P extends FieldValues> =
  UseControllerProps<P> & {
    country?: string;
  };

export function PhoneNumberField<P extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  country = 'in',
}: PhoneNumberFieldPropTypes<P>) {
  const { field, fieldState } = useController({
    name,
    control,
    defaultValue,
    rules,
  });

  const PhoneNumberInput =
    // @ts-expect-error
    PhoneInput.default !== undefined ? PhoneInput.default : PhoneInput;

  return (
    <Field fieldState={fieldState}>
      <PhoneNumberInput
        inputStyle={phoneFieldStyle}
        country={country}
        {...field}
      />
    </Field>
  );
}
