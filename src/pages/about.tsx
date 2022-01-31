import { Box, Heading } from "@chakra-ui/react";
import React from "react";

export function About() {
	return (
		<Box mt={10} width="80%" mx="auto">
			<Heading as="h1" size="2xl" color="gray.700">
				About
			</Heading>
		</Box>
	);
}
