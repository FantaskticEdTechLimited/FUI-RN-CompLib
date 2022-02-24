import { Text } from "react-native";
import { FTextProps } from "./types";
import React from "react";

export const FText = (props: FTextProps) => {
	return (
		<Text
			style={[
				props.font,
				{
					color: props.color,
					flexShrink: props.flexShrink,
				},
				props.style,
			]}
			onPress={props.onPress}
			children={props.children ?? "Text"}
		/>
	);
};
