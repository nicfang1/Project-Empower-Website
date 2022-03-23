import { Box } from "@chakra-ui/react";
import React from "react";

const DateTimeDisplay = ({ value, type, isDanger }) => {
	return (
		<Box
			className={isDanger ? "countdown danger" : "countdown"}
			mx={5}
			fontSize="1rem"
			textAlign="center"
		>
			<p>{value}</p>
			<span>{type}</span>
		</Box>
	);
};

export default DateTimeDisplay;
