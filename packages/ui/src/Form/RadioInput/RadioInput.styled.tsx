import styled from 'styled-components';

export const RadioInputStyled = styled.input.attrs({ type: 'radio' })`
  opacity: 0;
  position: absolute;

  &:checked + div {
    color: var(--color-dodgerBlue);
  }

  &:focus + div {
    outline: 1px solid var(--color-navyBlue);
  }
`;

export const RadioIcon = styled.div`
  background-color: var(--color-white);
  border-radius: 50%;
`;
