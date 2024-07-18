import { useState } from "react";
import Home from "./components/Home";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className="bg-blue-200" >
				<Home />
			</div>
		</>
	);
}

export default App;
