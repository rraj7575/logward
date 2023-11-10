import type { ChangeEvent, HTMLInputTypeAttribute, ReactNode } from 'react';
import { FontWeight } from '../../Typography';
export type InputSize = 'small' | 'medium' | 'self';
export type TextInputProps = {
    icon?: ReactNode;
    hasError?: boolean;
    id?: string;
    name?: string;
    onClickInputIcon?: () => void;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    type?: HTMLInputTypeAttribute;
    value?: string;
    label?: string;
    showError?: boolean;
    size?: InputSize;
    disabled?: boolean;
    readOnly?: boolean;
    showErrorIcon?: boolean;
    isSmallInput?: boolean;
    showOutline?: boolean;
    labelFontWeight?: FontWeight;
};
export declare const TextInput: import("react").ForwardRefExoticComponent<TextInputProps & import("react").RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=TextInput.d.ts.map