import { FColorTypes } from "@fantaskticedtechlimited/fui-rn-colorlib";
import { StyleSheet } from "react-native";
import { FRWDScaler } from "../utils/useRWDScaler";

export const styles = StyleSheet.create({
	FBottomSheet_Container: {
		backgroundColor: FColorTypes.PRIMARY_WHITE as string,
		padding: FRWDScaler(16),
		display: "flex",
		flexDirection: "column",
		overflow: "hidden",
	},
	FBottomSheet_Indicator_Div: {
		backgroundColor: FColorTypes.PRIMARY_LIGHT as string,
		borderRadius: 8,
		marginBottom: FRWDScaler(16),
		width: FRWDScaler(32),
		height: FRWDScaler(4),
		alignSelf: "center",
	},
});
