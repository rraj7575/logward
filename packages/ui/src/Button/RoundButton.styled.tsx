import styled from 'styled-components';

type PaginationButtonProps = {
  active?: boolean;
};

export const RoundButtonStyled = styled.button<PaginationButtonProps>`
  inline-size: 3.6rem;
  block-size: 3.6rem;
  border-radius: 6px;
  border: none;
  font-size: 12px;
  cursor: pointer;
  text-align: center;
  padding: 0px;
  background-color: var(--color-lightGray2);
  ${({ active = false }) =>
    active &&
    `
    color: var(--color-dodgerBlue);
    background-color: var(--color-aliceBlue);
  `}

  &:disabled {
    cursor: default;
  }
`;
