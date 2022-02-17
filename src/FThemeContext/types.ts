export interface FTheme {
	mainThemeColor: string;
	subThemeColor: string;
}

export type FThemeContextType = {
	theme: FTheme;
	setTheme: (theme: FTheme) => void;
};
