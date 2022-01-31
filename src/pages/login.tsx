import { getAuthUrl } from "../api/auth";
import React from "react";
import { Link, Button, Text, Box, Heading, Center, Image } from "@chakra-ui/react";
import { BiLinkExternal } from "react-icons/bi";
import bg from "../images/headerbg.jpg";

export function Login() {
	const url = getAuthUrl();
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
				<Center>Strings</Center>
			</Heading>
			<Box mt={10} mx="auto">
				<Text fontSize="xl" align="center" fontWeight="medium">
					View your most listened tracks, artists and genres and switch between 3 different time periods.<br/>
					Login with your spotify account, to see your track or artist ranking!
				</Text>
				<Center><Button
					_hover={{ color: "gray.700", background: "#fff" }}
					variant="outline"
					color="#fff"
					borderColor="#fff"
					borderWidth={2}
					py={6}
					mt={10}
					rightIcon={<BiLinkExternal />}
				>
					<Link href={url} isExternal>
						Login with spotify
					</Link>
				</Button></Center>
			</Box>
		</Box>
	);
}
