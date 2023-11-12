import styled, { css } from 'styled-components';
import theme from 'styled-theming';

import { TextAreaInputSize } from './TextAreaInput';

type TextAreaInputStyledProps = {
  hasError: boolean;
  size: TextAreaInputSize;
  isDefaultOutlineVisible: boolean;
  isShowingEllipsis: boolean;
};

const disabledCssRulesCss = css`
  :disabled {
    cursor: default;
    background-color: var(--color-solitude);
  }
`;

const TextAreaInputSizeStyles = theme('size', {
  small: css`
    min-inline-size: 40rem;
  `,
  medium: css`
    min-inline-size: 50rem;
  `,
  large: css`
    min-inline-size: 60rem;
  `,
});

export const TextAreaInputStyled = styled.textarea<TextAreaInputStyledProps>`
  border-radius: 4px;
  border: none;
  resize: none;
  padding:  0.8rem 1.6rem;
  overflow: hidden;

  outline: ${({ isDefaultOutlineVisible }) =>
    isDefaultOutlineVisible ? '1px solid var(--color-lightGray)' : 'none'};
  background-color: ${({ hasError }) =>
    hasError ? 'var( --color-snow)' : 'var(--color-white)'};

  outline: ${({ hasError }) =>
    `1px solid ${hasError ? 'var(--color-fireEngineRed)' : 'initial'}`};

  &:focus,
  :hover {
    outline: ${({ hasError }) =>
      hasError
        ? '1px solid var(--color-fireEngineRed)'
        : '1px solid var(--color-lightGray)'};
  }

  ${TextAreaInputSizeStyles}

  ${disabledCssRulesCss}
  
  &:focus {
    overflow-y: auto;
  }

  ${({ isShowingEllipsis }) =>
    isShowingEllipsis &&
    css`
      &:not(:focus) {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
      }
    `}
`;
