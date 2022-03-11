import { FEmailInputFieldIconProps } from "./types";
import Svg, { Path, SvgProps, PathProps } from "react-native-svg";
import React from "react";
import { FRWDScaleCalculator } from "../..";

export const FEmailInputFieldIcon = (props: FEmailInputFieldIconProps) => {
	const SvgProps: SvgProps = {
		width: FRWDScaleCalculator(24),
		height: FRWDScaleCalculator(24),
		viewBox: "0 0 24 24",
		fill: "none",
		onPress: props.iconProps?.svgProps?.onPress ?? props.onPress,
		style: props.iconProps?.svgProps?.style ?? props.style,
		...props.iconProps?.svgProps,
	};
	const PathProps: PathProps = {
		stroke: props.iconProps?.pathProps?.stroke ?? props.strokeColor,
		strokeWidth: "1.6",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		...props.iconProps?.pathProps,
	};
	return (
		<Svg {...SvgProps}>
			<Path
				d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
				{...PathProps}
			/>
			<Path d="M22 6L12 13L2 6" {...PathProps} />
		</Svg>
	);
};
