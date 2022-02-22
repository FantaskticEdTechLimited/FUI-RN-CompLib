export interface FTheme {
	mainThemeColor: string;
	subThemeColor: string;
}

export type FThemeContextProps = {
	theme: FTheme;
	setTheme: (theme: FTheme) => void;
};
