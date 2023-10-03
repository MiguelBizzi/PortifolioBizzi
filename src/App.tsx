import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { darkTheme } from "./styles/themes/darkTheme";

import { GlobalStyle } from "./styles/global";
import Home from "./pages/Home";
import { useState } from "react";
import Header from "./components/Header";

interface ThemeState {
	title: string;
	theme: any;
}

function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyle />

			<Header />

			<Home />
		</ThemeProvider>
	);
}

export default App;
