import { Box, Heading, Link, Table, Tbody, Td, Th, Tr } from "@chakra-ui/react";
import React from "react";
import { useQuery } from "react-query";
import { Loader } from "src/components/loader";
import { getRecentlyPlayed } from "src/services/api/user";

export function RecentlyPlayed() {
	const { data, isLoading, isError } = useQuery("recently_played", getRecentlyPlayed);

	if (isLoading) {
		return <Loader />;
	}

	return (
		<Box mt={16} width="80%" mx="auto" mb={8}>
			<Heading as="h1" size="xl" color="gray.700">
				Recently Played
			</Heading>
			{isError || !data ? (
				<Heading as="h1" size="lg" color="red.500">
					Something went wrong!
				</Heading>
			) : (
				<Table variant="simple" mt={6} border="1px" borderColor="gray.100">
					<Tbody>
						{data.data.items.map(({ track }, index) => (
							<Tr key={index}>
								<Th width="1">{index + 1}</Th>
								<Td fontWeight="semibold">
									<Link href={track.external_urls.spotify} isExternal>
										{track.name}
									</Link>
								</Td>
								<Td>
									<Link href={track.artists[0].external_urls.spotify} isExternal>
										{track.artists[0].name}
									</Link>
								</Td>
							</Tr>
						))}
					</Tbody>
				</Table>
			)}
		</Box>
	);
}
