import { Text } from "react-native";
import { FTextProps } from "./types";
import React from "react";
import { FColorTypes } from "@fantaskticedtechlimited/fui-rn-colorlib";

export const FText = (props: FTextProps) => {
	return (
		<Text
			style={[
				props.font,
				{
					color: props.color ?? FColorTypes.PRIMARY_BLACK,
					flexShrink: props.flexShrink,
				},
				props.style,
			]}
			onPress={props.onPress}
			children={props.children ?? "Text"}
		/>
	);
};
