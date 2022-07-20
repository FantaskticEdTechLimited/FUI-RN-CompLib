import { Text } from "react-native";
import { FTextProps } from "./types";
import React from "react";
import { FColorTypes } from "@fantaskticedtechlimited/fui-rn-colorlib";
import { FFontTypes } from "@fantaskticedtechlimited/fui-rn-fontlib";

export const FText = (props: FTextProps) => {
	return (
		<Text
			{...props}
			style={[
				props.font ?? FFontTypes.FDefaultFonts.Text(),
				{
					color: props.color ?? FColorTypes.PRIMARY_BLACK,
				},
				props.style,
			]}
			children={props.children ?? "Text"}
		/>
	);
};
