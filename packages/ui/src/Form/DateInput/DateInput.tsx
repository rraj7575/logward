import { format } from 'date-fns';
import type { Ref } from 'react';
import { createRef, forwardRef } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import { PopoverMethods, PopoverPanel } from '../../Popover';
import { TextInput } from '../TextInput';

export type DateInputProps = {
  value?: Date;
  onChange?: (e: any) => void;
  placeholder?: string;
  fromDate?: Date;
  toDate?: Date;
  showError?: boolean;
  hasError?: boolean;
  name?: string;
  disabled?: boolean;
  isSmallInput?: boolean;
};

export const DateInput = forwardRef(
  (
    {
      value,
      onChange,
      placeholder = 'Pick a day',
      fromDate,
      toDate,
      showError = false,
      hasError = false,
      name,
      disabled = false,
      isSmallInput = false,
    }: DateInputProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const popoverMethods = createRef<PopoverMethods>();
    const launcher = (
      <TextInput
        placeholder={placeholder}
        readOnly
        value={value != null ? format(new Date(value), 'PP') : ''}
        showError={showError}
        hasError={hasError}
        name={name}
        size="small"
        isSmallInput={isSmallInput}
      />
    );

    return (
      <PopoverPanel
        launcher={launcher}
        trigger="click"
        padding={8}
        ref={popoverMethods}
      >
        <DayPicker
          mode="single"
          selected={value}
          onSelect={(date) => {
            if (typeof onChange === 'function') {
              onChange(date);
              popoverMethods.current?.hide();
            }
          }}
          fromDate={fromDate}
          toDate={toDate}
          styles={{
            root: {
              margin: 0,
            },
            day: {
              fontSize: 14,
              height: 30,
              width: 30,
            },
            cell: {
              height: 30,
              width: 30,
            },
          }}
          disabled={disabled}
        />
      </PopoverPanel>
    );
  }
);

DateInput.displayName = 'DateInput';
