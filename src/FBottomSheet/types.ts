import { ReactNode } from "react";
import { ScrollViewProps, StyleProp, ViewStyle } from "react-native";
import BottomSheetBehavior from "reanimated-bottom-sheet";
import { FOnPressFunction } from "..";

export interface FBottomSheetProps {
	/**
	 * If true, the bottom sheet will appear based on the given snapPoints.
	 */
	isVisible: boolean;
	/**
	 * The height of the bottom sheet reaches.
	 *
	 * **The array content must be in descending order.**
	 */
	snapPoints: Array<string | number>;
	/**
	 * The scrollable content of the bottom sheet renders,
	 * which is wrapped by `ScrollView`.
	 */
	children: ReactNode;
	/**
	 * If true, the content cannot be scrolled.
	 */
	scrollDisabled?: boolean;
	/**
	 * If true, the scroll bar (based on vertical or horizontal) will appear.
	 */
	showScrollBar?: boolean;
	/**
	 * The close action events of the bottom sheet.
	 */
	onClose: FOnPressFunction;
	/**
	 * The border radius of the bottom sheet container.
	 */
	borderRadius?: number;
	/**
	 * If true, the overlay (i.e. the background of the bottom sheet) will be removed.
	 */
	removeOverlay?: boolean;
	/**
	 * The style of the overlay background of the bottom sheet.
	 */
	overlayStyle?: StyleProp<ViewStyle>;
	/**
	 * The style of the bottom sheet container.
	 */
	containerStyle?: StyleProp<ViewStyle>;
	/**
	 * The style of the content of the bottom sheet container.
	 */
	contentStyle?: StyleProp<ViewStyle>;
	/**
	 * If true, the indicator at the top of the bottom sheet container will be removed.
	 *
	 * The indicator is for sliding down to close the bottom sheet.
	 */
	removeIndicator?: boolean;
	/**
	 * The style of the indicator at the top of the bottom sheet container.
	 */
	indicatorStyle?: StyleProp<ViewStyle>;
	/**
	 * Reanimated Bottom Sheet own behavior and properties.
	 */
	behaviorProps?: Omit<BottomSheetBehavior, "snapPoints" | "renderContent">;
	/**
	 * The `ScrollView` properties of the content.
	 */
	scrollViewProps?: Omit<
		ScrollViewProps,
		| "contentContainerStyle"
		| "scrollEnabled"
		| "showsHorizontalScrollIndicator"
		| "showsVerticalScrollIndicator"
	>;
}
