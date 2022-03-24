import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { FOnPressFunction } from "..";
import { FBottomNavBarProps } from "../FBottomNavBar/types";

export interface FPopUpProps {
	isVisible: boolean;
	children: ReactNode;
	onClose: FOnPressFunction;
	disableBottomNavBar?: boolean;
	overlayStyle?: StyleProp<ViewStyle>;
	containerStyle?: StyleProp<ViewStyle>;
	contentDivStyle?: StyleProp<ViewStyle>;
	bottomNavBarStyle?: StyleProp<ViewStyle>;
	bottomNavBarProps?: FBottomNavBarProps;
}
