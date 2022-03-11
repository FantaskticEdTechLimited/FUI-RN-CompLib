import React, { useEffect, useRef } from "react";
import {
	Animated,
	Dimensions,
	Easing,
	PanResponder,
	Pressable,
	View,
} from "react-native";
import { FBottomSheetProps } from "./types";
import { styles } from "./styles";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { FRWDScaleCalculator } from "..";

export const FBottomSheet = (props: FBottomSheetProps) => {
	const { width, height: screenHeight } = Dimensions.get("window");

	const useAnimatedBottom = () => {
		const animatedValue = useRef(new Animated.Value(0));

		const bottom = animatedValue.current.interpolate({
			inputRange: [0, 1],
			outputRange: [-screenHeight, 0],
		});

		useEffect(() => {
			if (props.isVisible) {
				Animated.timing(animatedValue.current, {
					toValue: 1,
					duration: 300,
					// Accelerate then decelerate - https://cubic-bezier.com/#.28,0,.63,1
					easing: Easing.bezier(0.28, 0, 0.63, 1),
					useNativeDriver: false, // 'bottom' is not supported by native animated module
				}).start();
			} else {
				Animated.timing(animatedValue.current, {
					toValue: 0,
					duration: 150,
					// Accelerate - https://easings.net/#easeInCubic
					easing: Easing.cubic,
					useNativeDriver: false,
				}).start();
			}
		}, [props.isVisible]);

		return bottom;
	};

	const bottom = useAnimatedBottom();
	const bottomSheetHeight = 0.64 * screenHeight;
	const pan = useRef(new Animated.ValueXY()).current;
	const slideDownRangeToClose =
		(screenHeight - FRWDScaleCalculator(16)) * (0.8 - 0.36);

	const panResponder = useRef(
		PanResponder.create({
			onMoveShouldSetPanResponder: (_, gestureState) => {
				//return true if user is swiping, return false if not swiping
				return !(gestureState.dx === 0 && gestureState.dy === 0);
			},
			onPanResponderGrant: () => {
				pan.setOffset({
					x: 0,
					y: 0,
				});
			},
			onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
				useNativeDriver: false,
			}),
			onPanResponderRelease: () => {
				const slideDownToClose =
					parseFloat(JSON.stringify(pan.y)) >= slideDownRangeToClose;
				if (slideDownToClose) props.onClose && props.onClose();
				Animated.spring(pan, {
					toValue: {
						x: 0,
						y: slideDownToClose
							? bottomSheetHeight + FRWDScaleCalculator(16)
							: 0,
					},
					useNativeDriver: false,
				}).start();
			},
		})
	).current;

	useEffect(() => {
		if (props.isVisible) {
			// reset bottom sheet position
			pan.setValue({ x: 0, y: 0 });
		}
	}, [props.isVisible]);

	return (
		<>
			{props.isVisible && (
				<Pressable
					onPress={props.onClose}
					style={[
						styles.FBottomSheet_Overlay_Wrapper,
						{
							width: width,
							height: screenHeight,
							marginTop: getStatusBarHeight(),
						},
						props.overlayStyle,
					]}
				>
					<View />
				</Pressable>
			)}
			<Animated.View
				style={[
					styles.FBottomSheet_Container,
					{
						width: width - FRWDScaleCalculator(32),
						height: bottomSheetHeight,
						bottom: bottom,
						transform: [{ translateY: pan.y }],
					},
					props.containerStyle,
				]}
				{...panResponder.panHandlers}
			>
				<View
					style={[styles.FBottomSheet_Indicator_Div, props.indicatorStyle]}
				/>
				{props.children}
			</Animated.View>
		</>
	);
};
