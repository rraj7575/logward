import { HorizontalLineStyled } from './HorizontalLine.styled';

type HorizontalLineProps = {
  color?: string;
};

export function HorizontalLine({ color }: HorizontalLineProps) {
  return <HorizontalLineStyled color={color} />;
}
