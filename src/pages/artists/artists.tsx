import { Box, Heading, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import { useQuery } from "react-query";
import { Loader } from "src/components/loader";
import { getTopArtists } from "src/services/api/user";
import { TabContent } from "./tabContent";

export function Artists() {
	const shortTermData = useQuery("short_term_artists", () => getTopArtists("short_term"), {
		staleTime: 3000 * 60 * 3,
	});
	const mediumTermData = useQuery("medium_term_artists", () => getTopArtists("medium_term"), {
		staleTime: 3000 * 60 * 3,
	});
	const longTermData = useQuery("long_term_artists", () => getTopArtists("long_term"), {
		staleTime: 3000 * 60 * 3,
	});

	return (
		<Box mt={16} width="80%" mx="auto">
			<Heading as="h1" size="xl" color="gray.700">
				Your Top Artists
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
							<Heading as="h1" size="lg" color="red.500">
								Something went wrong!
							</Heading>
						) : (
							<TabContent items={shortTermData.data.data.items} />
						)}
					</TabPanel>
					<TabPanel>
						{mediumTermData.isLoading ? (
							<Loader />
						) : mediumTermData.isError || !mediumTermData.data ? (
							<Heading as="h1" size="lg" color="red.500">
								Something went wrong!
							</Heading>
						) : (
							<TabContent items={mediumTermData.data.data.items} />
						)}
					</TabPanel>
					<TabPanel>
						{longTermData.isLoading ? (
							<Loader />
						) : longTermData.isError || !longTermData.data ? (
							<Heading as="h1" size="lg" color="red.500">
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
