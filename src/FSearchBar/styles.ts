import { FColorTypes } from "@fantaskticedtechlimited/fui-rn-colorlib";
import { StyleSheet } from "react-native";
import { FRWDScaleCalculator, FTheme } from "..";

export const styles = (
	disabled: boolean,
	isTriggered: boolean,
	theme: FTheme
) =>
	StyleSheet.create({
		FSearchBarContainer: {
			backgroundColor: FColorTypes.PRIMARY_LIGHT as string,
			borderRadius: 4,
			padding: FRWDScaleCalculator(8),
			opacity: disabled ? 0.4 : 1,
			display: "flex",
			flexDirection: "row",
			alignItems: "center",
			borderColor: isTriggered
				? theme.mainThemeColor
				: FColorTypes.PRIMARY_LIGHT,
			borderWidth: 2,
		},
	});
