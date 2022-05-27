import { StyleProp, ViewStyle } from "react-native";
import { PathProps, SvgProps } from "react-native-svg";
import { FOnPressFunction } from "..";

export enum FHeaderButtonTypes {
	BACK = "Back",
	CLOSE = "Close",
	MORE = "More",
	FILTER = "Filter",
}

export interface FHeaderButtonIconStyleProps {
	svgProps?: SvgProps;
	pathProps?: PathProps;
}

export interface FHeaderButtonProps {
	type: FHeaderButtonTypes;
	style?: StyleProp<ViewStyle>;
	disabled?: boolean;
	onPress?: FOnPressFunction;
	iconProps?: FHeaderButtonIconStyleProps;
}
