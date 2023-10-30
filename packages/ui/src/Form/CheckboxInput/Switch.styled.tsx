import styled, { css } from 'styled-components';

export const SwitchStyled = styled.div<{ hasError: boolean; checked: boolean }>`
  inline-size: 3.4rem;
  block-size: 1.4rem;
  border-radius: 1rem;
  position: relative;
  transition: 0.2s ease;
  background: var(--color-darkGray);
  cursor: pointer;

  &::before {
    content: '';
    inline-size: 2rem;
    block-size: 2rem;
    background: var(--color-white);
    border-radius: 50%;
    position: absolute;
    inset-inline-start: -0.5rem;
    inset-block-start: 50%;
    transform: translateY(-50%);
    transition: 0.2s ease;
    box-shadow: 0px 3px 2px rgba(1, 1, 1, 0.2);
  }

  ${({ checked }) =>
    checked &&
    css`
      background: var(--color-aliceBlue);

      &::before {
        background: var(--color-dodgerBlue);
        inset-inline-start: 2rem;
        transition: 0.2s ease;
      }
    `}

  ${({ hasError }) =>
    hasError &&
    css`
      background: var(--color-snow);

      &::before {
        background: var(--color-fireEngineRed);
      }
    `}
`;
