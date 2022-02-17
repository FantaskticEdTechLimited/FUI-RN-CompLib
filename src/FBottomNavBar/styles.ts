import { StyleSheet } from "react-native";

export const styles = (disabled: boolean) =>
	StyleSheet.create({
		FBottomNavBarContainer: {
			display: "flex",
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
			opacity: disabled ? 0.4 : 1,
		}, 
	});
