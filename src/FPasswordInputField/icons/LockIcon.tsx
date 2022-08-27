import Svg, { Path, SvgProps, PathProps } from "react-native-svg";
import React from "react";
import { FRWDScaler } from "../..";
import { FColorTypes } from "@fantaskticedtechlimited/fui-rn-colorlib";
import { FPasswordInputFieldIconProps } from "./types";

export const LockIcon = (props: FPasswordInputFieldIconProps) => {
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
				d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z"
				{...PathProps}
			/>
			<Path
				d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11"
				{...PathProps}
			/>
		</Svg>
	);
};
