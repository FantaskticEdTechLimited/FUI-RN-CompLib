import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { FDismissKeyboard } from "..";
import { FAvoidKeyboardOverlapProps } from "./types";

export const FAvoidKeyboardOverlap = (props: FAvoidKeyboardOverlapProps) => {
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={props.style}
		>
			<FDismissKeyboard>{props.children}</FDismissKeyboard>
		</KeyboardAvoidingView>
	);
};
