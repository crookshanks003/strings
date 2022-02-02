import React from "react";
import { Box, Flex, Spinner } from "@chakra-ui/react";

export function Loader() {
	return (
		<Box>
			<Flex height="90vh" align="center" justify="center">
				<Spinner size="xl"/>
			</Flex>
		</Box>
	)
}
