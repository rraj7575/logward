import { Inline } from '@bedrock-layout/inline';
import { PadBox } from '@bedrock-layout/padbox';
import _isEmpty from 'lodash/isEmpty';
import _isNil from 'lodash/isNil';
import { Ref, forwardRef } from 'react';

import { Image } from '../../Image';
import { Typography } from '../../Typography';
import { RadioInput } from '../RadioInput';
import { LabelStyled } from './RadioListInput.styled';

export type Option = {
  value: string;
  label: string;
  icon?: string;
};

export type RadioListInputProps = {
  options: Option[];
  value: string;
};

export const RadioListInput = forwardRef(
  (
    { options, value: currentValue, ...rest }: RadioListInputProps,
    // eslint-disable-next-line no-unused-vars -- not required
    ref: Ref<HTMLInputElement>
  ) => {
    const { name } = rest as { name: string };

    return (
      <>
        {options.map(({ value, label, icon }: Option) => {
          const checked = value === currentValue;
          const id = `${name}-${value}`;

          return (
            <LabelStyled key={id} htmlFor={id} checked={checked}>
              <PadBox padding={['.5rem', '1.6rem']}>
                <Inline align="center" gutter=".7rem">
                  <RadioInput
                    value={value}
                    checked={checked}
                    id={id}
                    {...rest}
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
      </>
    );
  }
);

RadioListInput.displayName = 'RadioListInput';
