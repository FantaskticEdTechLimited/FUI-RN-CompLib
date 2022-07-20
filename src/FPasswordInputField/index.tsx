import {
	FPasswordInputFieldProps,
	FPasswordInputFieldStyleProps,
} from "./types";
import { styles } from "./styles";
import React, { useEffect, useRef, useState } from "react";
import { FFontTypes } from "@fantaskticedtechlimited/fui-rn-fontlib";
import { FColorTypes } from "@fantaskticedtechlimited/fui-rn-colorlib";
import { Pressable, TextInput, View } from "react-native";
import { EyeIcon } from "./icons/EyeIcon";
import { EyeOffIcon } from "./icons/EyeOffIcon";
import { LockIcon } from "./icons/LockIcon";
import { FRWDScaleCalculator, FUseTheme } from "..";

export const FPasswordInputField = (props: FPasswordInputFieldProps) => {
	const [isTriggered, setIsTriggered] = useState<boolean>(false);
	const [isFilled, setIsFilled] = useState<boolean>(false);
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const { theme } = FUseTheme();
	const ref = useRef<TextInput>(null);
	const inputRef = props.ref ?? ref;
	const disabled = props.disabled;
	const invalidPassword = props.invalidPassword;
	const styleProps: FPasswordInputFieldStyleProps = {
		disabled: disabled!,
		isTriggered: isTriggered,
		isFilled: isFilled,
		invalidPassword: invalidPassword!,
		theme: theme,
	};

	useEffect(() => {
		if (isTriggered && inputRef && inputRef.current) {
			inputRef.current.focus();
		}
	}, [isTriggered]);

	useEffect(() => {
		if (props.showPassword) setShowPassword(true);
		else setShowPassword(false);
	}, [props.showPassword]);

	return (
		<View
			style={[
				styles(styleProps).FPasswordInputFieldContainer,
				props.containerStyle,
			]}
		>
			<Pressable
				style={[styles(styleProps).FPasswordInputFieldDiv, props.divStyle]}
				disabled={disabled}
			>
				{props.leadingIcon ?? (
					<LockIcon
						strokeColor={
							isTriggered
								? theme.mainThemeColor
								: invalidPassword && isFilled
								? invalidPassword
									? FColorTypes.SECONDARY_RED
									: FColorTypes.PRIMARY_BLACK
								: FColorTypes.PRIMARY_BLACK
						}
						style={{ marginRight: FRWDScaleCalculator(8) }}
						{...props.lockIconProps}
					/>
				)}
				<Pressable
					style={{ flex: 1 }}
					disabled={disabled}
					onPress={() => !disabled && setIsTriggered(true)}
				>
					<TextInput
						ref={inputRef}
						allowFontScaling={props.allowFontScaling ?? false}
						style={[
							props.font ?? FFontTypes.FDefaultFonts.Large_Text(),
							{
								color: FColorTypes.PRIMARY_BLACK,
							},
							props.inputStyle,
						]}
						placeholder={props.placeholder ?? "Your Password"}
						placeholderTextColor={
							props.placeholderTextColor ?? FColorTypes.PRIMARY_GREY
						}
						secureTextEntry={showPassword ? false : true}
						value={props.value}
						onChangeText={(value) =>
							!disabled && props.onChangeText && props.onChangeText(value)
						}
						onSubmitEditing={() => {
							setIsTriggered(false);
							props.value === undefined || props.value === ""
								? setIsFilled(false)
								: setIsFilled(true);
						}}
						onFocus={() => {
							if (!disabled) {
								setIsFilled(false);
								setIsTriggered(true);
								props.onFocus && props.onFocus();
							}
						}}
						onBlur={() => {
							if (!disabled) {
								setIsTriggered(false);
								props.value === undefined || props.value === ""
									? setIsFilled(false)
									: setIsFilled(true);
								props.onBlur && props.onBlur();
							}
						}}
						selectionColor={props.selectionColor ?? theme.mainThemeColor}
						autoFocus={props.autoFocus ?? false}
						showSoftInputOnFocus={props.showSoftInputOnFocus ?? !disabled}
						keyboardType={props.keyboardType}
						autoCapitalize={props.autoCapitalize ?? "none"}
						autoCorrect={props.autoCorrect ?? false}
						underlineColorAndroid={props.underlineColorAndroid ?? "transparent"}
						clearTextOnFocus={props.clearTextOnFocus ?? false}
					/>
				</Pressable>
				{props.actionIcon ?? showPassword ? (
					<EyeIcon
						{...props.eyeIconProps}
						strokeColor={
							invalidPassword && isFilled
								? invalidPassword
									? FColorTypes.SECONDARY_RED
									: FColorTypes.PRIMARY_BLACK
								: FColorTypes.PRIMARY_BLACK
						}
						onPress={() =>
							props.disabled ? undefined : setShowPassword(false)
						}
					/>
				) : (
					<EyeOffIcon
						{...props.eyeOffIconProps}
						strokeColor={
							invalidPassword && isFilled
								? invalidPassword
									? FColorTypes.SECONDARY_RED
									: FColorTypes.PRIMARY_BLACK
								: FColorTypes.PRIMARY_BLACK
						}
						onPress={() => (props.disabled ? undefined : setShowPassword(true))}
					/>
				)}
			</Pressable>
			{props.customWarningLabel}
		</View>
	);
};
