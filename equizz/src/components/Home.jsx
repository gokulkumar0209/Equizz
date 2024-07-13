import React from "react";
import cont from "../data/data";
import Template from "./Template";
function Home() {
	console.log(cont);
	return (
		<div className=" bg-blue-200">
			<form>
				<div className="flex justify-end mr-10">
				<button type="submit" >Submit</button>
				</div>
				<div className="">
					{cont.map((q) => {
						return <Template question={q.question} answers={q.ans} />;
					})}
				</div>
			</form>
		</div>
	);
}

export default Home;
