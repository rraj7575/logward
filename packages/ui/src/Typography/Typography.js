import { jsx as _jsx } from "react/jsx-runtime";
import { ThemeProvider } from 'styled-components';
import { TypographyStyled } from './Typography.styled';
export const typographyElements = {
    xLarge: 'h1',
    error: 'p',
    heading1: 'h1',
    heading2: 'h2',
    heading3: 'h3',
    heading4: 'h4',
    heading5: 'h5',
    heading6: 'h6',
    paragraph: 'p',
    paragraphSmall: 'p',
    secondary: 'p',
    secondarySmall: 'p',
    listTitle: 'p',
    sidebar: 'p',
    secondary2: 'p',
    secondaryXs: 'p',
    secondarySmallDark: 'p',
    success: 'p',
};
export function Typography({ className = '', children, name = 'paragraph', element, active = false, fontWeight, textDecoration = 'none', }) {
    const as = element !== null && element !== void 0 ? element : typographyElements[name];
    return (_jsx(ThemeProvider, Object.assign({ theme: { name } }, { children: _jsx(TypographyStyled, Object.assign({ as: as, active: active, fontWeight: fontWeight, textDecoration: textDecoration, className: className }, { children: children })) })));
}
