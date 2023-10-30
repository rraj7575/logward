import { PadBox } from '@bedrock-layout/padbox';
import styled, { css } from 'styled-components';

type ExpandedContainerStyledProps = {
  $hasError: boolean;
  $isFocused: boolean;
};

export const ExpandingContainer = styled(PadBox)<ExpandedContainerStyledProps>`
  display: inline-grid;
  align-items: center;
  justify-items: start;
  border-radius: 4px;
  transition: outline 0.2s, background-color 0.2s;
  outline: transparent;

  ${({ $hasError }) =>
    $hasError &&
    css`
      outline: 1px solid var(--color-fireEngineRed);
      background-color: var(--color-snow);
    `};

  ${({ $isFocused, $hasError }) =>
    $isFocused &&
    !$hasError &&
    css`
      outline: 1px solid var(--color-lightGray);
    `}

  &:hover {
    outline: ${({ $hasError }) =>
      $hasError
        ? '1px solid var(--color-fireEngineRed)'
        : '1px solid var(--color-lightGray)'};
  }
`;

export const ExpandingInputStyled = styled.input`
  grid-area: 1 / 1 / 2 / 2;
  width: 100%;
  border: none;
  outline: transparent;
  padding: 0;
  background-color: transparent;
`;

export const ExpandingSpan = styled.span`
  grid-area: 1 / 1 / 2 / 2;
  visibility: hidden;
  max-width: 50rem;
`;
