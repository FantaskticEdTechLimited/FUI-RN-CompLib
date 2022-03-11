import { Pressable } from "react-native";
import { FButtonProps, FButtonTypes } from "./types";
import { styles } from "./styles";
import { FText } from "../FText";
import { FFontTypes } from "@fantaskticedtechlimited/fui-rn-fontlib";
import { FColorTypes } from "@fantaskticedtechlimited/fui-rn-colorlib";
import { FUseTheme } from "../FThemeContext";
import React from "react";

export const FButton = (props: FButtonProps) => {
	const { theme } = FUseTheme();
	return (
		<Pressable
			style={[styles(theme, props).FButtonContainer, props.style]}
			onPress={props.disabled ? undefined : props.onPress}
		>
			{props.customChildren ?? (
				<>
					{props.leadingComponents}
					<FText
						color={
							props.labelProps?.color ?? props.type === FButtonTypes.PRIMARY
								? FColorTypes.PRIMARY_WHITE
								: props.type === FButtonTypes.SECONDARY ||
								  props.type === FButtonTypes.OUTLINE
								? theme.mainThemeColor
								: FColorTypes.PRIMARY_BLACK
						}
						font={props.labelProps?.font ?? FFontTypes.FDefaultFonts.Text()}
						style={props.labelProps?.style}
						children={
							props.label ?? props.labelProps?.children ?? "Button_Text"
						}
						{...props.labelProps}
					/>
					{props.actionComponents}
				</>
			)}
		</Pressable>
	);
};
