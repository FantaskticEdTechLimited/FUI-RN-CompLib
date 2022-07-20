import { StyleSheet } from "react-native";
import { FRWDScaleCalculator } from "..";

export const styles = StyleSheet.create({
	FUserAvatar_Container: {
		width: FRWDScaleCalculator(64),
		height: FRWDScaleCalculator(64),
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
});
