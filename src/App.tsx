import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "react-query";
import {Box} from "@chakra-ui/react";
import { getRefreshedToken } from "./services/api/auth";
import { setLocalStorage } from "./services/utils";

import { Callback } from "./pages/callback";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Navbar } from "./components/navbar";
import { Tracks } from "./pages/tracks/tracks";
import { NotFound } from "./pages/notFound";
import { Loader } from "./components/loader";
import { Artists } from "./pages/artists/artists";
import { RecentlyPlayed } from "./pages/recentlyPlayed";

function App() {
	const queryClient = new QueryClient();
	const [loading, setLoading] = useState(true);
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
		setLoading(false);
	});

	if (loading) {
		return <Loader />;
	}

	if (!loggedIn) {
		return (
			<QueryClientProvider client={queryClient}>
				<Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/callback" element={<Callback setLoggedIn={setLoggedIn} />} />
					<Route path="*" element={<Navigate to="/login" />} />
				</Routes>
			</QueryClientProvider>
		);
	}

	return (
		<QueryClientProvider client={queryClient}>
			<Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="tracks" element={<Tracks />} />
				<Route path="artists" element={<Artists />} />
				<Route path="recent" element={<RecentlyPlayed />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</QueryClientProvider>
	);
}

export default App;
