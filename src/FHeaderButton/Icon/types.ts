import { FTheme } from "../..";
import { FHeaderButtonIconStyleProps, FHeaderButtonTypes } from "../types";

export interface FHeaderButtonIconProps {
	type: FHeaderButtonTypes;
	theme: FTheme;
	iconProps?: FHeaderButtonIconStyleProps;
}
