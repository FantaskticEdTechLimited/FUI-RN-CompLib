import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { FOnPressFunction } from "..";
import { FTextProps } from "../FText/types";

export enum FButtonTypes {
	PRIMARY = "Primary",
	SECONDARY = "Secondary",
	OUTLINE = "Outline",
	TEXT = "Text",
}

export interface FButtonProps {
	type?: FButtonTypes;
	label?: string;
	labelProps?: FTextProps;
	disabled?: boolean;
	customChildren?: ReactNode;
	leadingComponents?: ReactNode;
	actionComponents?: ReactNode;
	style?: StyleProp<ViewStyle>;
	onPress?: FOnPressFunction;
}
