import { StyleProp, TextInputProps, TextStyle, ViewStyle } from "react-native";
import { FTheme } from "..";
import { FTextProps } from "../FText/types";

export interface FTextInputFieldProps extends TextInputProps {
	label?: string;
	disabled?: boolean;
	font?: TextStyle;
	//  ======================================================
	//  define FTextInputField with Wordcount container style
	//  ======================================================
	containerStyle?: StyleProp<ViewStyle>;
	//  ======================================================
	//  define FTextInputField div (label + input area) style
	//  ======================================================
	divStyle?: StyleProp<ViewStyle>;
	//  =============================================================
	//  *** input area style: use style (in TextInputProps) instead
	//  =============================================================
	renderInputFieldState?: (state: FTextInputFieldStateProps) => void;
	labelProps?: FTextProps;
	wordcountProps?: FTextProps;
}

interface FTextInputFieldStateProps {
	isTriggered: boolean;
	isFilled: boolean;
}

export interface FTextInputFieldStyleProps {
	props: FTextInputFieldProps;
	isTriggered: boolean;
	isFilled: boolean;
	theme: FTheme;
	disabled: boolean;
}
