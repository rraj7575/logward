import { AriaAttributes, CSSProperties, ReactNode } from 'react';
export declare const typographyElements: {
    xLarge: string;
    error: string;
    heading1: string;
    heading2: string;
    heading3: string;
    heading4: string;
    heading5: string;
    heading6: string;
    paragraph: string;
    paragraphSmall: string;
    secondary: string;
    secondarySmall: string;
    listTitle: string;
    sidebar: string;
    secondary2: string;
    secondaryXs: string;
    secondarySmallDark: string;
    success: string;
};
export type Name = keyof typeof typographyElements;
export type FontWeight = 400 | 700 | 900;
export type TypographyProps = AriaAttributes & {
    children: ReactNode;
    /** Name of the style to be applied */
    name?: Name;
    /** Element to render in the HTML, by default it's a *p* tag */
    element?: keyof JSX.IntrinsicElements;
    /** Only specific to sidebar */
    active?: boolean;
    /** You can override the font-weight manually. Shouldn't be used by user code. */
    fontWeight?: FontWeight;
    textDecoration?: CSSProperties['textDecoration'];
    className?: string;
};
export declare function Typography({ className, children, name, element, active, fontWeight, textDecoration, }: TypographyProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Typography.d.ts.map