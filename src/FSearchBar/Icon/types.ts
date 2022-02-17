import { StyleProp, ViewStyle } from "react-native";
import { FOnPressFunction } from "../..";
import { FSearchBarIconStyleProps } from "../types";

export interface FSearchBarIconProps {
	type: "Search" | "Clear";
	strokeColor?: string;
	onPress?: FOnPressFunction;
	style?: StyleProp<ViewStyle>;
	iconProps?: FSearchBarIconStyleProps;
}
