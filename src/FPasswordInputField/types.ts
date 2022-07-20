import { ReactNode, RefObject } from "react";
import {
	StyleProp,
	TextInput,
	TextInputProps,
	TextStyle,
	ViewStyle,
} from "react-native";
import { FOnPressFunction, FTheme } from "..";
import { FTextInputFieldStateProps } from "../FTextInputField/types";
import { FPasswordInputFieldIconProps } from "./icons/types";

type ModifiedPasswordTextInputProps = Pick<
	TextInputProps,
	| "value"
	| "onChangeText"
	| "allowFontScaling"
	| "autoCapitalize"
	| "autoCorrect"
	| "autoFocus"
	| "keyboardType"
	| "placeholder"
	| "placeholderTextColor"
	| "selectionColor"
	| "showSoftInputOnFocus"
	| "underlineColorAndroid"
	| "clearTextOnFocus"
>;

export interface FPasswordInputFieldProps
	extends ModifiedPasswordTextInputProps {
	/**
	 * Provide ref for the password input field
	 */
	ref?: RefObject<TextInput>;
	/**
	 * Further actions when the password input is focused.
	 */
	onFocus?: FOnPressFunction;
	/**
	 * Further actions when the password input is blurred.
	 */
	onBlur?: FOnPressFunction;
	/**
	 * If true, the password input field will be disabled to use.
	 */
	disabled?: boolean;
	/**
	 * The font style of the password (text) input.
	 */
	font?: TextStyle;
	/**
	 * If true, the password will become visible.
	 */
	showPassword?: boolean;
	/**
	 * To set rules for invalid password input.
	 * If true, the password is invalid which returns corresponding styles
	 * and output (set `customWarningLabel`).
	 */
	invalidPassword?: boolean;
	/**
	 * Custom icon or element will be rendered at the head of the passowrd input field.
	 */
	leadingIcon?: ReactNode;
	/**
	 * Custom icon or element will be rendered at the tail of the passowrd input field.
	 */
	actionIcon?: ReactNode;
	/**
	 * The customised warning label will be rendered if this field is used.
	 */
	customWarningLabel?: ReactNode;
	/**
	 * The states (`isTriggered` and `isFilled`) of the passowrd input field will be rendered.
	 *
	 * `isTriggered` means the passowrd input is focused.
	 *
	 * `isFilled` means the passowrd input is finished with value.
	 */
	renderInputFieldState?: (state: FTextInputFieldStateProps) => void;
	/**
	 * The style of the whole password input field (with `customWarningLabel`).
	 */
	containerStyle?: StyleProp<ViewStyle>;
	/**
	 * The style of the password input field div itself
	 * (without `customWarningLabel`).
	 */
	divStyle?: StyleProp<ViewStyle>;
	/**
	 * The style of password (text) input.
	 */
	inputStyle?: StyleProp<TextStyle>;
	/**
	 * The properties of the lock icon at the head of the password input field.
	 */
	lockIconProps?: FPasswordInputFieldIconProps;
	/**
	 * The properties of the eye icon at the tail of the password input field.
	 *
	 * The eye icon is for the visible password.
	 */
	eyeIconProps?: FPasswordInputFieldIconProps;
	/**
	 * The properties of the eye-off icon at the tail of the password input field.
	 *
	 * The eye-off icon is for the invisible password.
	 */
	eyeOffIconProps?: FPasswordInputFieldIconProps;
}

export interface FPasswordInputFieldStyleProps {
	disabled: boolean;
	isTriggered: boolean;
	isFilled: boolean;
	invalidPassword: boolean;
	theme: FTheme;
}
