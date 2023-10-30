import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkStyled = styled(Link)<{ $active: boolean; $isHide: boolean }>`
  text-decoration: none;
  color: ${({ $active }) =>
    $active ? 'var(--color-dodgerBlue)' : 'var(--color-charcoal)'};
  display: ${({ $isHide }) => ($isHide ? 'none' : 'block')};
`;
