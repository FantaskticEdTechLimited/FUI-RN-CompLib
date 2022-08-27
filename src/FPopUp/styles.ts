import { FColorTypes } from "@fantaskticedtechlimited/fui-rn-colorlib";
import { StyleSheet } from "react-native";
import { FRWDScaler } from "..";

export const styles = StyleSheet.create({
	FPopUp_Overlay_Wrapper: {
		position: "absolute",
		zIndex: 1000,
		backgroundColor: FColorTypes.PRIMARY_BLACK + "99",
	},
	FPopUp_Container: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignSelf: "center",
		padding: FRWDScaler(16),
		backgroundColor: FColorTypes.PRIMARY_WHITE as string,
		borderRadius: 12,
		position: "absolute",
		zIndex: 1000,
	},
	FPopUp_Content_Div: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
});
