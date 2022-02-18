import { StyleProp, TextInputProps, TextStyle, ViewStyle } from "react-native";
import { PathProps, SvgProps } from "react-native-svg";

export interface FSearchBarProps extends TextInputProps {
	disabled?: boolean;
	font?: TextStyle;
	//  ======================================================
	//  define FSearchBar container style
	//  ======================================================
	containerStyle?: StyleProp<ViewStyle>;
	//  =============================================================
	//  *** input area style: use style (in TextInputProps) instead
	//  =============================================================
	searchIconProps?: FSearchBarIconStyleProps;
    clearIconProps?: FSearchBarIconStyleProps;
	renderInputFieldState?: (state: FSearchBarStateProps) => void;
}

interface FSearchBarStateProps {
	isTriggered: boolean;
	isFilled: boolean;
}

export interface FSearchBarIconStyleProps {
	svgProps?: SvgProps;
	pathProps?: PathProps;
}
