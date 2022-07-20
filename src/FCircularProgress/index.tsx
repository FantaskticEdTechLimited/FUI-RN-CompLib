import React from "react";
import { FCircularProgressProps } from "./types";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { FUseTheme } from "..";

export const FCircularProgress = (props: FCircularProgressProps) => {
	const { theme } = FUseTheme();

	return (
		<AnimatedCircularProgress
			fill={props.progress}
			size={props.size}
			width={props.progressBarWidth}
			rotation={props.startFromAngle ?? 0}
			tintColor={props.progressBarColor ?? theme.mainThemeColor}
			backgroundColor={props.progressBarBackgroundColor ?? theme.subThemeColor}
			duration={props.animationDuration ?? 1500}
			lineCap={props.progressBarHeadShape ?? "round"}
			style={props.containerStyle}
			childrenContainerStyle={props.contentContainerStyle}
			children={(fill: number) => props.children(fill)}
		/>
	);
};
