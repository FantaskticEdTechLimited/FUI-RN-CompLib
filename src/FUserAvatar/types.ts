import { StyleProp, ViewStyle } from "react-native";
import { FTextProps } from "..";

export interface FUserAvatarProps {
	/**
	 * The label used for generating initials.
	 */
	label: string;
	/**
	 * Properties of the label.
	 */
	labelProps?: FTextProps;
	/**
	 * Shape of the avatar. Default is `rounded`.
	 */
	shape?: "rounded" | "normal";
	/**
	 * Style of the avatar.
	 */
	style?: StyleProp<ViewStyle>;
}
