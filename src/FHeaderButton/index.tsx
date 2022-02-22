import { Pressable } from "react-native";
import { FHeaderButtonProps } from "./types";
import { styles } from "./styles";
import { FHeaderButtonIcon } from "./Icon";
import { FUseTheme } from "..";
import React from "react";

export const FHeaderButton = (props: FHeaderButtonProps) => {
	const { theme } = FUseTheme();
	return (
		<Pressable
			style={[
				styles(theme, props.disabled!).FHeaderButtonContainer,
				props.style,
			]}
			onPress={props.disabled ? undefined : props.onPress}
		>
			<FHeaderButtonIcon
				type={props.type}
				theme={theme}
				iconProps={props.iconProps}
			/>
		</Pressable>
	);
};
