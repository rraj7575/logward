import { RxCross2 } from 'react-icons/rx';
import { ClearIndicatorProps, components } from 'react-select';

export function ClearIndicator(props: ClearIndicatorProps) {
  return (
    <components.ClearIndicator {...props}>
      <RxCross2 fontSize={18} />
    </components.ClearIndicator>
  );
}
