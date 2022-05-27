import { StyleProp, ViewStyle } from "react-native";
import { SvgProps, PathProps } from "react-native-svg";
import { FOnPressFunction } from "../..";

export interface FPasswordInputFieldIconProps {
	style?: StyleProp<ViewStyle>; 
	strokeColor?: string; 
	svgProps?: SvgProps;
	pathProps?: PathProps;
	onPress?: FOnPressFunction;
}
