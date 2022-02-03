import axios, { AxiosResponse } from "axios";
import { Artist, CurrentTrack, Track } from "src/types";
import { User } from "src/types/user";

type timeRange = "long_term" | "medium_term" | "short_term";

interface QueryReturn<T> {
	href: string;
	items: T[];
	limit: number;
	total: number;
}

const client = axios.create({ baseURL: "https://api.spotify.com/v1/me/" });
const access_token = localStorage.getItem("access_token");
let config = {
	headers: {
		Authorization: `Bearer ${access_token}`,
	},
};

export function getTopTracks(time_range: timeRange) {
	return client.get<any, AxiosResponse<QueryReturn<Track>>>(
		`top/tracks?time_range=${time_range}&limit=50`,
		config
	);
}

export function getTopArtists(time_range: timeRange) {
	return client.get<any, AxiosResponse<QueryReturn<Artist>>>(
		`top/artists?time_range=${time_range}&limit=20`,
		config
	);
}

export function getRecentlyPlayed() {
	return client.get<
		any,
		AxiosResponse<QueryReturn<{ context: any; played_at: string; track: Track }>>
	>("player/recently-played", config);
}

export function getUserProfile() {
	return client.get<any, AxiosResponse<User>>("/", config);
}

export function getCurrentlyPlaying() {
	return client.get<any, AxiosResponse<CurrentTrack>>("player/currently-playing", config);
}
