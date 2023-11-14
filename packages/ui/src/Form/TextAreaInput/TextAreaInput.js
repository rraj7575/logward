import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { TextAreaInputStyled } from './TextAreaInput.styled';
export const TextAreaInput = forwardRef(({ value, name, onChange, onFocus, autoFocus = false, onBlur, placeholder, hasError = false, size = 'small', disabled = false, rows = 2, isDefaultOutlineVisible = true, isShowingEllipsis = false, }, ref) => {
    return (_jsx(ThemeProvider, Object.assign({ theme: { size } }, { children: _jsx(TextAreaInputStyled, { value: value, name: name, onChange: onChange, onFocus: onFocus, onBlur: onBlur, autoFocus: autoFocus, placeholder: placeholder, hasError: hasError, size: size, rows: rows, disabled: disabled, ref: ref, isDefaultOutlineVisible: isDefaultOutlineVisible, isShowingEllipsis: isShowingEllipsis }) })));
});
TextAreaInput.displayName = 'TextArea';
