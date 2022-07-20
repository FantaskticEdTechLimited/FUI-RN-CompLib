import { Animated, StyleProp, ViewStyle } from "react-native";

export interface FCircularProgressProps {
	/**
	 * Size (width and height) of the circle.
	 */
	size: number | Animated.Value;
	/**
	 * Current progress value, for filling in the circular progress bar.
	 */
	progress: number;
	/**
	 * Thickness (width) of the progress bar.
	 */
	progressBarWidth: number;
	/**
	 * Shape of the end of the progress bar: `round`, `butt` and `square`.
	 *
	 * Default is `round`.
	 */
	progressBarHeadShape?: "round" | "butt" | "square";
	/**
	 * Background color of the progress bar, usually for the unfilled part.
	 */
	progressBarBackgroundColor?: string;
	/**
	 * Color of the filled progress bar, which has progress value.
	 */
	progressBarColor?: string;
	/**
	 * The custom content, with a value param, labeled at the center of the circle.
	 */
	children: (progress?: number) => JSX.Element;
	/**
	 * Duration of the animation for generating the progress value.
	 *
	 * Default is 1500ms.
	 */
	animationDuration?: number;
	/**
	 * Angle from which the progress starts from.
	 *
	 * Default is 0.
	 */
	startFromAngle?: number;
	/**
	 * Style of the entire progress container.
	 */
	containerStyle?: StyleProp<ViewStyle>;
	/**
	 * Style of the content (children) container.
	 */
	contentContainerStyle?: StyleProp<ViewStyle>;
}
