import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '@bedrock-layout/css/lib/bedrock-layout.min.css';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './GlobalStyles';
export function UIProvider({ children }) {
    return (_jsxs(ThemeProvider, Object.assign({ theme: { mode: 'light' } }, { children: [_jsx(GlobalStyles, {}), children] })));
}
