import { Colors } from './Colors';
import { Common } from './Common';
import { Paddings } from './Paddings';
import { Reset } from './Reset';

export function GlobalStyles() {
  return (
    <>
      <Reset />
      <Colors />
      <Paddings />
      <Common />
    </>
  );
}
