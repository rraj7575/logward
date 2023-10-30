import { ImRadioChecked, ImRadioUnchecked } from 'react-icons/im';

import { RadioIcon, RadioInputStyled } from './RadioInput.styled';

export type RadioInputProps = {
  value: string;
  checked: boolean;
  id: string;
};

export function RadioInput({ value, checked, id, ...rest }: RadioInputProps) {
  return (
    <>
      <RadioInputStyled value={value} id={id} checked={checked} {...rest} />

      {checked ? (
        <RadioIcon>
          <ImRadioChecked size={18} />
        </RadioIcon>
      ) : (
        <RadioIcon>
          <ImRadioUnchecked size={18} />
        </RadioIcon>
      )}
    </>
  );
}
