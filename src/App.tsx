import { GlobalStyle } from "./styles/global";
import Home from "./pages/Home";
import Header from "./components/Header";
import { ThemeProvider } from "./hooks/theme";
import Footer from "./components/Footer";

function App() {
	return (
		<ThemeProvider>
			<GlobalStyle />

			<Header />

			<Home />

			<Footer />
		</ThemeProvider>
	);
}

export default App;
