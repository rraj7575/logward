import { jsx as _jsx } from "react/jsx-runtime";
import _isNil from 'lodash/isNil';
import { forwardRef, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { TextAreaInputStyled } from './TextAreaInput.styled';
export const TextAreaInput = forwardRef(({ value, name, onChange, onFocus, autoFocus = false, onBlur, placeholder, hasError = false, size = 'small', disabled = false, rows = 2, isDefaultOutlineVisible = true, isShowingEllipsis = false, }, ref) => {
    const textAreaRef = useRef(null);
    return (_jsx(ThemeProvider, Object.assign({ theme: { size } }, { children: _jsx(TextAreaInputStyled, { value: value, name: name, onChange: onChange, onFocus: onFocus, autoFocus: autoFocus, onBlur: () => {
                if (typeof onBlur === 'function') {
                    onBlur();
                }
                if (!_isNil(textAreaRef.current)) {
                    textAreaRef.current.scrollTop = 0;
                }
            }, placeholder: placeholder, hasError: hasError, size: size, rows: rows, disabled: disabled, ref: textAreaRef, isDefaultOutlineVisible: isDefaultOutlineVisible, isShowingEllipsis: isShowingEllipsis }) })));
});
TextAreaInput.displayName = 'TextArea';
