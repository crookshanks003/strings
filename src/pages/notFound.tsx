import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

export function NotFound() {
	return (
		<Flex height="80vh" align="center" justify="center">
			<Box textAlign="center">
				<Heading as="h1" fontSize="16rem" color="gray.700">
					404
				</Heading>
				<Heading as="h1" size="2xl" color="gray.500" mt="-4" fontWeight="medium">
					There's no music here!
				</Heading>
				<Button as={RouterLink} to="/home" mt={8} size="lg" isFullWidth colorScheme="gray">
					Go Home
				</Button>
			</Box>
		</Flex>
	);
}
