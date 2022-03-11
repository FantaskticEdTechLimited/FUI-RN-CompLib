import { FColorTypes } from "@fantaskticedtechlimited/fui-rn-colorlib";
import { StyleSheet } from "react-native";
import { FRWDScaleCalculator } from "..";

export const styles = StyleSheet.create({
	FBottomSheet_Overlay_Wrapper: {
		backgroundColor: (FColorTypes.PRIMARY_BLACK + "99") as string,
		position: "absolute",
		zIndex: 1000, // must be higher than that of TaskInfoTopNavBar
	},
	FBottomSheet_Container: {
		position: "absolute",
		zIndex: 1000, // must be higher than that of TaskInfoTopNavBar
		borderRadius: 16,
		backgroundColor: FColorTypes.PRIMARY_WHITE as string,
		padding: FRWDScaleCalculator(16),
		display: "flex",
		flexDirection: "column",
		marginHorizontal: FRWDScaleCalculator(16),
		marginBottom: FRWDScaleCalculator(16),
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
