import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";

import { Callback } from "./pages/callback";
import { Home } from "./pages/home";
import { Login } from "./pages/login";

function App() {
	return (
		<>
			<Navbar/>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/home" element={<Home />} />
				<Route path="/callback" element={<Callback />} />
			</Routes>
		</>
	);
}

export default App;
