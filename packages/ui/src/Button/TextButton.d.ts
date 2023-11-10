import { ReactNode } from 'react';
export type TextButtonAppearance = 'primary' | 'secondary' | 'danger';
export type TextButtonProps = {
    onClick?: () => void;
    children: ReactNode;
    bold?: boolean;
    appearance?: TextButtonAppearance;
    disabled?: boolean;
};
export declare const TextButton: import("react").ForwardRefExoticComponent<TextButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=TextButton.d.ts.map