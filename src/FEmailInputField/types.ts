import { ReactNode, RefObject } from "react";
import {
	StyleProp,
	TextInput,
	TextInputProps,
	TextStyle,
	ViewStyle,
} from "react-native";
import { PathProps, SvgProps } from "react-native-svg";
import { FOnPressFunction, FTextProps, FTheme } from "..";
import { FTextInputFieldStateProps } from "../FTextInputField/types";

type ModifiedEmailTextInputProps = Pick<
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

export interface FEmailInputFieldProps extends ModifiedEmailTextInputProps {
	/**
	 * Provide ref for the email input field
	 */
	ref?: RefObject<TextInput>;
	/**
	 * Further actions when the email input is focused.
	 */
	onFocus?: FOnPressFunction;
	/**
	 * Further actions when the email input is blurred.
	 */
	onBlur?: FOnPressFunction;
	/**
	 * If true, the email input field will be disabled to use.
	 */
	disabled?: boolean;
	/**
	 * The font style of the email (text) input.
	 */
	font?: TextStyle;
	/**
	 * If true, the email input will be auto validated.
	 * The default warning label will also be rendered, if the email is not valid.
	 */
	autoValidateEmail?: boolean;
	/**
	 * The validation result will be returned.
	 */
	renderAutoValidationResult?: (isValid: boolean) => void;
	/**
	 * The customised warning label with the validation result will be rendered
	 * if this field is used.
	 */
	customWarningLabel?: (isValid?: boolean) => ReactNode;
	/**
	 * The states (`isTriggered` and `isFilled`) of the email input field will be rendered.
	 *
	 * `isTriggered` means the email input is focused.
	 *
	 * `isFilled` means the email input is finished with value.
	 */
	renderInputFieldState?: (state: FTextInputFieldStateProps) => void;
	/**
	 * The style of the whole email input field (with the default warning label).
	 */
	containerStyle?: StyleProp<ViewStyle>;
	/**
	 * The style of the email input field div itself
	 * (without the default warning label).
	 */
	divStyle?: StyleProp<ViewStyle>;
	/**
	 * The style of email (text) input.
	 */
	inputStyle?: StyleProp<TextStyle>;
	/**
	 * The properties of the email icon at the head of the email input field.
	 */
	emailIconProps?: FEmailInputFieldIconStyleProps;
	/**
	 * The properties of the default warning label for the invalid email input.
	 */
	warningLabelProps?: FTextProps;
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
