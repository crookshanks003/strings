import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export function Callback() {
	const [params] = useSearchParams();
	const navigate = useNavigate();
	useEffect(() => {
		if (params.get("code")) {
			navigate("/home");
		} else {
			navigate("/login");
		}
	});
	return null;
}
