import React, { useEffect, useState } from "react";
import cont from "../data/data";
import Template from "./Template";
function Home() {
	const map = new Map();
	const [actual, setActual] = useState(map);
	console.log(cont);
	return (
		<div className=" bg-blue-200">
			<form>
				<div className="flex justify-end mr-10">
					<button type="submit">Submit</button>
				</div>
				<div className="">
					{cont.map((q) => {
						return <Template question={q.question} answers={q.ans} actual={actual} setActual={setActual}/>;
					})}
				</div>
			</form>
		</div>
	);
}

export default Home;
