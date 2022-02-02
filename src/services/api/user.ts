import axios, { AxiosResponse } from "axios";
import { Track } from "src/types";

type timeRange = "long_term" | "medium_term" | "short_term";

interface TracksReturn {
	href: string;
	items: Track[];
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
	return client.get<any, AxiosResponse<TracksReturn>>(`/tracks?time_range=${time_range}&limit=50`, config);
}
