import axios, { AxiosResponse } from "axios";

type tokenResponse = {
	access_token: string;
	expires_in: number;
	refresh_token?: string;
	scope: string;
	token_type: string;
};

const scope = "user-top-read user-read-private user-read-recently-played user-library-read user-read-currently-playing";
const redirect_uri = process.env.REACT_APP_REDIRECT_URI;

export function getAuthUrl() {
	const url = new URL("https://accounts.spotify.com/authorize");
	url.searchParams.append("response_type", "code");
	url.searchParams.append("client_id", process.env.REACT_APP_CLIENT_ID!);
	url.searchParams.append("scope", scope);
	url.searchParams.append("show_dialog", "true");
	url.searchParams.append("redirect_uri", redirect_uri!);

	return url.href;
}

export function getAccessToken(code: string) {
	const config = {
		headers: {
			Authorization:
				"Basic " +
				btoa(`${process.env.REACT_APP_CLIENT_ID}:${process.env.REACT_APP_CLIENT_SECRET}`),
			"Content-Type": "application/x-www-form-urlencoded",
		},
	};

	const params = new URLSearchParams();
	params.append("grant_type", "authorization_code");
	params.append("code", code);
	params.append("redirect_uri", redirect_uri!);

	return axios.post<any, AxiosResponse<tokenResponse>>(
		"https://accounts.spotify.com/api/token",
		params,
		config
	);
}

export function getRefreshedToken(refresh_token: string) {
	const config = {
		headers: {
			Authorization:
				"Basic " +
				btoa(`${process.env.REACT_APP_CLIENT_ID}:${process.env.REACT_APP_CLIENT_SECRET}`),
			"Content-Type": "application/x-www-form-urlencoded",
		},
	};

	const params = new URLSearchParams();
	params.append("grant_type", "refresh_token");
	params.append("refresh_token", refresh_token);

	return axios.post<any, AxiosResponse<tokenResponse>>(
		"https://accounts.spotify.com/api/token",
		params,
		config
	);
}
