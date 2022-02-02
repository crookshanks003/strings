import { Album } from ".";
import { Artist } from "./artist";

export interface Track {
	album: Album;
	artists: Artist[];
	available_markets: string[];
	disc_number: 1;
	duration_ms: 205164;
	explicit: false;
	external_ids: { isrc: string };
	external_urls: { spotify: string };
	href: string;
	id: string;
	is_local: false;
	name: string;
	popularity: number;
	preview_url?: null;
	track_number: number;
	type: "track";
	uri: string;
}
