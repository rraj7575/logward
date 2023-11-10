import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import _isEmpty from 'lodash/isEmpty';
import { Typography } from '../../Typography';
import { ErrorTextStyled, FieldStyled } from './Field.styled';
export function Field({ children, fieldState, showError = true, heightFull = false, widthFull = false, }) {
    var _a;
    const errorMessage = (_a = fieldState.error) === null || _a === void 0 ? void 0 : _a.message;
    return (_jsxs(FieldStyled, Object.assign({ gutter: "0.5rem", "$heightFull": heightFull, "$widthFull": widthFull }, { children: [children, !_isEmpty(errorMessage) && showError && (_jsx(ErrorTextStyled, { children: _jsx(Typography, Object.assign({ name: "error" }, { children: errorMessage })) }))] })));
}
