import { FColorTypes } from "@fantaskticedtechlimited/fui-rn-colorlib";
import { StyleSheet } from "react-native";
import { FTextInputFieldStyleProps } from "./types";

export const styles = (styleProps: FTextInputFieldStyleProps) =>
	StyleSheet.create({
		FTextInputFieldContainer: {
			display: "flex",
			flexDirection: "column",
			opacity: styleProps.disabled ? 0.4 : 1,
		},
		FTextInputFieldDiv: {
			display: "flex",
			flexDirection: "column",
			paddingVertical: styleProps.props.multiline
				? 12
				: styleProps.isFilled || styleProps.isTriggered
				? 12
				: 18,
			paddingHorizontal: 12,
			marginBottom:
				styleProps.props.maxLength && styleProps.props.maxLength > 0
					? styleProps.props.multiline
						? 4
						: 8
					: 0,
			borderWidth: 2,
			borderRadius: 4,
			borderColor: styleProps.isTriggered
				? styleProps.theme.mainThemeColor
				: styleProps.isFilled
				? FColorTypes.PRIMARY_BLACK
				: FColorTypes.PRIMARY_GREY,
			backgroundColor: FColorTypes.PRIMARY_LIGHT as string,
		},
	});
