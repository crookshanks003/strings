import { Box, Heading, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import { useQuery } from "react-query";
import { Loader } from "src/components/loader";
import { getTopTracks } from "src/services/api/user";
import { TabContent } from "./tabContent";

export function Tracks() {
	const shortTermData = useQuery("short_term_tracks", () => getTopTracks("short_term"), {
		staleTime: 3000 * 60 * 3,
	});
	const longTermData = useQuery("long_term_tracks", () => getTopTracks("long_term"), {
		staleTime: 3000 * 60 * 3,
	});
	const mediumTermData = useQuery("medium_term_tracks", () => getTopTracks("medium_term"), {
		staleTime: 3000 * 60 * 3,
	});

	return (
		<Box mt={16} width="80%" mx="auto" mb={8}>
			<Heading as="h1" size="xl" color="gray.700">
				Your Top Tracks
			</Heading>
			<Tabs isLazy isFitted variant="enclosed" mt={6}>
				<TabList>
					<Tab>Last 4 weeks</Tab>
					<Tab>Last 6 months</Tab>
					<Tab>All time</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						{shortTermData.isLoading ? (
							<Loader />
						) : shortTermData.isError || !shortTermData.data ? (
							<Heading size="lg" color="red.500">
								Something went wrong!
							</Heading>
						) : (
							<TabContent items={shortTermData.data.data.items} />
						)}
					</TabPanel><TabPanel>
						{mediumTermData.isLoading ? (
							<Loader />
						) : mediumTermData.isError || !mediumTermData.data ? (
							<Heading size="lg" color="red.500">
								Something went wrong!
							</Heading>
						) : (
							<TabContent items={mediumTermData.data.data.items} />
						)}
					</TabPanel><TabPanel>
						{longTermData.isLoading ? (
							<Loader />
						) : longTermData.isError || !longTermData.data ? (
							<Heading size="lg" color="red.500">
								Something went wrong!
							</Heading>
						) : (
							<TabContent items={longTermData.data.data.items} />
						)}
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Box>
	);
}
