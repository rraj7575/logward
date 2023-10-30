import { Inline, PadBox, Stack } from '@bedrock-layout/primitives';
import _isEmpty from 'lodash/isEmpty';
import _isNil from 'lodash/isNil';
import { ReactElement, ReactNode, useEffect, useRef, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoIosWarning } from 'react-icons/io';
import { Typography } from 'ui';

import { PopoverMethods, PopoverPanel } from '../../Popover';
import { TextInput } from '../TextInput';
import { RuleItem } from './RuleItem';
import {
  ContainerStyled,
  Informational,
  PlaceHolderBox,
} from './RulesPopover.styled';

export type SimpleDropDownModel = {
  name: string;
  type: string;
  id: string;
};

export type RulesPopoverProps = {
  options: SimpleDropDownModel[];
  launcher?: ReactElement;
  onChange?: (e: any) => void;
  showError?: boolean;
  information?: string;
  disabled?: boolean;
  placeholder?: string;
  isErrorMessage?: boolean;
  footer?: ReactNode;
};

export function RulesPopover({
  options,
  launcher,
  onChange,
  information,
  disabled = false,
  placeholder = 'No Data',
  isErrorMessage = false,
  footer,
}: RulesPopoverProps) {
  const [visibleRules, setVisibleRules] = useState(options);
  const [searchText, setSearchText] = useState('');

  const ref = useRef<PopoverMethods>(null);

  useEffect(() => {
    if (_isEmpty(searchText)) {
      setVisibleRules(options);
    } else {
      setVisibleRules(
        options.filter(({ name }) =>
          name.toLowerCase().includes(searchText.toLowerCase())
        )
      );
    }
  }, [searchText]);

  useEffect(() => {
    setVisibleRules(options);
  }, [options]);

  return (
    <PopoverPanel
      launcher={launcher}
      trigger="click"
      ref={ref}
      padding={[8, 0]}
      disabled={disabled}
    >
      <ContainerStyled gutter="1rem">
        <PadBox padding={[2, 10]}>
          <TextInput
            placeholder="Search..."
            icon={<CiSearch size={18} color="var(--color-suvaGray)" />}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
        </PadBox>

        {!_isNil(information) && (
          <Informational padding={[5, 10]}>
            <Typography>{information}</Typography>
          </Informational>
        )}

        {visibleRules.length > 0 ? (
          <Stack gutter="5px">
            {visibleRules.map((rule) => (
              <RuleItem
                rule={rule}
                key={rule.id}
                onClick={(id) => {
                  if (onChange != null) {
                    onChange(id);
                    ref.current?.hide();
                  }
                }}
              />
            ))}
          </Stack>
        ) : (
          <PadBox padding={['0rem', '1rem']}>
            <PlaceHolderBox padding="1rem" $isError={isErrorMessage}>
              <Typography name={isErrorMessage ? 'error' : 'paragraph'}>
                <Inline minItemWidth={25} align="center">
                  {isErrorMessage && <IoIosWarning size={20} />}
                  {placeholder}
                </Inline>
              </Typography>
            </PlaceHolderBox>
          </PadBox>
        )}

        {!_isNil(footer) && <PadBox padding="1rem">{footer}</PadBox>}
      </ContainerStyled>
    </PopoverPanel>
  );
}
