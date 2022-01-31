import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/navbar";
import { About } from "./pages/about";

import { Callback } from "./pages/callback";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { getRefreshedToken } from "./services/api/auth";
import { setLocalStorage } from "./services/utils";

function App() {
	const [loggedIn, setLoggedIn] = useState(false);

	useEffect(() => {
		const token = localStorage.getItem("access_token");
		const expires_at = localStorage.getItem("expires_at");
		const refresh_token = localStorage.getItem("refresh_token");
		if (!token) {
		} else {
			if (new Date().getTime() >= parseInt(expires_at!)) {
				getRefreshedToken(refresh_token!).then((data) =>
					setLocalStorage({
						expires_in: data.data.expires_in,
						access_token: data.data.access_token,
					})
				);
			}
			setLoggedIn(true);
		}
	}, []);

	return (
		<>
			<Navbar loggedIn={loggedIn} />
			{!loggedIn ? (
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/about" element={<About />} />
					<Route path="/callback" element={<Callback setLoggedIn={setLoggedIn} />} />
					<Route path="*" element={<Navigate to="/login" />} />
				</Routes>
			) : (
				<Routes>
					<Route path="/home" element={<Home />} />
					<Route path="*" element={<Navigate to="/home" />} />
				</Routes>
			)}
		</>
	);
}

export default App;
