import { GlobalStyle } from "./styles/global";
import Home from "./pages/Home";
import Header from "./components/Header";
import { ThemeProvider } from "./hooks/theme";

function App() {
	return (
		<ThemeProvider>
			<GlobalStyle />

			<Header />

			<Home />
		</ThemeProvider>
	);
}

export default App;
