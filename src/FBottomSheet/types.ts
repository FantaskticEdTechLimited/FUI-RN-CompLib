import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { FOnPressFunction } from "..";

export interface FBottomSheetProps {
	isVisible: boolean;
	children: ReactNode;
	onClose?: FOnPressFunction;
	removeSlideAction?: boolean;
	overlayStyle?: StyleProp<ViewStyle>;
	containerStyle?: StyleProp<ViewStyle>;
	indicatorStyle?: StyleProp<ViewStyle>;
}
