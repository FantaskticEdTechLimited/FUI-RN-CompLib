import { ReactNode } from "react";

export interface Iprops {
	text?: string;
	onClick?: () => void;
	customContainerClass?: object;
	buttonColor?: string;
	disabled?: boolean;
    children?: ReactNode
}

export const defaultProps: Iprops = {
	customContainerClass: {},
	buttonColor: "blue",
	disabled: false,
};