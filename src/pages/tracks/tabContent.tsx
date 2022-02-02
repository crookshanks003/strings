import React from "react";
import { HStack, Table, Tbody, Td, Text, Tr, Image, Th, Link } from "@chakra-ui/react";
import { Track } from "src/types";

export function TabContent({ items }: { items: Track[] }) {
	return (
		<Table variant="simple" size="sm">
			<Tbody>
				{items.map((track, index) => (
					<Tr key={index}>
						<Th width="1">{index + 1}</Th>
						<Td>
							<HStack spacing={6}>
								<Image
									boxSize="75px"
									objectFit="cover"
									src={track.album.images[0].url}
									alt="Album"
								/>
								<Text fontWeight="semibold">
									<Link href={track.external_urls.spotify} isExternal>
										{track.name}
									</Link>
								</Text>
							</HStack>
						</Td>
						<Td>{track.artists[0].name}</Td>
					</Tr>
				))}
			</Tbody>
		</Table>
	);
}
