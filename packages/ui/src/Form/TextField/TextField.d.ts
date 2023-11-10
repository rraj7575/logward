import { Ref } from 'react';
import type { FieldValues, UseControllerProps } from 'react-hook-form';
import { TextInputProps } from 'ui';
export type TextFieldPropTypes<P extends FieldValues> = UseControllerProps<P> & TextInputProps & {
    ref?: Ref<HTMLInputElement>;
    showError?: boolean;
    heightFull?: boolean;
    widthFull?: boolean;
};
export declare const TextField: <P extends FieldValues>(props: TextFieldPropTypes<P>) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=TextField.d.ts.map