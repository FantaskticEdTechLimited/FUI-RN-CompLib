import { FColorTypes } from "@fantaskticedtechlimited/fui-rn-colorlib";
import { StyleSheet } from "react-native";
import { FRWDScaleCalculator } from "..";

export const styles = StyleSheet.create({
	FBottomSheet_Container: {
		backgroundColor: FColorTypes.PRIMARY_WHITE as string,
		padding: FRWDScaleCalculator(16),
		display: "flex",
		flexDirection: "column",
		overflow: "hidden",
	},
	FBottomSheet_Indicator_Div: {
		backgroundColor: FColorTypes.PRIMARY_LIGHT as string,
		borderRadius: 8,
		marginBottom: FRWDScaleCalculator(16),
		width: FRWDScaleCalculator(32),
		height: FRWDScaleCalculator(4),
		alignSelf: "center",
	},
});
