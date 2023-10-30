import { BiSolidInfoCircle } from 'react-icons/bi';

type LauncherProps = {
  id: string;
};
export function Launcher({ id }: LauncherProps) {
  return (
    <span data-tooltip-id={id}>
      <BiSolidInfoCircle color={'#CFD1D7'} size={20} />
    </span>
  );
}
