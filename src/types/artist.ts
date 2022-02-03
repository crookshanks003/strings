export interface Artist {
	external_urls: { spotify: string };
	followers: { href: any; total: number };
	genres: string[];
	href: string;
	id: string;
	images: {
		height: number;
		url: string;
		width: number;
	}[];
	name: string;
	popularity: number;
	type: "artist";
	uri: string;
}

export interface ArtistReference {
	external_urls: { spotify: string };
	href: string;
	id: string;
	name: string;
	type: string;
	uri: string;
}
