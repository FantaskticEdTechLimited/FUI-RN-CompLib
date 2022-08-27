import { FColorTypes } from "@fantaskticedtechlimited/fui-rn-colorlib";
import { StyleSheet } from "react-native";
import { FRWDScaler } from "..";
import { FEmailInputFieldStyleProps } from "./types";

export const styles = (styleProps: FEmailInputFieldStyleProps) =>
	StyleSheet.create({
		FEmailInputFieldContainer: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "flex-start",
		},
		FEmailInputFieldDiv: {
			display: "flex",
			flexDirection: "row",
			alignItems: "center",
			padding: FRWDScaler(12),
			opacity: styleProps.disabled ? 0.4 : 1,
			borderWidth: 2,
			borderColor: styleProps.isTriggered
				? styleProps.theme.mainThemeColor
				: styleProps.autoValidateEmail && styleProps.isFilled
				? styleProps.isValid
					? FColorTypes.PRIMARY_BLACK
					: FColorTypes.SECONDARY_RED
				: styleProps.isFilled
				? FColorTypes.PRIMARY_BLACK
				: FColorTypes.PRIMARY_LIGHT,
			backgroundColor: FColorTypes.PRIMARY_LIGHT as string,
			borderRadius: 4,
		},
	});
