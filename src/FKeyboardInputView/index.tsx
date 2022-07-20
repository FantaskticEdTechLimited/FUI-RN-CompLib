import React from "react";
import { Platform } from "react-native";
import { FKeyboardInputViewProps } from "./types";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export const FKeyboardInputView = (props: FKeyboardInputViewProps) => {
	return (
		<KeyboardAwareScrollView
			enableOnAndroid={props.enableOnAndroid ?? true}
			style={[{ flex: 1 }, props.style]}
			contentContainerStyle={[{ flexGrow: 1 }, props.contentContainerStyle]}
			showsVerticalScrollIndicator={props.showsVerticalScrollIndicator ?? false}
			extraHeight={props.extraHeight ?? Platform.OS === "ios" ? 0 : 75}
			extraScrollHeight={
				props.extraScrollHeight ?? Platform.OS === "ios" ? 80 : 180
			}
			keyboardShouldPersistTaps={props.keyboardShouldPersistTaps ?? "handled"}
			children={props.children}
		/>
	);
};
