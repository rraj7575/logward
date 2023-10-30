import _isNil from 'lodash/isNil';
import { CSSProperties, Ref, forwardRef } from 'react';
import type { ControllerRenderProps } from 'react-hook-form';
import Select, { components } from 'react-select';
import type { Props as ReactSelectProps } from 'react-select';

import { Typography } from '../../Typography';
import { ClearIndicator } from './ClearIndicator';
import { DropdownIndicator } from './DropdownIndicator';
import { DropdownOption } from './DropdownInput.styled';
import { MultiValueClearIndicator } from './MultiValueClearIndicator';

export type DropdownProps = ReactSelectProps &
  Partial<Omit<ControllerRenderProps, 'ref'>> & {
    hasError?: boolean;
    disabled?: boolean;
    menuWidth?: number;
    showCustomMenu?: boolean;
    MenuListFooter?: JSX.Element;
  };

const CustomOption = (props: any) => {
  const { innerProps, innerRef } = props;

  return (
    <DropdownOption
      $isSelected={props.isSelected as boolean}
      ref={innerRef}
      {...innerProps}
      padding={16}
    >
      <Typography fontWeight={700}>{props.data.label}</Typography>

      {!_isNil(props.data.desc) && (
        <Typography name="secondarySmall">{props.data.desc}</Typography>
      )}
    </DropdownOption>
  );
};

const MenuList = (props: any) => {
  const { MenuListFooter = null } = props.selectProps.components;

  return (
    <components.MenuList {...props}>
      {props.children}
      {!_isNil(MenuListFooter) && MenuListFooter}
    </components.MenuList>
  );
};

export const DropdownInput = forwardRef(
  (
    {
      name,
      options,
      onChange,
      isMulti = false,
      hasError = false,
      disabled = false,
      menuWidth,
      showCustomMenu = false,
      MenuListFooter,
      ...rest
    }: DropdownProps,
    ref: Ref<HTMLElement>
  ) => {
    const styles: any = {
      control: (
        baseStyles: CSSProperties,
        state: {
          isFocused: boolean;
          selectProps: {
            isDisabled: boolean;
            hasError: boolean;
          };
        }
      ) => ({
        ...baseStyles,
        borderColor: state.selectProps.hasError
          ? 'var(--color-fireEngineRed)'
          : 'var(--color-solitude)',
        fontSize: '1.4rem',
        boxShadow:
          state.isFocused && !state.selectProps.hasError
            ? '0 0 0 1px var(--color-darkGray)'
            : 'none',
        '&:hover': {
          borderColor: state.selectProps.hasError
            ? 'var(--color-fireEngineRed)'
            : 'var(--color-solitude)',
        },
        background: state.selectProps.hasError
          ? 'var(--color-snow)'
          : state.selectProps.isDisabled
          ? 'var(--color-solitude)'
          : 'var(--color-white)',
      }),
      valueContainer: (baseStyles: CSSProperties) => ({
        ...baseStyles,
        padding: '0.8rem 1.6rem',
      }),
      input: (baseStyles: CSSProperties) => ({
        ...baseStyles,
        padding: 0,
        margin: 0,
      }),
      indicatorSeparator: (baseStyles: CSSProperties) => ({
        ...baseStyles,
        display: 'none',
      }),
      dropdownIndicator: (baseStyles: CSSProperties) => ({
        ...baseStyles,
        color: 'var(--color-charcoal)',
        '&:hover': {
          color: 'inherit',
        },
      }),
      menu: (baseStyles: CSSProperties) => ({
        ...baseStyles,
        boxShadow: '0px 0px 16px var(--color-solitude)',
        borderRadius: '8px',
        ...(!_isNil(menuWidth) && { width: menuWidth }),
        zIndex: 100,
      }),
      menuList: (baseStyles: CSSProperties) => ({
        ...baseStyles,
        padding: 0,
        borderRadius: '8px',
      }),
      option: (
        baseStyles: CSSProperties,
        state: { isFocused: boolean; isSelected: boolean }
      ) => ({
        ...baseStyles,
        padding: '0.5rem 1rem',
        fontSize: 'inherit',
        backgroundColor:
          state.isFocused || state.isSelected
            ? 'var(--color-solitude)'
            : 'var(--color-white)',
        color: 'inherit',
        '&:hover': {
          backgroundColor: 'var(--color-solitude)',
        },
      }),
      singleValue: (baseStyles: CSSProperties) => ({
        ...baseStyles,
        color: 'inherit',
      }),
      multiValue: (baseStyles: CSSProperties) => ({
        ...baseStyles,
        padding: '0 0.5rem',
        borderRadius: '25px',
        color: 'inherit',
      }),
      multiValueRemove: (baseStyles: CSSProperties) => ({
        ...baseStyles,
        '&:hover': {
          backgroundColor: 'inherit',
          color: 'inherit',
          borderRadius: '25px',
        },
      }),
    };

    return (
      <Select
        menuPlacement="auto"
        styles={styles}
        name={name}
        options={options}
        onChange={onChange}
        isMulti={isMulti}
        // eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error
        // @ts-ignore
        hasError={hasError}
        isDisabled={disabled}
        components={{
          DropdownIndicator,
          ClearIndicator,
          MultiValueRemove: MultiValueClearIndicator,
          MenuList,
          ...(showCustomMenu && { Option: CustomOption }),
          ...(!_isNil(MenuListFooter) && { MenuListFooter }),
        }}
        {...rest}
      />
    );
  }
);

DropdownInput.displayName = 'DropdownInput';
