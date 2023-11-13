/// <reference types="react" />
import type { ControllerRenderProps } from 'react-hook-form';
export type TextAreaInputSize = 'small' | 'medium' | 'large';
export type TextAreaInputProps = Partial<Omit<ControllerRenderProps, 'ref'>> & {
    onFocus?: () => void;
    autoFocus?: boolean;
    placeholder?: string;
    hasError?: boolean;
    size?: TextAreaInputSize;
    showError?: boolean;
    disabled?: boolean;
    rows?: number;
    isDefaultOutlineVisible?: boolean;
    isShowingEllipsis?: boolean;
};
export declare const TextAreaInput: import("react").ForwardRefExoticComponent<Partial<Omit<ControllerRenderProps<import("react-hook-form").FieldValues, string>, "ref">> & {
    onFocus?: (() => void) | undefined;
    autoFocus?: boolean | undefined;
    placeholder?: string | undefined;
    hasError?: boolean | undefined;
    size?: TextAreaInputSize | undefined;
    showError?: boolean | undefined;
    disabled?: boolean | undefined;
    rows?: number | undefined;
    isDefaultOutlineVisible?: boolean | undefined;
    isShowingEllipsis?: boolean | undefined;
} & import("react").RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=TextAreaInput.d.ts.map