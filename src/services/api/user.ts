import axios, { AxiosResponse } from "axios";
import { Artist, Track } from "src/types";

type timeRange = "long_term" | "medium_term" | "short_term";

interface QueryReturn<T> {
	href: string;
	items: T[];
	limit: number;
	total: number;
}

const client = axios.create({ baseURL: "https://api.spotify.com/v1/me/top" });
const access_token = localStorage.getItem("access_token");

export function getTopTracks(time_range: timeRange) {
	let config = {
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	};
	return client.get<any, AxiosResponse<QueryReturn<Track>>>(
		`/tracks?time_range=${time_range}&limit=50`,
		config
	);
}

export function getTopArtists(time_range: timeRange) {
	let config = {
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	};
	return client.get<any, AxiosResponse<QueryReturn<Artist>>>(
		`/artists?time_range=${time_range}&limit=20`,
		config
	);
}
