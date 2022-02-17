import { TextProps, TextStyle } from "react-native";

export interface FTextProps extends TextProps{
	children?: string;
	font?: TextStyle;
	color?: string;  
	flexShrink?: number; 
}
