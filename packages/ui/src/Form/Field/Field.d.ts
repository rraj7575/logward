import { ReactNode } from 'react';
import { ControllerFieldState } from 'react-hook-form';
export type FieldPropsType = {
    children: ReactNode;
    fieldState: ControllerFieldState;
    showError?: boolean;
    heightFull?: boolean;
    widthFull?: boolean;
};
export declare function Field({ children, fieldState, showError, heightFull, widthFull, }: FieldPropsType): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Field.d.ts.map