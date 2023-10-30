import styled, { css } from 'styled-components';

export const CheckboxInputHidden = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  &:focus:not(:checked) {
    & + label {
      svg {
        color: var(--color-suvaGray);
      }
    }
  }
`;

export const CheckboxInputChecked = styled.div`
  color: var(--color-dodgerBlue);
`;

type CheckboxStyledProps = {
  hasError: boolean;
  $disabled: boolean;
};

export const CheckboxInputUnchecked = styled.div<CheckboxStyledProps>`
  ${({ hasError }) =>
    hasError
      ? css`
          color: var(--color-fireEngineRed);
          background: var(--color-snow);
        `
      : css`
          color: var(--color-darkGray);
          background: var(--color-white);
        `}

  ${({ $disabled }) =>
    $disabled &&
    css`
      color: var(--color-darkGray);
      background: var(--color-gainsboro);
    `}
`;
