import { ArtistReference } from "./artist";

export interface Album {
	album_type: string;
	artists: ArtistReference[];
	available_markets: string[];
	external_urls: { spotify: string };
	href: string;
	id: string;
	images: {
		eight: number;
		url: string;
		width: number;
	}[];
	name: string;
	release_date: string;
	release_date_precision: string;
	total_tracks: number;
	type: string;
	uri: string;
}
