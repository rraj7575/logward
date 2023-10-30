import { Inline } from '@bedrock-layout/inline';
import { InlineCluster } from '@bedrock-layout/inline-cluster';
import { PadBox } from '@bedrock-layout/padbox';
import _isEmpty from 'lodash/isEmpty';
import _isNil from 'lodash/isNil';
import { useEffect, useState } from 'react';
import type { ChangeEvent } from 'react';
import { useController } from 'react-hook-form';
import type { FieldValues, UseControllerProps } from 'react-hook-form';
import { CheckboxInput, Image, Typography } from 'ui';

import { Field } from '../Field';
import { LabelStyled } from './CheckboxGroupField.styled';

export type Option = {
  value: string;
  label: string;
  icon?: string;
};

export type CheckboxGroupFieldProps<P extends FieldValues> = {
  name: UseControllerProps<P>['name'];
  control: UseControllerProps<P>['control'];
  rules: UseControllerProps<P>['rules'];
  options: Option[];
  defaultValues?: string[];
};

export function CheckboxGroupField<P extends FieldValues>({
  name,
  control,
  rules,
  defaultValues = [],
  options,
  ...rest
}: CheckboxGroupFieldProps<P>) {
  const { field, fieldState } = useController({
    name,
    control,
    rules,
  });

  const [currentValues, setSelectedValues] = useState(defaultValues);

  useEffect(() => {
    field.onChange(defaultValues);
  }, []);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = e.target;
    const updatedValue = checked
      ? [...currentValues, value]
      : [...currentValues].filter((val) => val !== value);

    field.onChange(updatedValue);

    setSelectedValues(updatedValue);
  };

  return (
    <Field fieldState={fieldState}>
      <InlineCluster align="center" gutter="1.6rem">
        {options.map(({ value, label, icon }: Option) => {
          const checked = currentValues.includes(value);
          const id = `${name}-${value}`;

          return (
            <LabelStyled key={id} htmlFor={id} checked={checked}>
              <PadBox padding={['.5rem', '1.6rem']}>
                <Inline align="center" gutter=".7rem">
                  <CheckboxInput
                    checked={checked}
                    hasError={false}
                    useId={id}
                    {...field}
                    {...rest}
                    value={value}
                    onChange={onChangeHandler}
                  />

                  {!_isEmpty(icon) && !_isNil(icon) && (
                    <Image src={icon} alt={label} />
                  )}

                  <Typography>{label}</Typography>
                </Inline>
              </PadBox>
            </LabelStyled>
          );
        })}
      </InlineCluster>
    </Field>
  );
}
