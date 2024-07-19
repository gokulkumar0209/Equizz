import { useState } from "react";
import Home from "./components/Home";
import { Route, BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation";
function App() {
	return (
		<>
			<div className="bg-blue-200">
				<Navigation />
				<Home />
			</div>
		</>
	);
}

export default App;
