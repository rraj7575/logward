import { Ref } from 'react';
import type { FieldValues, UseControllerProps } from 'react-hook-form';
import { TextAreaInputProps } from 'ui';
export type TextAreaFieldPropTypes<P extends FieldValues> = UseControllerProps<P> & TextAreaInputProps & {
    ref?: Ref<HTMLTextAreaElement>;
    showError?: boolean;
};
export declare const TextAreaField: <P extends FieldValues>({ name, control, ref, rules, defaultValue, showError, ...rest }: TextAreaFieldPropTypes<P>) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=TextAreaField.d.ts.map