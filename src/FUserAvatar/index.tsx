import { FColorTypes } from "@fantaskticedtechlimited/fui-rn-colorlib";
import React from "react";
import { Platform, View } from "react-native";
import { FUserAvatarProps } from "./types";
import { styles } from "./styles";
import { FFontTypes } from "@fantaskticedtechlimited/fui-rn-fontlib";
import { FRWDScaleCalculator, FText, FUseTheme } from "..";

export const FUserAvatar = (props: FUserAvatarProps) => {
	const { theme } = FUseTheme();
	const shape = props.shape ?? "rounded";

	const handleGenerateInitials = () => {
		return props.label
			.match(/\b(\w)/g)
			?.slice(0, 2)
			.join("")
			.toUpperCase();
	};

	return (
		<View
			style={[
				styles.FUserAvatar_Container,
				{
					borderRadius: shape === "rounded" ? 64 : 0,
					backgroundColor: theme.mainThemeColor,
				},
				props.style,
			]}
		>
			<FText
				font={props.labelProps?.font ?? FFontTypes.FDefaultFonts.Large_Title()}
				color={props.labelProps?.color ?? FColorTypes.PRIMARY_WHITE}
				children={handleGenerateInitials()}
				style={[
					{
						marginTop: Platform.OS === "android" ? FRWDScaleCalculator(-4) : 0,
						marginLeft: Platform.OS === "ios" ? FRWDScaleCalculator(2) : 0,
					},
					props.labelProps?.style,
				]}
				{...props.labelProps}
			/>
		</View>
	);
};
