import React from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { FDismissKeyboardProps } from "./types";

export const FDismissKeyboard = (props: FDismissKeyboardProps) => {
	return (
		<TouchableWithoutFeedback
			onPress={() => Keyboard.dismiss()}
			children={props.children}
		/>
	);
};
