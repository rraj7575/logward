import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Inline, Stack } from '@bedrock-layout/primitives';
import _isNil from 'lodash/isNil';
import { forwardRef } from 'react';
import { GoAlert } from 'react-icons/go';
import { Typography } from '../../Typography';
import { InputAndIconStyled, InputIconContainerStyled, InputStyled, } from './TextInput.styled';
const inputSize = {
    small: 10,
    medium: 15,
    self: 20,
};
export const TextInput = forwardRef(({ placeholder, value, type = 'text', name, id, icon, hasError = false, onClickInputIcon, onChange, label, showError = true, size = 'self', disabled = false, readOnly = false, showErrorIcon = true, isSmallInput = false, showOutline = true, labelFontWeight, }, ref) => {
    const hasIcon = !_isNil(icon);
    return (_jsxs(Stack, Object.assign({ gutter: ".8rem" }, { children: [!_isNil(label) && (_jsx("label", { children: _jsx(Typography, Object.assign({ fontWeight: labelFontWeight }, { children: label })) })), _jsxs(Inline, Object.assign({ align: "center", gutter: "1.1rem", stretch: "start" }, { children: [_jsxs(InputAndIconStyled, Object.assign({ align: "center", stretch: "start" }, { children: [_jsx(InputStyled, { hasIcon: hasIcon, id: id, type: type, value: value, onChange: onChange, placeholder: placeholder, hasError: hasError, name: name, ref: ref, size: inputSize[size], disabled: disabled, readOnly: readOnly, isSmallInput: isSmallInput, showOutline: showOutline }), hasIcon && (_jsx(InputIconContainerStyled, Object.assign({ onClick: onClickInputIcon }, { children: icon })))] })), hasError && showError && showErrorIcon && (_jsx("span", { children: _jsx(GoAlert, { fill: "var(--color-fireEngineRed)", size: 20 }) }))] }))] })));
});
TextInput.displayName = 'TextInput';
