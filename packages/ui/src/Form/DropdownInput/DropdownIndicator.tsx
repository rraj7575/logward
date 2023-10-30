import { IoIosArrowDown } from 'react-icons/io';
import { DropdownIndicatorProps, components } from 'react-select';

export function DropdownIndicator(props: DropdownIndicatorProps) {
  return (
    <components.DropdownIndicator {...props}>
      <IoIosArrowDown fontSize={18} />
    </components.DropdownIndicator>
  );
}
