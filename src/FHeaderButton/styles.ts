import { StyleSheet } from "react-native";
import { FTheme } from "..";

export const styles = (theme: FTheme, disabled: boolean) =>
	StyleSheet.create({
		FHeaderButtonContainer: {
			alignItems: "center",
			justifyContent: "center",
			borderRadius: 4,
			backgroundColor: theme.subThemeColor,
			padding: 8,
			opacity: disabled ? 0.4 : 1,
		},
	});
