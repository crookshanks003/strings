import React from "react";
import { Box, Heading, HStack, Image, Link, Spacer, Spinner, Text } from "@chakra-ui/react";
import { getCurrentlyPlaying } from "src/services/api/user";
import { useQuery } from "react-query";
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";

export function CurrentlyPlaying() {
	const currentlyPlaying = useQuery("currently_playing", getCurrentlyPlaying, {
		refetchInterval: 5000,
	});

	return (
		<Box mt={12} width={{base: "100%", md:"80%", xl: "50%"}} mx="auto">
			<Heading size="md" color="gray.700">
				Currently Playing...
			</Heading>
			<Box
				bg={currentlyPlaying.data?.data.is_playing ? "green.100" : "gray.100"}
				w="100%"
				px={4}
				py={3}
				mt={3}
				rounded="md"
			>
				{currentlyPlaying.isLoading ? (
					<Spinner />
				) : currentlyPlaying.data ? (
					<HStack spacing={6}>
						<Image
							boxSize="50px"
							objectFit="cover"
							alt="Album"
							src={currentlyPlaying.data.data.item.album.images[0].url}
						/>
						<Box>
							<Text fontWeight="semibold" fontSize="lg" color="gray.700">
								<Link
									href={currentlyPlaying.data.data.item.external_urls.spotify}
									isExternal
								>
									{currentlyPlaying.data.data.item.name}
								</Link>
							</Text>
							<Text fontSize="sm" color="gray.500">
								<Link
									href={
										currentlyPlaying.data.data.item.artists[0].external_urls
											.spotify
									}
									isExternal
								>
									{currentlyPlaying.data.data.item.artists[0].name}
								</Link>
							</Text>
						</Box>
						<Spacer />
						{currentlyPlaying.data.data.is_playing ? (
							<BsFillPlayFill />
						) : (
							<BsFillPauseFill />
						)}
						<Text>{`${Math.ceil(currentlyPlaying.data.data.progress_ms / 1000 / 60)}:${
							Math.floor((currentlyPlaying.data.data.progress_ms / 1000) % 60) < 10
								? "0" +
								  Math.floor((currentlyPlaying.data.data.progress_ms / 1000) % 60)
								: Math.floor((currentlyPlaying.data.data.progress_ms / 1000) % 60)
						}`}</Text>
					</HStack>
				) : (
					<Text>Nothings playing...</Text>
				)}
			</Box>
		</Box>
	);
}
