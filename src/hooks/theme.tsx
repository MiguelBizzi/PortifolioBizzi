import React, { createContext, useContext, useEffect, useState } from "react";
import { ThemeProvider as ThemeProviderStyled } from "styled-components";
import { defaultTheme } from "../styles/themes/default";
import { darkTheme } from "../styles/themes/darkTheme";
import { THEME_STORAGE_KEY } from "../storage/storageKeys";

interface ThemeStateProps {
	theme: any;
	title: string;
}

interface ThemeContextData {
	toggleTheme: () => void;
	selectedTheme: string;
}

type Props = {
	children?: React.ReactNode;
};

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

const ThemeProvider: React.FC<Props> = ({ children }) => {
	const [theme, setTheme] = useState<ThemeStateProps>({ theme: defaultTheme, title: "light" } as ThemeStateProps);

	const toggleTheme = () => {
		let theme_temp = {} as ThemeStateProps;

		if (theme.title === "light") {
			theme_temp = { title: "dark", theme: darkTheme };
		} else {
			theme_temp = { title: "light", theme: defaultTheme };
		}

		setTheme(theme_temp);
		localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(theme_temp.title));
	};

	useEffect(() => {
		const storaged_theme = localStorage.getItem(THEME_STORAGE_KEY);

		if (storaged_theme) {
			if (JSON.parse(storaged_theme) === "light") {
				setTheme({ title: "light", theme: defaultTheme });
			} else {
				setTheme({ title: "dark", theme: darkTheme });
			}
		}
	}, []);

	return (
		<ThemeContext.Provider value={{ toggleTheme, selectedTheme: theme.title }}>
			<ThemeProviderStyled theme={theme.theme}>{children}</ThemeProviderStyled>
		</ThemeContext.Provider>
	);
};

function useThemeContext(): ThemeContextData {
	const context = useContext(ThemeContext);

	if (!context) {
		throw new Error("useThemeContext must be used within an ThemeProvider");
	}

	return context as ThemeContextData;
}

export { ThemeProvider, useThemeContext };
