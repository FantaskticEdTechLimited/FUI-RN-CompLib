import { ReactNode } from "react";
import { StyleProp, TextInputProps, TextStyle, ViewStyle } from "react-native";
import { FTheme } from "..";
import { FPasswordInputFieldIconProps } from "./icons/types";

export type ModifiedTextInputProps = Pick<
	TextInputProps,
	| "value"
	| "onChangeText"
	| "placeholder"
	| "placeholderTextColor"
	| "selectionColor"
	| "autoCorrect"
	| "spellCheck"
	| "underlineColorAndroid"
	| "style"
>;

export interface FPasswordInputFieldProps extends ModifiedTextInputProps {
	disabled?: boolean;
	font?: TextStyle;
	showPassword?: boolean;
	invalidPassword?: boolean;
	renderCustomWarningLabel?: ReactNode;
	//  =============================================================
	leadingIcon?: ReactNode;
	actionIcon?: ReactNode;
	//  =============================================================
	//  define FPasswordInputField container (with warning label) style
	//  =============================================================
	containerStyle?: StyleProp<ViewStyle>;
	//  =============================================================
	//  define FPasswordInputField div style
	//  =============================================================
	divStyle?: StyleProp<ViewStyle>;
	//  =============================================================
	//  *** input area style: use style (in TextInputProps) instead
	//  =============================================================
	lockIconProps?: FPasswordInputFieldIconProps;
	eyeIconProps?: FPasswordInputFieldIconProps;
	eyeOffIconProps?: FPasswordInputFieldIconProps;
	renderInputFieldState?: (state: FPasswordInputFieldStateProps) => void;
}

interface FPasswordInputFieldStateProps {
	isTriggered: boolean;
	isFilled: boolean;
}

export interface FPasswordInputFieldStyleProps {
	disabled: boolean;
	isTriggered: boolean;
	isFilled: boolean;
	invalidPassword: boolean;
	theme: FTheme;
}
