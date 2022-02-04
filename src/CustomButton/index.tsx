import * as React from "react";
import { View, Button } from "react-native"; 
import { containerStyle } from "./styles";
import { defaultProps, Iprops } from "./types";


export const CustomButton = (props: Iprops) => {
	const handlePress = () => {
		props.onClick ? props.onClick() : null;
	};

	const title = props.text || "Native Button";

	return (
		<View style={[containerStyle.viewContainer, props.customContainerClass]}>
			{props.children ? (
				props.children
			) : (
				<Button title={title} onPress={handlePress} color={props.buttonColor} />
			)}
		</View>
	);
}; 

CustomButton.defaultProps = defaultProps