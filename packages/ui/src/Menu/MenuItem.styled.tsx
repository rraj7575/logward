import styled from 'styled-components';

type MenuItemStyledProps = {
  selected?: boolean;
  removeHover?: boolean;
  minWidth?: string;
};

export const MenuItemStyled = styled.button<MenuItemStyledProps>`
  padding-block: 0.2rem;
  border: none;
  cursor: pointer;
  max-inline-size: 30rem;
  text-align: left;

  background: ${({ selected = false }) =>
    selected ? 'var(--color - solitude)' : 'transparent'};

  min-inline-size: ${({ minWidth = '10rem' }) => minWidth};

  &:hover {
    ${({ removeHover = false }) =>
      !removeHover && `background: var(--color-solitude);`}
  }
`;
