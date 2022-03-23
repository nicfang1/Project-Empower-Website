import { Box, Image } from "@chakra-ui/react";
import React from "react";

const Banner = () => {
	return (
		<Box position="relative" overflow="hidden" width="100%" minH={700}>
			<Box
				position="absolute"
				top={0}
				right={0}
				bottom={0}
				left={0}
				backgroundColor="rgba(0,0,0,.3)"
				zIndex={99}
			/>
			<Box position="absolute" top={0} right={0} bottom={0} left={0}>
				<Image src="/PEComm.png" alt="PE Comm" />
			</Box>
			<Box
				zIndex={100}
				width="100%"
				maxW={965}
				margin="0 auto"
				p={32}
				textAlign="center"
			>
				hello
			</Box>
		</Box>
	);
};

export default Banner;
