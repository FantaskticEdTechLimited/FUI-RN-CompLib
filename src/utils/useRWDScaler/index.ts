import { Dimensions } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const baseWidth = 360;

export const FRWDScaler = (value: number) => {
	const result = SCREEN_WIDTH * (value / baseWidth);
	return result;
};
