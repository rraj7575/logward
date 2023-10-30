import { InlineCluster } from '@bedrock-layout/inline-cluster';
import { useController } from 'react-hook-form';
import type { FieldValues, UseControllerProps } from 'react-hook-form';
import { RadioListInput } from 'ui';

import { Field } from '../Field';
import { Option } from '../RadioListInput/RadioListInput';

export type RadioListPropTypes<P extends FieldValues> =
  UseControllerProps<P> & { options: Option[] };

export function RadioListField<P extends FieldValues>({
  name,
  control,
  rules,
  defaultValue,
  ...rest
}: RadioListPropTypes<P>) {
  const { field, fieldState } = useController({
    name,
    control,
    rules,
    defaultValue,
  });

  return (
    <Field fieldState={fieldState}>
      <InlineCluster align="center" gutter="1.6rem">
        <RadioListInput {...rest} {...field} />
      </InlineCluster>
    </Field>
  );
}
