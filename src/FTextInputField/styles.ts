import { FColorTypes } from "@fantaskticedtechlimited/fui-rn-colorlib";
import { StyleSheet } from "react-native";
import { FRWDScaler } from "../utils/useRWDScaler";
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
				? FRWDScaler(12)
				: styleProps.props.label || styleProps.props.labelProps?.children
				? styleProps.isFilled || styleProps.isTriggered
					? FRWDScaler(8)
					: FRWDScaler(20)
				: styleProps.isFilled || styleProps.isTriggered
				? FRWDScaler(12)
				: FRWDScaler(12),
			paddingHorizontal: FRWDScaler(12),
			marginBottom:
				styleProps.props.maxLength && styleProps.props.maxLength > 0
					? styleProps.props.multiline
						? FRWDScaler(4)
						: FRWDScaler(8)
					: 0,
			borderWidth: 2,
			borderRadius: 4,
			borderColor: styleProps.isTriggered
				? styleProps.theme.mainThemeColor
				: styleProps.isFilled
				? FColorTypes.PRIMARY_BLACK
				: FColorTypes.PRIMARY_LIGHT,
			backgroundColor: FColorTypes.PRIMARY_LIGHT as string,
			minHeight: styleProps.props.multiline ? FRWDScaler(112) : undefined,
		},
		FTextInputFieldInputDiv: {
			color: FColorTypes.PRIMARY_BLACK as string,
			flex: 1,
			height: "100%",
		},
	});
