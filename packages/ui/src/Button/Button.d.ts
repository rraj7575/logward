import { ReactNode } from 'react';
export type Appearance = 'contained' | 'bordered' | 'filled' | 'text' | 'danger' | 'neutral' | 'borderedNeutral' | 'bordered-black';
export type Size = 'small' | 'medium' | 'large';
export type Type = 'button' | 'submit' | 'reset';
export type ButtonProps = {
    onClick?: () => void;
    children?: ReactNode;
    label?: ReactNode;
    appearance?: Appearance;
    size?: Size;
    disabled?: boolean;
    type?: Type;
    leadingIcon?: ReactNode;
    trailingIcon?: ReactNode;
};
export declare const Button: import("react").ForwardRefExoticComponent<ButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=Button.d.ts.map