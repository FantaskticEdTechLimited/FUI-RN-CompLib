import { Text } from "react-native";
import { FTextProps } from "./types"; 
import React from "react";

export const FText = (props: FTextProps) => {
	return (
		<Text
			style={[
				props.style,
				props.font,
				{
					color: props.color,
					flexShrink: props.flexShrink,
				},
			]}
			children={props.children ?? "Text"}
		/>
	);
};
