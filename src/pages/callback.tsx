import { SetStateAction, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getAccessToken } from "src/services/api/auth";
import { setLocalStorage } from "src/services/utils";

export function Callback({
	setLoggedIn,
}: {
	setLoggedIn: React.Dispatch<SetStateAction<boolean>>;
}) {
	const [params] = useSearchParams();
	const navigate = useNavigate();
	useEffect(() => {
		const code = params.get("code");
		if (code) {
			getAccessToken(code)
				.then((data) => {
					setLoggedIn(true);
					setLocalStorage({
						expires_in: data.data.expires_in,
						access_token: data.data.access_token,
						refresh_token: data.data.refresh_token,
					});
					navigate("/home");
				})
				.catch(() => {
					navigate("/login");
				});
		} else {
			navigate("/login");
		}
	});
	return null;
}
