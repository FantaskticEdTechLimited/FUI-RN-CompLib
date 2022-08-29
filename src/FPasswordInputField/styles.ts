import { FColorTypes } from "@fantaskticedtechlimited/fui-rn-colorlib";
import { StyleSheet } from "react-native";
import { FRWDScaler } from "../utils/useRWDScaler";
import { FPasswordInputFieldStyleProps } from "./types";

export const styles = (styleProps: FPasswordInputFieldStyleProps) =>
	StyleSheet.create({
		FPasswordInputFieldContainer: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "flex-start",
		},
		FPasswordInputFieldDiv: {
			display: "flex",
			flexDirection: "row",
			alignItems: "center",
			padding: FRWDScaler(12),
			opacity: styleProps.disabled ? 0.4 : 1,
			borderWidth: 2,
			borderColor: styleProps.isTriggered
				? styleProps.theme.mainThemeColor
				: styleProps.invalidPassword && styleProps.isFilled
				? styleProps.invalidPassword
					? FColorTypes.SECONDARY_RED
					: FColorTypes.PRIMARY_BLACK
				: styleProps.isFilled
				? FColorTypes.PRIMARY_BLACK
				: FColorTypes.PRIMARY_LIGHT,
			backgroundColor: FColorTypes.PRIMARY_LIGHT as string,
			borderRadius: 4,
		},
	});
