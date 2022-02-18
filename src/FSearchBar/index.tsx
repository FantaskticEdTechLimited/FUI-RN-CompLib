import { FColorTypes } from "@fantaskticedtechlimited/fui-rn-colorlib";
import { FFontTypes } from "@fantaskticedtechlimited/fui-rn-fontlib";
import React, { useEffect, useRef, useState } from "react";
import { Pressable, TextInput } from "react-native";
import { FUseTheme } from "..";
import { FSearchBarIcon } from "./Icon";
import { styles } from "./styles";
import { FSearchBarProps } from "./types";

export const FSearchBar = (props: FSearchBarProps) => {
	const [isTriggered, setIsTriggered] = useState<boolean>(false);
	const [isFilled, setIsFilled] = useState<boolean>(false);
	const { theme } = FUseTheme();
	const ref = useRef<TextInput>(null);
	const disabled = props.accessibilityState?.disabled || props.disabled;

	useEffect(() => {
		if (isTriggered && ref.current) {
			ref.current.focus();
			setIsFilled(false);
		}
	}, [isTriggered]);

	return (
		<Pressable
			style={[
				props.containerStyle,
				styles(disabled!, isTriggered, theme).FSearchBarContainer,
			]}
			onPress={() => !disabled && setIsTriggered(true)}
			disabled={disabled}
		>
			<FSearchBarIcon
				type="Search"
				strokeColor={
					isTriggered
						? theme.mainThemeColor
						: isFilled
						? FColorTypes.PRIMARY_BLACK
						: FColorTypes.PRIMARY_GREY
				}
				style={{ marginRight: 4 }}
				iconProps={props.searchIconProps}
			/>
			<TextInput
				ref={ref}
				{...props}
				style={[
					props.style, //  input area style
					props.font ?? FFontTypes.FDefaultFonts.Text(),
					{
						color: FColorTypes.PRIMARY_BLACK,
						flex: 1,
						paddingTop: 2,
					},
				]}
				placeholder={props.placeholder ?? "Search"}
				placeholderTextColor={
					props.placeholderTextColor ?? FColorTypes.PRIMARY_GREY
				}
				value={props.value}
				onChangeText={props.onChangeText}
				onSubmitEditing={() => {
					setIsTriggered(false);
					props.value === undefined || props.value === ""
						? setIsFilled(false)
						: setIsFilled(true);
					ref.current?.focus();
				}}
				onFocus={() => setIsTriggered(true)}
				onBlur={() => {
					setIsTriggered(false);
					props.value === undefined || props.value === ""
						? setIsFilled(false)
						: setIsFilled(true);
				}}
				selectionColor={props.selectionColor ?? theme.mainThemeColor}
				autoCorrect={props.autoCorrect ?? false}
				spellCheck={props.spellCheck ?? false}
				underlineColorAndroid={props.underlineColorAndroid ?? "transparent"}
			/>
			<FSearchBarIcon
				type="Clear"
				strokeColor={FColorTypes.PRIMARY_GREY}
				onPress={() => {
					setIsTriggered(true);
					props.onChangeText && props.onChangeText("");
				}}
				style={{
					marginLeft: 4,
					display:
						props.value === undefined || props.value === "" ? "none" : "flex",
				}}
				iconProps={props.clearIconProps}
			/>
		</Pressable>
	);
};
