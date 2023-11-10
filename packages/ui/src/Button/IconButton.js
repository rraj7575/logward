import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { IconButtonStyled } from './IconButton.styled';
export const IconButton = forwardRef(({ onClick, children, invertColor = false, border = false, padding = false, type = 'button', disabled = false, }, ref) => {
    return (_jsx(IconButtonStyled, Object.assign({ onClick: onClick, border: border, invertColor: invertColor, padding: padding, ref: ref, type: type, disabled: disabled }, { children: children })));
});
IconButton.displayName = 'IconButton';
