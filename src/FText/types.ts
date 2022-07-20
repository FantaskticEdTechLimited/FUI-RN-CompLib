import { ReactNode } from "react";
import { TextProps, TextStyle } from "react-native";

export interface FTextProps extends TextProps {
	children?: ReactNode;
	font?: TextStyle;
	color?: string;
}
