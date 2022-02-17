import { FColorTypes } from "@fantaskticedtechlimited/fui-rn-colorlib";
import { createContext, useContext } from "react";
import { FThemeContextType } from "./types";

export const FDefaultThemeContext: FThemeContextType = {
	theme: {
		mainThemeColor: FColorTypes.DEFAULT_MAIN_THEME,
		subThemeColor: FColorTypes.DEFAULT_SUB_THEME,
	},
	setTheme: () => {},
};

export const FThemeContext =
	createContext<FThemeContextType>(FDefaultThemeContext);

export const FUseTheme = () => useContext(FThemeContext);
