export function setLocalStorage({
	access_token,
	refresh_token,
	expires_in,
}: {
	access_token: string;
	refresh_token?: string;
	expires_in: number;
}) {
	const date = new Date();
	localStorage.setItem("access_token", access_token);
	if(refresh_token) localStorage.setItem("refresh_token", refresh_token);
	localStorage.setItem("expires_at", date.setSeconds(date.getSeconds() + expires_in).toString());
}

export function clearLocalStorage(){
	localStorage.clear();
}
