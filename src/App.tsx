import { GlobalStyle } from "./styles/global";
import Home from "./pages/Home";
import Header from "./components/Header";
import { ThemeProvider } from "./hooks/theme";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<ThemeProvider>
			<GlobalStyle />

			<Header />

			<Home />

			<Footer />

			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss={false}
				draggable
				pauseOnHover={false}
				theme="light"
			/>
		</ThemeProvider>
	);
}

export default App;
