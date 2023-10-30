import { KeyboardEvent, Ref, forwardRef, useState } from 'react';
import type { ControllerRenderProps } from 'react-hook-form';

import {
  ExpandingContainer,
  ExpandingInputStyled,
  ExpandingSpan,
} from './ExpandingTextInput.styled';

export type ExpandingTextInputProps = Pick<
  ControllerRenderProps,
  'onChange' | 'onBlur'
> & {
  value: string;
  hasError?: boolean;
  disabled?: boolean;
  placeholder?: string;
};

const handleKeyDown = (e: KeyboardEvent<HTMLElement>) => {
  if (e.code === 'Enter') {
    e.preventDefault();
  }
};

export const ExpandingTextInput = forwardRef(
  (
    {
      value,
      hasError = false,
      onChange,
      disabled = false,
      placeholder,
    }: ExpandingTextInputProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const [isInputFocused, setIsInputFocused] = useState(false);

    return (
      <ExpandingContainer
        padding={[2, 4]}
        $hasError={hasError}
        $isFocused={isInputFocused}
      >
        <ExpandingInputStyled
          value={value}
          size={4}
          ref={ref}
          onChange={onChange}
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          placeholder={placeholder}
        />
        <ExpandingSpan>{value}</ExpandingSpan>
      </ExpandingContainer>
    );
  }
);

ExpandingTextInput.displayName = 'ExpandingTextInput';
