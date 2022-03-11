import { StyleSheet } from "react-native";
import { FRWDScaleCalculator, FTheme } from "..";

export const styles = (theme: FTheme, disabled: boolean) =>
	StyleSheet.create({
		FHeaderButtonContainer: {
			alignItems: "center",
			justifyContent: "center",
			borderRadius: 4,
			backgroundColor: theme.subThemeColor,
			padding: FRWDScaleCalculator(8),
			opacity: disabled ? 0.4 : 1,
		},
	});
