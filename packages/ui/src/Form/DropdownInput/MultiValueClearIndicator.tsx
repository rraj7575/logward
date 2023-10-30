import { RxCross2 } from 'react-icons/rx';
import { MultiValueRemoveProps, components } from 'react-select';

export function MultiValueClearIndicator(props: MultiValueRemoveProps) {
  return (
    <components.MultiValueRemove {...props}>
      <RxCross2 fontSize={16} />
    </components.MultiValueRemove>
  );
}
