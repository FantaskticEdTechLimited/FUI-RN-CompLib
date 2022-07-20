import React from "react";
import { Dimensions, Pressable, View } from "react-native";
import { FBottomSheetProps } from "./types";
import { styles } from "./styles";
import BottomSheet from "reanimated-bottom-sheet";
import { FColorTypes } from "@fantaskticedtechlimited/fui-rn-colorlib";
import { ScrollView } from "react-native-gesture-handler";
import { getStatusBarHeight } from "react-native-status-bar-height";

export const FBottomSheet = (props: FBottomSheetProps) => {
	const { width, height } = Dimensions.get("window");

	return (
		<>
			{props.isVisible && !props.removeOverlay && (
				<Pressable
					onPress={props.onClose}
					style={[
						{
							width: width,
							height: height + getStatusBarHeight(),
							backgroundColor: FColorTypes.PRIMARY_BLACK + "80",
							position: "absolute",
						},
						props.overlayStyle,
					]}
				>
					<View />
				</Pressable>
			)}
			{props.isVisible && (
				<BottomSheet
					snapPoints={props.snapPoints}
					borderRadius={props.borderRadius ?? 8}
					renderContent={() => (
						<View style={[styles.FBottomSheet_Container, props.containerStyle]}>
							{!props.removeIndicator && (
								<View
									style={[
										styles.FBottomSheet_Indicator_Div,
										props.indicatorStyle,
									]}
								/>
							)}
							<ScrollView
								scrollEnabled={props.scrollDisabled ? false : true}
								showsHorizontalScrollIndicator={
									props.showScrollBar ? true : false
								}
								showsVerticalScrollIndicator={
									props.showScrollBar ? true : false
								}
								contentContainerStyle={[
									{
										flexGrow: 1,
										display: "flex",
										flexDirection: "column",
									},
									props.contentStyle,
								]}
								{...props.scrollViewProps}
							>
								{props.children}
							</ScrollView>
						</View>
					)}
					enabledBottomInitialAnimation={
						props.behaviorProps?.props.enabledBottomInitialAnimation ?? true
					}
					onCloseEnd={props.onClose}
					{...props.behaviorProps}
				/>
			)}
		</>
	);
};
