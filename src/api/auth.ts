import axios from "axios";

const client = axios.create({baseURL: process.env.REACT_APP_AUTH_URL});
const scope = 'user-read-private user-read-email';


export function getAuthUrl() {
	const url = new URL("https://accounts.spotify.com/authorize");
	url.searchParams.append("response_type", "code");
	url.searchParams.append("client_id", process.env.REACT_APP_CLIENT_ID!);
	url.searchParams.append("scope", scope);
	url.searchParams.append("show_dialog", "true");
	url.searchParams.append("redirect_uri", "http://localhost:3000/callback/");

	return url.href;
}
