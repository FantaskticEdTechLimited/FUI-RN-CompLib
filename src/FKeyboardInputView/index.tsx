import React from "react";
import { KeyboardAvoidingView } from "react-native";
import { FKeyboardInputViewProps } from "./types";

export const FKeyboardInputView = (props: FKeyboardInputViewProps) => {
	return (
		<KeyboardAvoidingView
			behavior={props.behavior ?? "padding"}
			style={[{ flex: 1 }, props.style]}
			contentContainerStyle={[{ flexGrow: 1 }, props.contentContainerStyle]}
			{...props}
		>
			{props.children}
		</KeyboardAvoidingView>
	);
};
