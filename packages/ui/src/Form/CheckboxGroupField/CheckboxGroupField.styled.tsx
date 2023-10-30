import styled from 'styled-components';

export const LabelStyled = styled.label<{ checked: boolean }>`
  border-radius: 2rem;
  transition: background-color 0.5s;
  background-color: ${({ checked }) =>
    checked ? 'var(--color-aliceBlue)' : 'var(--color-solitude)'};
`;
