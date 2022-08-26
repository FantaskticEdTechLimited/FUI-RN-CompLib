import { FColorTypes } from "@fantaskticedtechlimited/fui-rn-colorlib";
import {
	FFontFamilyNames,
	FFontTypes,
	FFontWeight,
} from "@fantaskticedtechlimited/fui-rn-fontlib";
import React from "react";
import { useEffect, useRef, useState } from "react";
import { Pressable, TextInput, View } from "react-native";
import { FUseTheme } from "..";
import { FText } from "../FText";
import { styles } from "./styles";
import { FTextInputFieldProps, FTextInputFieldStyleProps } from "./types";

export const FTextInputField = (props: FTextInputFieldProps) => {
	const [isTriggered, setIsTriggered] = useState<boolean>(false);
	const [isFilled, setIsFilled] = useState<boolean>(false);
	const { theme } = FUseTheme();
	const ref = useRef<TextInput>(null);
	const inputRef = props.ref ?? ref;
	const disabled = props.accessibilityState?.disabled || props.disabled;

	const styleProps: FTextInputFieldStyleProps = {
		props: props,
		isTriggered: isTriggered,
		isFilled: isFilled,
		theme: theme,
		disabled: disabled!,
	};

	const labelTextStyleProps = props.multiline
		? isFilled || isTriggered
			? FFontTypes.FDefaultFonts.Text()
			: FFontTypes.FDefaultFonts.Small_Title({
					fontFamily: FFontFamilyNames.POPPINS,
					fontWeight: FFontWeight.MEDIUM,
			  })
		: isFilled || isTriggered
		? FFontTypes.FDefaultFonts.Text()
		: FFontTypes.FDefaultFonts.Large_Text();

	const inputTextStyleProps = props.multiline
		? FFontTypes.FDefaultFonts.Small_Title({
				fontFamily: FFontFamilyNames.POPPINS,
				fontWeight: FFontWeight.MEDIUM,
		  })
		: FFontTypes.FDefaultFonts.Large_Text();

	const [numberOfLines, setNumberOfLines] = useState<number>();

	const valueLength =
		props.value === undefined || props.value === ""
			? "0"
			: props.value && props.value.length;

	useEffect(() => {
		if (isTriggered && inputRef && inputRef.current) {
			inputRef.current.focus();
		}
	}, [isTriggered]);

	useEffect(() => {
		if (props.multiline) setNumberOfLines(1);
		else setNumberOfLines(props.numberOfLines);
	}, [props.multiline]);

	return (
		<View
			style={[
				styles(styleProps).FTextInputFieldContainer,
				props.containerStyle,
			]}
		>
			<Pressable
				style={[styles(styleProps).FTextInputFieldDiv, props.divStyle]}
				onPress={() => !disabled && setIsTriggered(true)}
				disabled={disabled}
			>
				{(props.label || props.labelProps?.children) && (
					<FText
						font={props.labelProps?.font ?? labelTextStyleProps}
						color={
							props.labelProps?.color ??
							(isFilled && !isTriggered
								? FColorTypes.PRIMARY_BLACK
								: isTriggered
								? theme.mainThemeColor
								: FColorTypes.PRIMARY_GREY)
						}
						children={props.label ?? props.labelProps?.children}
						{...props.labelProps}
					/>
				)}
				{!(
					(props.label || props.labelProps?.children) &&
					!isTriggered &&
					!isFilled
				) && (
					<View
						style={[
							{
								flex: 1,
								display: "flex",
								flexDirection: "row",
								alignItems: "center",
							},
							props.inputAreaStyle,
						]}
					>
						<TextInput
							ref={inputRef}
							{...props}
							style={[
								props.font ?? inputTextStyleProps,
								styles(styleProps).FTextInputFieldInputDiv,
								props.inputStyle,
							]}
							multiline={props.multiline}
							maxLength={props.maxLength}
							placeholder={
								props.label ? undefined : props.placeholder ?? "Title"
							}
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
							autoCapitalize={props.autoCapitalize ?? "none"}
							autoCorrect={props.autoCorrect ?? false}
							underlineColorAndroid={
								props.underlineColorAndroid ?? "transparent"
							}
							clearTextOnFocus={props.clearTextOnFocus ?? false}
							numberOfLines={numberOfLines}
							onContentSizeChange={(e) => {
								if (props.multiline)
									setNumberOfLines(
										e.nativeEvent.contentSize.height /
											(props.font
												? props.font.fontSize!
												: inputTextStyleProps.fontSize!)
									);
							}}
						/>
					</View>
				)}
			</Pressable>
			{props.maxLength && props.maxLength > 0 && (
				<FText
					font={props.wordcountProps?.font ?? FFontTypes.FDefaultFonts.Text()}
					color={
						props.wordcountProps?.color ?? isTriggered
							? theme.mainThemeColor
							: isFilled
							? FColorTypes.PRIMARY_BLACK
							: FColorTypes.PRIMARY_GREY
					}
					style={[{ textAlign: "right" }, props.wordcountProps?.style]}
					{...props.wordcountProps}
				>
					{props.wordcountProps?.children ??
						valueLength + "/" + props.maxLength}
				</FText>
			)}
		</View>
	);
};
