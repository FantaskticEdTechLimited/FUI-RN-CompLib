import { FColorTypes } from "@fantaskticedtechlimited/fui-rn-colorlib";
import { StyleSheet } from "react-native";
import { FRWDScaleCalculator } from "../utils/useRWDScale";
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
				? FRWDScaleCalculator(12)
				: styleProps.props.label || styleProps.props.labelProps?.children
				? styleProps.isFilled || styleProps.isTriggered
					? FRWDScaleCalculator(8)
					: FRWDScaleCalculator(20)
				: styleProps.isFilled || styleProps.isTriggered
				? FRWDScaleCalculator(12)
				: FRWDScaleCalculator(12),
			paddingHorizontal: FRWDScaleCalculator(12),
			marginBottom:
				styleProps.props.maxLength && styleProps.props.maxLength > 0
					? styleProps.props.multiline
						? FRWDScaleCalculator(4)
						: FRWDScaleCalculator(8)
					: 0,
			borderWidth: 2,
			borderRadius: 4,
			borderColor: styleProps.isTriggered
				? styleProps.theme.mainThemeColor
				: styleProps.isFilled
				? FColorTypes.PRIMARY_BLACK
				: FColorTypes.PRIMARY_LIGHT,
			backgroundColor: FColorTypes.PRIMARY_LIGHT as string,
			minHeight: styleProps.props.multiline
				? FRWDScaleCalculator(112)
				: undefined,
		},
		FTextInputFieldInputDiv: {
			color: FColorTypes.PRIMARY_BLACK as string,
			flex: 1,
			height: "100%",
		},
	});
