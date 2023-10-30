import _isNil from 'lodash/isNil';
import { forwardRef, useRef } from 'react';
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
      showError = true,
      disabled = false,
      rows = 2,
      isDefaultOutlineVisible = true,
      isShowingEllipsis = false,
    }: TextAreaInputProps,
    ref: Ref<HTMLTextAreaElement>
  ) => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    return (
      <ThemeProvider theme={{ size }}>
        <TextAreaInputStyled
          value={value}
          name={name}
          onChange={onChange}
          onFocus={onFocus}
          autoFocus={autoFocus}
          onBlur={() => {
            if (typeof onBlur === 'function') {
              onBlur();
            }

            if (!_isNil(textAreaRef.current)) {
              textAreaRef.current.scrollTop = 0;
            }
          }}
          placeholder={placeholder}
          hasError={hasError}
          size={size}
          rows={rows}
          disabled={disabled}
          ref={textAreaRef}
          isDefaultOutlineVisible={isDefaultOutlineVisible}
          isShowingEllipsis={isShowingEllipsis}
        />
      </ThemeProvider>
    );
  }
);

TextAreaInput.displayName = 'TextArea';
