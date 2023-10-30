import { Inline, Stack } from '@bedrock-layout/primitives';
import _isNil from 'lodash/isNil';
import type {
  ChangeEvent,
  HTMLInputTypeAttribute,
  ReactNode,
  Ref,
} from 'react';
import { forwardRef } from 'react';
import { GoAlert } from 'react-icons/go';

import { FontWeight, Typography } from '../../Typography';
import {
  InputAndIconStyled,
  InputIconContainerStyled,
  InputStyled,
} from './TextInput.styled';

export type InputSize = 'small' | 'medium' | 'self';

export type TextInputProps = {
  icon?: ReactNode;
  hasError?: boolean;
  id?: string;
  name?: string;
  onClickInputIcon?: () => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  value?: string;
  label?: string;
  showError?: boolean;
  size?: InputSize;
  disabled?: boolean;
  readOnly?: boolean;
  showErrorIcon?: boolean;
  isSmallInput?: boolean;
  showOutline?: boolean;
  labelFontWeight?: FontWeight;
};

type InputWidths = {
  [key in InputSize]: number;
};

const inputSize: InputWidths = {
  small: 10,
  medium: 15,
  self: 20,
};

export const TextInput = forwardRef(
  (
    {
      placeholder,
      value,
      type = 'text',
      name,
      id,
      icon,
      hasError = false,
      onClickInputIcon,
      onChange,
      label,
      showError = true,
      size = 'self',
      disabled = false,
      readOnly = false,
      showErrorIcon = true,
      isSmallInput = false,
      showOutline = true,
      labelFontWeight,
    }: TextInputProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const hasIcon = !_isNil(icon);

    return (
      <Stack gutter=".8rem">
        {!_isNil(label) && (
          <label>
            <Typography fontWeight={labelFontWeight}>{label}</Typography>
          </label>
        )}
        <Inline align="center" gutter="1.1rem" stretch="start">
          <InputAndIconStyled align="center" stretch="start">
            <InputStyled
              hasIcon={hasIcon}
              id={id}
              type={type}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              hasError={hasError}
              name={name}
              ref={ref}
              size={inputSize[size]}
              disabled={disabled}
              readOnly={readOnly}
              isSmallInput={isSmallInput}
              showOutline={showOutline}
            />

            {hasIcon && (
              <InputIconContainerStyled onClick={onClickInputIcon}>
                {icon}
              </InputIconContainerStyled>
            )}
          </InputAndIconStyled>

          {hasError && showError && showErrorIcon && (
            <span>
              <GoAlert fill="var(--color-fireEngineRed)" size={20} />
            </span>
          )}
        </Inline>
      </Stack>
    );
  }
);

TextInput.displayName = 'TextInput';
