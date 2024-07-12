import React from "react";
import cont from "../data/data";
import Template from "./Template";
function Home() {
	console.log(cont);
	return (
		<div>
			{cont.map((q) => {
				return <Template question={q.question} answers={q.ans} />;
			})}
		</div>
	);
}

export default Home;
