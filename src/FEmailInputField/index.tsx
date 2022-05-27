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
	const ref = useRef<TextInput>(null);
	const disabled = props.disabled;
	const styleProps: FEmailInputFieldStyleProps = {
		disabled: disabled!,
		isTriggered: isTriggered,
		isFilled: isFilled,
		autoValidateEmail: props.autoValidateEmail!,
		isValid: isValidEmail,
		theme: theme,
	};
	const warningLabelProps = FFontTypes.FDefaultFonts.Text();

	useEffect(() => {
		if (isTriggered && ref.current) {
			ref.current.focus();
			setIsFilled(false);
		}
	}, [isTriggered]);

	const handleEmailValidation = (email: string) => {
		const regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		const isValid = regx.test(email);
		setIsValidEmail(isValid);
		props.renderAutoValidationResult &&
			props.renderAutoValidationResult(isValid);
	};

	const handleEmailInput = (value: string) => {
		if (!disabled) {
			props.onChangeText && props.onChangeText(value);
			if (props.autoValidateEmail) {
				handleEmailValidation(value);
			}
		}
	};

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
					ref={ref}
					{...props}
					style={[
						props.font ?? FFontTypes.FDefaultFonts.Large_Text(),
						{
							color: FColorTypes.PRIMARY_BLACK,
							flex: 1,
						},
						props.style, //  input area style
					]}
					showSoftInputOnFocus={!disabled}
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
						ref.current?.focus();
					}}
					onFocus={() => !disabled && setIsTriggered(true)}
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
			</Pressable>
			{(!disabled &&
				props.renderCustomWarningLabel &&
				props.renderCustomWarningLabel(
					props.autoValidateEmail ? isValidEmail : undefined
				)) ??
				(!disabled && isFilled && !isValidEmail && props.autoValidateEmail && (
					<FText
						font={warningLabelProps}
						color={FColorTypes.SECONDARY_RED}
						style={{ marginTop: FRWDScaleCalculator(4) }}
						children="Error: Input email is not valid."
					/>
				))}
		</View>
	);
};
