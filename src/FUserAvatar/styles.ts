import { StyleSheet } from "react-native";
import { FRWDScaler } from "../utils/useRWDScaler";

export const styles = StyleSheet.create({
	FUserAvatar_Container: {
		width: FRWDScaler(64),
		height: FRWDScaler(64),
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
});
