import Svg, { Path, SvgProps, PathProps } from "react-native-svg";
import React from "react";
import { FRWDScaler } from "../..";
import { FColorTypes } from "@fantaskticedtechlimited/fui-rn-colorlib";
import { FPasswordInputFieldIconProps } from "./types";

export const EyeIcon = (props: FPasswordInputFieldIconProps) => {
	const SvgProps: SvgProps = {
		width: FRWDScaler(24),
		height: FRWDScaler(24),
		viewBox: "0 0 24 24",
		fill: "none",
		onPress: props.svgProps?.onPress ?? props.onPress,
		style: props.svgProps?.style ?? props.style,
		...props.svgProps,
	};

	const PathProps: PathProps = {
		stroke:
			props.pathProps?.stroke ?? props.strokeColor ?? FColorTypes.PRIMARY_BLACK,
		strokeWidth: "2",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		...props.pathProps,
	};

	return (
		<Svg {...SvgProps}>
			<Path
				d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
				{...PathProps}
			/>
			<Path
				d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
				{...PathProps}
			/>
		</Svg>
	);
};
