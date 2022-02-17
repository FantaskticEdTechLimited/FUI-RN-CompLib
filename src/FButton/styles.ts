import { StyleSheet } from "react-native";
import { FTheme } from "..";
import { FButtonProps, FButtonTypes } from "./types";

export const styles = (theme: FTheme, props: FButtonProps) =>
	StyleSheet.create({
		FButtonContainer: {
			display: "flex",
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "center",
			paddingVertical: 8,
			paddingHorizontal: 12,
			borderRadius: 4,
			textAlign: "center",
			opacity: props.disabled ? 0.4 : 1,
			backgroundColor:
				props.type === FButtonTypes.PRIMARY
					? theme.mainThemeColor
					: props.type === FButtonTypes.SECONDARY
					? theme.subThemeColor
					: undefined,
			borderWidth: props.type === FButtonTypes.OUTLINE ? 2 : undefined,
			borderColor:
				props.type === FButtonTypes.OUTLINE ? theme.mainThemeColor : undefined,
		},
	});
