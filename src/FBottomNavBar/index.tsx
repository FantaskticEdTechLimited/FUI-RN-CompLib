import React from "react";
import { View } from "react-native";
import { FBottomNavBarProps } from "./types";
import { styles } from "./styles";
import { FColorTypes } from "@fantaskticedtechlimited/fui-rn-colorlib";
import { FButton, FButtonTypes } from "..";

export const FBottomNavBar = (props: FBottomNavBarProps) => {
	return (
		<View style={[props.style, styles(props.disabled!).FBottomNavBarContainer]}>
			{props.customChildren ?? (
				<>
					{props.customLeadingComponent ?? (
						<FButton
							type={props.leadingButtonProps?.type ?? FButtonTypes.TEXT}
							label={
								props.leadingButtonLabel ??
								props.leadingButtonProps?.label ??
								"Back"
							}
							labelProps={{
								color:
									props.leadingButtonProps?.labelProps?.color ??
									FColorTypes.PRIMARY_GREY,
							}}
							onPress={
								props.disableLeadingButtonOnly || props.disabled
									? undefined
									: props.leadingButtonProps?.onPress ??
									  props.onLeadingButtonPress
							}
							disabled={
								props.disableLeadingButtonOnly ??
								props.leadingButtonProps?.disabled
							}
							style={
								props.leadingButtonStyle ?? props.leadingButtonProps?.style
							}
							{...props.leadingButtonProps}
						/>
					)}
					{props.customActionComponent ?? (
						<FButton
							type={props.actionButtonProps?.type ?? FButtonTypes.PRIMARY}
							label={
								props.actionButtonLabel ??
								props.actionButtonProps?.label ??
								"Next"
							}
							onPress={
								props.disableActionButtonOnly || props.disabled
									? undefined
									: props.actionButtonProps?.onPress ??
									  props.onActionButtonPress
							}
							disabled={
								props.disableActionButtonOnly ??
								props.actionButtonProps?.disabled
							}
							style={props.actionButtonStyle ?? props.actionButtonProps?.style}
							{...props.actionButtonProps}
						/>
					)}
				</>
			)}
		</View>
	);
};
