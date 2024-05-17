import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChatList from "../Components/ChatList";

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="chat_list" element={<ChatList />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
