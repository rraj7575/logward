import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { Inline } from '@bedrock-layout/inline';
import { forwardRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { ButtonStyled } from './Button.styled';
export const Button = forwardRef(({ onClick, children, label, appearance = 'contained', size = 'small', disabled = false, type = 'button', leadingIcon, trailingIcon, }, ref) => {
    const text = children !== null && children !== void 0 ? children : label;
    return (_jsx(ThemeProvider, Object.assign({ theme: { appearance, size } }, { children: _jsx(ButtonStyled, Object.assign({ type: type, disabled: disabled, onClick: onClick, ref: ref }, { children: _jsxs(Inline, Object.assign({ gutter: "0.8rem", justify: "center" }, { children: [leadingIcon, text, trailingIcon] })) })) })));
});
Button.displayName = 'Button';
