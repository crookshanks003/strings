import React from "react";
import { Box, Heading, HStack, Image, Link, Spinner, Text } from "@chakra-ui/react";
import { getRecentlyPlayed } from "src/services/api/user";
import { useQuery } from "react-query";

export function LastPlayed() {
	const lastPlayed = useQuery("recently_played", getRecentlyPlayed, {
		refetchInterval: 2*60*1000,
	});

	return (
		<Box mt={10} width={{base: "100%", md:"80%", xl: "50%"}} mx="auto">
			<Heading size="md" color="gray.700">
				Last Played
			</Heading>
			{lastPlayed.isLoading ? (
				<Spinner />
			) : lastPlayed.data ? (
				lastPlayed.data.data.items.slice(0, 3).map((item, index) => (
					<Box bg="gray.100" w="100%" px={4} py={3} mt={3} rounded="md" key={index}>
						<HStack spacing={6}>
							<Image
								boxSize="50px"
								objectFit="cover"
								alt="Album"
								src={item.track.album.images[0].url}
							/>
							<Box>
								<Text fontWeight="semibold" fontSize="lg" color="gray.700">
									<Link href={item.track.external_urls.spotify} isExternal>
										{item.track.name}
									</Link>
								</Text>
								<Text fontSize="sm" color="gray.500">
									<Link
										href={item.track.artists[0].external_urls.spotify}
										isExternal
									>
										{item.track.artists[0].name}
									</Link>
								</Text>
							</Box>
						</HStack>
					</Box>
				))
			) : (
				<Text>Nothing Playing...</Text>
			)}
		</Box>
	);
}
