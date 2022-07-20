import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";

export interface FKeyboardInputViewProps {
	/**
	 * If false, it will not enable keyboard aware settings for android.
	 * Default is true.
	 */
	enableOnAndroid?: boolean;
	/**
	 * If true, a vertical scroll indicator will be shown. Default is false.
	 */
	showsVerticalScrollIndicator?: boolean;
	/**
	 * Adds an extra offset when focusing the TextInputs.
	 *
	 * Default 0 for iOS, 75 for android.
	 *
	 * For example, `extraHeight={Platform.OS === "ios" ? 0 : 75}`
	 */
	extraHeight?: number;
	/**
	 * Adds an extra offset to the keyboard.
	 * It is mainly for the input view to have a height to scroll.
	 *
	 * Default 80 for iOS, 180 for android.
	 *
	 * For example, `extraScrollHeight={Platform.OS === "ios" ? 80 : 180}`
	 */
	extraScrollHeight?: number;
	/**
	 * Determines when the keyboard should stay visible after a tap.
	 *
	 * - 'never': tapping outside of the focused text input when the keyboard is up dismisses the keyboard.
	 * When this happens, children won't receive the tap.
	 *
	 * - 'always': the keyboard will not dismiss automatically,
	 * and the scroll view will not catch taps, but children of the scroll view can catch taps.
	 *
	 * - 'handled': **default**, the keyboard will not dismiss automatically
	 * when the tap was handled by a children, (or captured by an ancestor).
	 *
	 * If onPress event is required, **'handled'** is preferable for onPress of button
	 * to become a higher priority than functions like onBlur of text input.
	 */
	keyboardShouldPersistTaps?: "never" | "always" | "handled";
	/**
	 * The content of the input view.
	 */
	children: ReactNode;
	/**
	 * Style of the keyboard input view.
	 */
	style?: StyleProp<ViewStyle>;
	/**
	 * Style of the content container of the input view.
	 */
	contentContainerStyle?: StyleProp<ViewStyle>;
}
