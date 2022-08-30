import React from "react";
import { View, ActivityIndicator } from "react-native";
import { FUseTheme } from "..";
import { styles } from "./styles";
import { FLoadingIndicatorProps } from "./types";

export const FLoadingIndicator = (props: FLoadingIndicatorProps) => {
	const { theme } = FUseTheme();
	return (
		<View style={[styles.FLoadingIndicator_Container, props.style]}>
			<ActivityIndicator
				size={props.size ?? "large"}
				color={props.color ?? theme.mainThemeColor}
			/>
		</View>
	);
};
