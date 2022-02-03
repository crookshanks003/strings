import { Box, Button, Flex, Heading, HStack, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineReload } from "react-icons/ai";
import { useQuery } from "react-query";
import { Loader } from "src/components/loader";
import { CurrentlyPlaying } from "./currentlyPlaying";
import { getUserProfile } from "src/services/api/user";
import profileImage from "../../images/default-profile-picture.png";
import { LastPlayed } from "./lastPlayed";
import { BiLinkExternal, BiLogOut } from "react-icons/bi";
import { clearLocalStorage } from "src/services/utils";
import { useNavigate } from "react-router-dom";

export function Profile() {
	const { data, isLoading, isError } = useQuery("profile", getUserProfile);

	const navigate = useNavigate();

	if (isLoading) {
		return <Loader />;
	}
	if (isError || !data) {
		return (
			<HStack mt={16} width="80%" mx="auto" mb={8} spacing={2}>
				<Text color="red" fontSize="xl">
					...Something went wrong!
				</Text>
				<Button size="sm" colorScheme="red" onClick={() => window.location.reload()}>
					<AiOutlineReload />
				</Button>
			</HStack>
		);
	}

	const image = data.data.images.length !== 0 ? data.data.images[0].url : profileImage;

	return (
		<Box mt={12} width={{ base: "90%", lg: "80%" }} mx="auto" mb={8}>
			<Box textAlign="center">
				<Image
					mx="auto"
					boxSize="200"
					borderRadius="full"
					objectFit="cover"
					src={image}
					alt="profile"
				/>
				<Heading size="xl" mt={4} color="gray.700">
					{data.data.display_name}
				</Heading>
				<Text>{data.data.email}</Text>
			</Box>
			<CurrentlyPlaying />
			<LastPlayed />
			<Flex width={{ base: "100%", md: "80%", xl: "50%" }} justify="end" mx="auto" mt={6}>
				<Button colorScheme="green" rightIcon={<BiLinkExternal />} size="md" me={4}>
					<Link href={data.data.external_urls.spotify} isExternal>
						Spotify
					</Link>
				</Button>
				<Button
					size="md"
					colorScheme="red"
					rightIcon={<BiLogOut />}
					onClick={() => {
						clearLocalStorage();
						navigate("/home");
					}}
				>
					Logout
				</Button>
			</Flex>
		</Box>
	);
}
