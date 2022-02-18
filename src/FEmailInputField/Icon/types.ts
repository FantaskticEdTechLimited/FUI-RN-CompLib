import { StyleProp, ViewStyle } from "react-native";
import { FOnPressFunction } from "../..";
import { FEmailInputFieldIconStyleProps } from "../types";

export interface FEmailInputFieldIconProps {
	strokeColor?: string;
	onPress?: FOnPressFunction;
	style?: StyleProp<ViewStyle>;
	iconProps?: FEmailInputFieldIconStyleProps;
}
