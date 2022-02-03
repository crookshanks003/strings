import { Album } from ".";
import { ArtistReference } from "./artist";

export interface Track {
	album: Album;
	artists: ArtistReference[];
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

export interface CurrentTrack {
	actions: any;
	context: any;
	currently_playing_type: "track" | "episode";
	is_playing: boolean;
	item: {
		album: Album;
		artists: ArtistReference[];
		available_markets: string[];
		disc_number: number;
		duration_ms: number;
		explicit: boolean;
		external_ids: { isrc: string };
		external_urls: { spotify: string };
		href: string;
		id: string;
		is_local: false;
		name: string;
		popularity: number;
		preview_url: string;
		track_number: number;
		type: "track";
		uri: string;
	};
	progress_ms: number;
	timestamp: number;
}
