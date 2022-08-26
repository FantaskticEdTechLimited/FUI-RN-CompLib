import { RefObject } from "react";
import {
	StyleProp,
	TextInput,
	TextInputProps,
	TextStyle,
	ViewStyle,
} from "react-native";
import { FOnPressFunction, FTheme } from "..";
import { FTextProps } from "../FText/types";

type ModifiedTextInputProps = Omit<
	TextInputProps,
	"style" | "onFocus" | "onBlur"
>;

/**
 * The properties of `FTextInputField` (`FTextInputFieldProps`) inherits
 * the properties of `TextInput` (`TextInputProps`),
 * except `style` field (rename to `inputStyle`).
 */
export interface FTextInputFieldProps extends ModifiedTextInputProps {
	/**
	 * Provide ref for the text input field
	 */
	ref?: RefObject<TextInput>;
	/**
	 * Further actions when the text input is focused.
	 */
	onFocus?: FOnPressFunction;
	/**
	 * Further actions when the text input is blurred.
	 */
	onBlur?: FOnPressFunction;
	/**
	 * The label will be popped up to the header of the text input field,
	 * when the text input is focused.
	 */
	label?: string;
	/**
	 * If true, the input field will be disabled to use.
	 */
	disabled?: boolean;
	/**
	 * The font style of the text input.
	 */
	font?: TextStyle;
	/**
	 * The states (`isTriggered` and `isFilled`) of the text input field will be rendered.
	 *
	 * `isTriggered` means the text input is focused.
	 *
	 * `isFilled` means the text input is finished with value.
	 */
	renderInputFieldState?: (state: FTextInputFieldStateProps) => void;
	/**
	 * The style of the whole input field (with the word count container).
	 */
	containerStyle?: StyleProp<ViewStyle>;
	/**
	 * The style of the input field div (without the word count container).
	 */
	divStyle?: StyleProp<ViewStyle>;
	/**
	 * The style of text input area.
	 */
	inputAreaStyle?: StyleProp<TextStyle>;
	/**
	 * The style of text input.
	 */
	inputStyle?: StyleProp<TextStyle>;
	/**
	 * The properties of the label text.
	 */
	labelProps?: FTextProps;
	/**
	 * The properties of the word count text.
	 */
	wordcountProps?: FTextProps;
}

export interface FTextInputFieldStateProps {
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
