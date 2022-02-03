import React from "react";
import { SimpleGrid, Image, Box, Text, Link, Tooltip } from "@chakra-ui/react";
import { Artist } from "src/types";

export function TabContent({ items }: { items: Artist[] }) {
	return (
		<SimpleGrid minChildWidth="300px" spacing="8" mt={8}>
			{items.map((artist, index) => (
				<Box mb={2} textAlign="center" key={index}>
					<Link href={artist.external_urls.spotify} isExternal>
							<Image
								mx="auto"
								key={index}
								boxSize="320px"
								objectFit="cover"
								src={artist.images[0].url}
								alt={artist.name}
							/>
						<Tooltip
							label={`${artist.followers.total
								.toString()
								.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} followers`}
							aria-label="A tooltip"
							placement="top"
							hasArrow
						>
						<Text mt={2} fontWeight="semibold">
							{`${index + 1}. ${artist.name}`}
						</Text>
						</Tooltip>
					</Link>
				</Box>
			))}
		</SimpleGrid>
	);
}
