import { styles } from "./styles";
import { FEmailInputFieldProps, FEmailInputFieldStyleProps } from "./types";
import React, { useEffect, useRef, useState } from "react";
import { Pressable, TextInput, View } from "react-native";
import { FFontTypes } from "@fantaskticedtechlimited/fui-rn-fontlib";
import { FColorTypes } from "@fantaskticedtechlimited/fui-rn-colorlib";
import { FEmailInputFieldIcon } from "./Icon";
import { FRWDScaleCalculator, FText, FUseTheme } from "..";

export const FEmailInputField = (props: FEmailInputFieldProps) => {
	const [isTriggered, setIsTriggered] = useState<boolean>(false);
	const [isFilled, setIsFilled] = useState<boolean>(false);
	const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
	const { theme } = FUseTheme();
	const disabled = props.disabled;
	const ref = useRef<TextInput>(null);
	const inputRef = props.ref ?? ref;
	const styleProps: FEmailInputFieldStyleProps = {
		disabled: disabled!,
		isTriggered: isTriggered,
		isFilled: isFilled,
		autoValidateEmail: props.autoValidateEmail!,
		isValid: isValidEmail,
		theme: theme,
	};
	const warningLabelProps = FFontTypes.FDefaultFonts.Text();

	const handleEmailValidation = (email: string | undefined) => {
		if (email) {
			const regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
			const isValid = regx.test(email);
			setIsValidEmail(isValid);
			props.renderAutoValidationResult &&
				props.renderAutoValidationResult(isValid);
		}
	};

	const handleEmailInput = (value: string) => {
		if (!disabled) {
			props.onChangeText && props.onChangeText(value);
		}
	};

	useEffect(() => {
		if (isTriggered && inputRef && inputRef.current) {
			inputRef.current.focus();
		}
	}, [isTriggered]);

	return (
		<View
			style={[
				styles(styleProps).FEmailInputFieldContainer,
				props.containerStyle,
			]}
		>
			<Pressable
				style={[styles(styleProps).FEmailInputFieldDiv, props.divStyle]}
				onPress={() => !disabled && setIsTriggered(true)}
				disabled={disabled}
			>
				<FEmailInputFieldIcon
					strokeColor={
						isTriggered
							? theme.mainThemeColor
							: props.autoValidateEmail && isFilled
							? !isValidEmail
								? FColorTypes.SECONDARY_RED
								: FColorTypes.PRIMARY_BLACK
							: FColorTypes.PRIMARY_BLACK
					}
					style={{ marginRight: FRWDScaleCalculator(8) }}
					iconProps={props.emailIconProps}
				/>
				<TextInput
					ref={inputRef}
					allowFontScaling={props.allowFontScaling ?? false}
					style={[
						props.font ?? FFontTypes.FDefaultFonts.Large_Text(),
						{
							color: FColorTypes.PRIMARY_BLACK,
							flex: 1,
							height: "100%",
						},
						props.inputStyle,
					]}
					placeholder={props.placeholder ?? "Your Email"}
					placeholderTextColor={
						props.placeholderTextColor ?? FColorTypes.PRIMARY_GREY
					}
					value={props.value}
					onChangeText={handleEmailInput}
					onSubmitEditing={() => {
						setIsTriggered(false);
						props.value === undefined || props.value === ""
							? setIsFilled(false)
							: setIsFilled(true);
						handleEmailValidation(props.value);
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
							handleEmailValidation(props.value);
							props.onBlur && props.onBlur();
						}
					}}
					selectionColor={props.selectionColor ?? theme.mainThemeColor}
					autoFocus={props.autoFocus ?? false}
					showSoftInputOnFocus={props.showSoftInputOnFocus ?? !disabled}
					keyboardType={props.keyboardType ?? "email-address"}
					autoCapitalize={props.autoCapitalize ?? "none"}
					autoCorrect={props.autoCorrect ?? false}
					underlineColorAndroid={props.underlineColorAndroid ?? "transparent"}
					clearTextOnFocus={props.clearTextOnFocus ?? false}
				/>
			</Pressable>
			{(!disabled &&
				props.customWarningLabel &&
				props.customWarningLabel(
					props.autoValidateEmail ? isValidEmail : undefined
				)) ??
				(!disabled && isFilled && !isValidEmail && props.autoValidateEmail && (
					<FText
						font={props.warningLabelProps?.font ?? warningLabelProps}
						color={props.warningLabelProps?.color ?? FColorTypes.SECONDARY_RED}
						style={[
							{ marginTop: FRWDScaleCalculator(4) },
							props.warningLabelProps?.style,
						]}
						children={
							props.warningLabelProps?.children ??
							"Error: Input email is not valid."
						}
						{...props.warningLabelProps}
					/>
				))}
		</View>
	);
};
