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
			? FFontTypes.FDefaultFonts.Text({
					lineHeight: 16,
			  })
			: FFontTypes.FDefaultFonts.Small_Title({
					fontFamily: FFontFamilyNames.POPPINS,
					fontWeight: FFontWeight.MEDIUM,
			  })
		: isFilled || isTriggered
		? FFontTypes.FDefaultFonts.Text({
				lineHeight: 16,
		  })
		: FFontTypes.FDefaultFonts.Large_Text({
				lineHeight: 20,
		  });

	const inputTextStyleProps = props.multiline
		? FFontTypes.FDefaultFonts.Small_Title({
				fontFamily: FFontFamilyNames.POPPINS,
				fontWeight: FFontWeight.MEDIUM,
		  })
		: FFontTypes.FDefaultFonts.Large_Text({
				lineHeight: 20,
		  });

	const [numberOfLines, setNumberOfLines] = useState<number>();

	const valueLength =
		props.value === undefined || props.value === ""
			? "0"
			: props.value && props.value.length;

	useEffect(() => {
		if (isTriggered && ref.current) {
			ref.current.focus();
			setIsFilled(false);
		}
	}, [isTriggered]);

	useEffect(() => {
		props.renderInputFieldState &&
			props.renderInputFieldState({
				isTriggered: isTriggered,
				isFilled: isFilled,
			});
	}, [isTriggered, isFilled]);

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
					<TextInput
						ref={ref}
						{...props}
						style={[
							props.font ?? inputTextStyleProps,
							styles(styleProps).FTextInputFieldInputDiv,
							props.style, //  input area style
						]}
						multiline={props.multiline}
						maxLength={props.maxLength}
						placeholder={props.label ? undefined : props.placeholder ?? "Title"}
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
