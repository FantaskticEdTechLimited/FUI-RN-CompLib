import { ReactNode } from "react";
export interface Iprops {
    text?: string;
    onClick?: () => void;
    customContainerClass?: object;
    buttonColor?: string;
    disabled?: boolean;
    children?: ReactNode;
}
export declare const defaultProps: Iprops;
