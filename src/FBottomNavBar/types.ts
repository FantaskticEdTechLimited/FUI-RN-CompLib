import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { FButtonProps, FOnPressFunction } from "..";

export interface FBottomNavBarProps {
	actionButtonLabel?: string;
	leadingButtonLabel?: string;
	customChildren?: ReactNode;
	customLeadingComponent?: ReactNode;
	customActionComponent?: ReactNode;
	disabled?: boolean;
	disableActionButtonOnly?: boolean;
	disableLeadingButtonOnly?: boolean;
	onActionButtonPress?: FOnPressFunction;
	onLeadingButtonPress?: FOnPressFunction;
	style?: StyleProp<ViewStyle>;
	leadingButtonProps?: FButtonProps;
	leadingButtonStyle?: StyleProp<ViewStyle>;
	actionButtonProps?: FButtonProps;
	actionButtonStyle?: StyleProp<ViewStyle>;
}
