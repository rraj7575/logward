import { Inline } from '@bedrock-layout/primitives';
import styled, { css } from 'styled-components';
const outlineNoneCssRule = css `
  border: none;
  outline: none;
`;
const disabledCssRules = css `
  cursor: default;
  background-color: var(--color-solitude);
`;
export const InputStyled = styled.input `
  border-radius: 4px;
  border: 1px solid var(--color-gainsboro);
  font-size: 1.4rem;
  max-width: 100%;

  padding: ${({ hasIcon, isSmallInput }) => !isSmallInput
    ? hasIcon
        ? '0.8rem 2.8rem 0.8rem 1.6rem'
        : '0.8rem 1.6rem'
    : hasIcon
        ? '0.4rem 2.8rem 0.4rem 0.8rem'
        : '0.4rem 0.8rem'};

  outline: ${({ hasError }) => `1px solid ${hasError ? 'var(--color-fireEngineRed)' : 'var(--color-solitude)'}`};
  background-color: ${({ hasError }) => hasError ? 'var( --color-snow)' : 'var(--color-white)'};

  &:focus {
    outline: 1px solid
      ${({ hasError }) => hasError ? 'var(--color-fireEngineRed)' : 'var(--color-darkGray)'};
  }

  :disabled {
    ${disabledCssRules}
  }
  ${({ showOutline }) => !showOutline &&
    css `
      ${outlineNoneCssRule}
      &:focus {
        ${outlineNoneCssRule}
      }
    `}
`;
export const InputAndIconStyled = styled(Inline) `
  position: relative;
  min-width: 100%;
`;
export const InputIconContainerStyled = styled.span `
  position: absolute;
  inset-inline-end: 0.4rem;
  cursor: pointer;
`;
