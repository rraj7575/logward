import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { Typography } from '../Typography';
import { TextButtonStyled } from './TextButton.styled';
export const TextButton = forwardRef(({ onClick, children, bold = true, appearance = 'primary', disabled = false, }, ref) => {
    return (_jsx(ThemeProvider, Object.assign({ theme: { appearance, bold } }, { children: _jsx(TextButtonStyled, Object.assign({ onClick: onClick, ref: ref, appearance: appearance, disabled: disabled }, { children: _jsx(Typography, Object.assign({ fontWeight: bold ? 700 : undefined }, { children: children })) })) })));
});
TextButton.displayName = 'TextButton';
