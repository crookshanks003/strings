import { Link, Button, Text, Box, Heading, Center, Image, HStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import React from "react";
import { useQuery } from "react-query";
import { Loader } from "src/components/loader";
import { getUserProfile } from "src/services/api/user";
import bg from "../images/headerbg.jpg";

export function Home() {
	const { data, isLoading, isError } = useQuery("profile", getUserProfile);

	if (isLoading) {
		return <Loader />;
	}

	return (
		<Box
			mx="auto"
			height="92vh"
			color="#fff"
			bgImage={bg}
			bgPosition="bottom"
			pt={12}
			bgSize="cover"
			bgRepeat="no-repeat"
		>
			<Heading as="h1" fontSize="8xl" color="gray.700">
				<Center>
					<Text color="white">Welcome,&nbsp;</Text>
					{data?.data.display_name}
				</Center>
			</Heading>
			<Box mt={8} mx="auto">
				<Text fontSize="xl" align="center" fontWeight="medium">
					View your most listened tracks, artists and genres and switch
					<br />
					between 3 different time periods.
				</Text>
			</Box>
			<HStack spacing={14} mt={12} justify="center" color="gray.700">
				<Link
					as={RouterLink}
					to="/tracks"
					_hover={{ color: "white", textDecoration: "underline" }}
					fontSize="xl"
					fontWeight="semibold"
				>
					View Tracks
				</Link>
				<Link
					as={RouterLink}
					to="/artists"
					_hover={{ color: "white", textDecoration: "underline" }}
					fontSize="xl"
					fontWeight="semibold"
				>
					View Artists
				</Link>
				<Link
					as={RouterLink}
					to="/recent"
					_hover={{ color: "white", textDecoration: "underline" }}
					fontSize="xl"
					fontWeight="semibold"
				>
					View Recent
				</Link>
			</HStack>
		</Box>
	);
}
