import "../styles/globals.css";
import "../components/Navbar";
import Navbar from "../components/Navbar";
import { ChakraProvider } from "@chakra-ui/provider";
import theme from "../theme/theme";

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Navbar />
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
