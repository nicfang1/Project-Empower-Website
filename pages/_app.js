import "../styles/globals.css";
import "../components/Navbar";
import Navbar from "../components/Navbar";
import { ChakraProvider } from "@chakra-ui/provider";
import theme from "../theme/theme";
import { Box, Center } from "@chakra-ui/react";
import Header from "../components/Header";
import Banner from "../components/Banner";

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Box position="relative">
				{/* <Navbar />
				<Center
					bgImage="url('/PEComm.png')"
					bgPosition="center"
					backgroundRepeat="no-repeat"
					color="white"
					position="absolute"
					minH={700}
					top={0}
					bottom={0}
					righ={0}
					left={0}
					width="100%"
					mx="auto"
					bgColor="rgba(0,0,0,.3)"
					zIndex={98}
					overflow="hidden"
				>
					<h1>Project Empower</h1>
					<p>For the Caregiver</p>
				</Center> */}
				<Navbar />
				<Banner />
				<Component {...pageProps} />
			</Box>
		</ChakraProvider>
	);
}

export default MyApp;
