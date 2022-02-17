import Svg, { Path, PathProps, SvgProps } from "react-native-svg";
import React from "react";
import { FSearchBarIconProps } from "./types";

export const FSearchBarIcon = (props: FSearchBarIconProps) => {
	const SvgProps: SvgProps = {
		width: "18",
		height: "18",
		viewBox: "0 0 18 18",
		fill: "none",
		onPress: props.onPress ?? props.iconProps?.svgProps?.onPress,
		style: props.style ?? props.iconProps?.svgProps?.style,
		...props.iconProps?.svgProps,
	};
	const PathProps: PathProps = {
		stroke: props.strokeColor ?? props.iconProps?.pathProps?.stroke,
		strokeWidth: "1.2",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		...props.iconProps?.pathProps,
	};
	return (
		<Svg {...SvgProps}>
			{props.type === "Search" ? (
				<>
					<Path
						d="M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z"
						{...PathProps}
					/>
					<Path d="M15.75 15.75L12.4875 12.4875" {...PathProps} />
				</>
			) : (
				<>
					<Path d="M13.5 4.5L4.5 13.5" {...PathProps} />
					<Path d="M4.5 4.5L13.5 13.5" {...PathProps} />
				</>
			)}
		</Svg>
	);
};
