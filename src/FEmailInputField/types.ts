import { ReactNode } from "react";
import { StyleProp, TextInputProps, TextStyle, ViewStyle } from "react-native";
import { PathProps, SvgProps } from "react-native-svg";
import { FTheme } from "..";

export interface FEmailInputFieldProps extends TextInputProps {
	disabled?: boolean;
	font?: TextStyle;
	//  =============================================================
	//  validate email and render custom warning label
	//  =============================================================
	autoValidateEmail?: boolean;
	renderCustomWarningLabel?: (isValid: boolean) => ReactNode;
	//  =============================================================
	//  =============================================================
	//  define FEmailInputField container (with warning label) style
	//  =============================================================
	containerStyle?: StyleProp<ViewStyle>;
	//  =============================================================
	//  define FEmailInputField div style
	//  =============================================================
	divStyle?: StyleProp<ViewStyle>;
	//  =============================================================
	//  *** input area style: use style (in TextInputProps) instead
	//  =============================================================
	emailIconProps?: FEmailInputFieldIconStyleProps;
	renderInputFieldState?: (state: FEmailInputFieldStateProps) => void;
}

interface FEmailInputFieldStateProps {
	isTriggered: boolean;
	isFilled: boolean;
}

export interface FEmailInputFieldStyleProps {
	disabled: boolean;
	isTriggered: boolean;
	isFilled: boolean;
	autoValidateEmail: boolean;
	isValid: boolean;
	theme: FTheme;
}

export interface FEmailInputFieldIconStyleProps {
	svgProps?: SvgProps;
	pathProps?: PathProps;
}
