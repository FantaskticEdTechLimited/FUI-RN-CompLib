import React from "react";
import { Pressable, useWindowDimensions, View } from "react-native";
import { FBottomNavBar, FRWDScaleCalculator } from "..";
import { styles } from "./styles";
import { FPopUpProps } from "./types";
import { getStatusBarHeight } from "react-native-status-bar-height";

export const FPopUp = (props: FPopUpProps) => {
	const { width: screenWidth, height: screenHeight } = useWindowDimensions();
	
	return (
		<>
			{props.isVisible && (
				<Pressable
					style={[
						styles.FPopUp_Overlay_Wrapper,
						{
							width: screenWidth,
							height: screenHeight + getStatusBarHeight(),
						},
						props.overlayStyle,
					]}
					onPress={props.onClose}
				>
					<View />
				</Pressable>
			)}
			{props.isVisible && (
				<View style={[styles.FPopUp_Container, props.containerStyle]}>
					<View style={[styles.FPopUp_Content_Div, props.contentDivStyle]}>
						{props.children}
					</View>
					{!props.disableBottomNavBar && (
						<FBottomNavBar
							style={[
								{ marginTop: FRWDScaleCalculator(16) },
								props.bottomNavBarStyle ?? props.bottomNavBarProps?.style,
							]}
							{...props.bottomNavBarProps}
						/>
					)}
				</View>
			)}
		</>
	);
};
