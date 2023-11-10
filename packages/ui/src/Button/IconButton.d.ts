import { ReactNode } from 'react';
export type IconButtonProps = {
    onClick?: () => void;
    children: ReactNode;
    invertColor?: boolean;
    border?: boolean;
    padding?: boolean;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
};
export declare const IconButton: import("react").ForwardRefExoticComponent<IconButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=IconButton.d.ts.map