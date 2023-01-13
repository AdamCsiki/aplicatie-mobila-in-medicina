import { createContext, useState, useEffect, useContext } from "react";
import { useColorScheme } from "react-native";
import Colors from "../constants/Colors";

export const ThemeContext = createContext({
	dark: true,
	colors: Colors.light,
	setScheme: (theme: string) => {},
});

export function ThemeProvider(props: any) {
	const colorScheme = useColorScheme(); // "light" OR "dark" OR "null"
	const [isDark, setIsDark] = useState(colorScheme === "dark");

	useEffect(() => {
		setIsDark(colorScheme == "dark");
	}, [colorScheme]);

	const defaultTheme = {
		dark: isDark,
		colors: isDark ? Colors.dark : Colors.light,
		setScheme: (scheme?: string) => setIsDark(scheme === "dark"), // has "?" cause it is possible for it to be be null
	};

	return (
		<ThemeContext.Provider value={defaultTheme}>
			{props.children}
		</ThemeContext.Provider>
	);
}

// Custom hook for accesing all of the values

export const useTheme = () => useContext(ThemeContext);

export const themeColors = () => useContext(ThemeContext).colors;
