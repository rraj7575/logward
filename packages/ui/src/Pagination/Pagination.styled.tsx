import styled from 'styled-components';

type PaginationButtonProps = {
  active?: boolean;
};

export const PaginationButtonStyled = styled.button<PaginationButtonProps>`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 24px;
  border: 1px solid var(--color-darkGray);
  font-size: 12px;
  cursor: pointer;
  padding: auto;
  text-align: center;
  background-color: transparent;
  ${({ active = false }) =>
    active &&
    `
    color: var(--color-dodgerBlue);
    background-color: var(--color-aliceBlue);
    border: 1px solid var(--color-dodgerBlue);
  `}
`;
