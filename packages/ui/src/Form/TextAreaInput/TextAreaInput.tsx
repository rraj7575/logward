import _isNil from 'lodash/isNil';
import { forwardRef } from 'react';
import type { Ref } from 'react';
import type { ControllerRenderProps } from 'react-hook-form';
import { ThemeProvider } from 'styled-components';

import { TextAreaInputStyled } from './TextAreaInput.styled';

export type TextAreaInputSize = 'small' | 'medium' | 'large';

export type TextAreaInputProps = Partial<Omit<ControllerRenderProps, 'ref'>> & {
  onFocus?: () => void;
  autoFocus?: boolean;
  placeholder?: string;
  hasError?: boolean;
  size?: TextAreaInputSize;
  showError?: boolean;
  disabled?: boolean;
  rows?: number;
  isDefaultOutlineVisible?: boolean;
  isShowingEllipsis?: boolean;
};

export const TextAreaInput = forwardRef(
  (
    {
      value,
      name,
      onChange,
      onFocus,
      autoFocus = false,
      onBlur,
      placeholder,
      hasError = false,
      size = 'small',
      disabled = false,
      rows = 2,
      isDefaultOutlineVisible = true,
      isShowingEllipsis = false,
    }: TextAreaInputProps,
     ref: Ref<HTMLTextAreaElement>
  ) => {

    return (
      <ThemeProvider theme={{ size }}>
        <TextAreaInputStyled
          value={value}
          name={name}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          autoFocus={autoFocus}
          placeholder={placeholder}
          hasError={hasError}
          size={size}
          rows={rows}
          disabled={disabled}
          ref={ref}
          isDefaultOutlineVisible={isDefaultOutlineVisible}
          isShowingEllipsis={isShowingEllipsis}
        />
      </ThemeProvider>
    );
  }
);

TextAreaInput.displayName = 'TextArea';
