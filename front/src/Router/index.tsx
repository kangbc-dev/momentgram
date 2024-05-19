import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChatMain from "../Components/Chat/ChatMain";

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="chat" element={<ChatMain />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
