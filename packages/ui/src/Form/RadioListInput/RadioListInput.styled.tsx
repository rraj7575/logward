import styled from 'styled-components';

export const LabelStyled = styled.label<{ checked: boolean }>`
  background-color: ${({ checked }) =>
    checked ? 'var(--color-aliceBlue)' : 'var(--color-solitude)'};
  border-radius: 2rem;
  transition: background-color 0.5s;
`;
