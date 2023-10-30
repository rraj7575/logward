import _isEmpty from 'lodash/isEmpty';
import { Ref } from 'react';
import { useController } from 'react-hook-form';
import type { FieldValues, UseControllerProps } from 'react-hook-form';
import { TextInput, TextInputProps } from 'ui';

import { Field } from '../Field';

export type TextFieldPropTypes<P extends FieldValues> = UseControllerProps<P> &
  TextInputProps & {
    ref?: Ref<HTMLInputElement>;
    showError?: boolean;
    heightFull?: boolean;
    widthFull?: boolean;
  };

export const TextField = <P extends FieldValues>(
  props: TextFieldPropTypes<P>
) => {
  const {
    name,
    control,
    ref,
    rules,
    defaultValue,
    showError,
    heightFull = false,
    widthFull = false,
    ...rest
  } = props;
  const { field, fieldState } = useController({
    name,
    control,
    rules,
    defaultValue,
  });

  return (
    <Field
      fieldState={fieldState}
      showError={showError}
      heightFull={heightFull}
      widthFull={widthFull}
    >
      <TextInput
        hasError={!_isEmpty(fieldState.error?.message)}
        {...field}
        {...rest}
        ref={ref}
        showError={showError}
      />
    </Field>
  );
};
