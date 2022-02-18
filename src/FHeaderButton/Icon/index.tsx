import React from "react";
import Svg, { Path, PathProps, SvgProps } from "react-native-svg";
import { FHeaderButtonTypes } from "../types";
import { FHeaderButtonIconProps } from "./types";

export const FHeaderButtonIcon = (props: FHeaderButtonIconProps) => {
	const SvgProps: SvgProps = {
		width: "16",
		height: "16",
		viewBox: "0 0 16 16",
		fill: "none",
		...props.iconProps?.svgProps,
	};
	const PathProps: PathProps = {
		stroke: props.iconProps?.pathProps?.stroke ?? props.theme.mainThemeColor,
		strokeWidth: "1.2",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		...props.iconProps?.pathProps,
	};

	const FHeaderButtonIconHandler = (type: FHeaderButtonTypes) => {
		switch (type) {
			case FHeaderButtonTypes.BACK:
				return (
					<>
						<Path d="M12.6666 8H3.33325" {...PathProps} />
						<Path
							d="M7.99992 12.6667L3.33325 8L7.99992 3.33333"
							{...PathProps}
						/>
					</>
				);
			case FHeaderButtonTypes.CLOSE:
				return (
					<>
						<Path d="M12 4L4 12" {...PathProps} />
						<Path d="M4 4L12 12" {...PathProps} />
					</>
				);
			case FHeaderButtonTypes.MORE:
				return (
					<>
						<Path
							d="M7.99992 8.66666C8.36811 8.66666 8.66659 8.36818 8.66659 7.99999C8.66659 7.63181 8.36811 7.33333 7.99992 7.33333C7.63173 7.33333 7.33325 7.63181 7.33325 7.99999C7.33325 8.36818 7.63173 8.66666 7.99992 8.66666Z"
							fill={props.theme.mainThemeColor}
							{...PathProps}
						/>
						<Path
							d="M7.99992 4.00001C8.36811 4.00001 8.66659 3.70153 8.66659 3.33334C8.66659 2.96515 8.36811 2.66667 7.99992 2.66667C7.63173 2.66667 7.33325 2.96515 7.33325 3.33334C7.33325 3.70153 7.63173 4.00001 7.99992 4.00001Z"
							fill={props.theme.mainThemeColor}
							{...PathProps}
						/>
						<Path
							d="M7.99992 13.3333C8.36811 13.3333 8.66659 13.0349 8.66659 12.6667C8.66659 12.2985 8.36811 12 7.99992 12C7.63173 12 7.33325 12.2985 7.33325 12.6667C7.33325 13.0349 7.63173 13.3333 7.99992 13.3333Z"
							fill={props.theme.mainThemeColor}
							{...PathProps}
						/>
					</>
				);
			default:
				return <></>;
		}
	};

	return <Svg {...SvgProps}>{FHeaderButtonIconHandler(props.type)}</Svg>;
};
