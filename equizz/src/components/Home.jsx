import React, { useEffect, useState } from "react";
import data from "../data/data";
import Template from "./Template";
import Result from "./Result";
function Home() {
	const cont = data.cont;
	const expected = data.expected;
	const map = new Map();
	const [resVis, setResVis] = useState(false);
	const [actual, setActual] = useState(map);
	const [allSelected, setAllselected] = useState(true);
	const [count, setCount] = useState(0);

	const res = (e) => {
		e.preventDefault();
		if (actual.size == 4) {
			if (resVis == true) setResVis(false);
			else {
				setResVis(true);
			}
		}
	
	};
	useEffect(() => {
		console.log("Hi");
		if (actual.size == cont.length) {
			setAllselected(false);
		}
	}, [actual]);
	return (
		<div className=" bg-blue-200">
			<div className="flex justify-end mr-10">
				<button type="submit" onClick={res} >
					Submit
				</button>
			</div>
			<div className={resVis == false ? "bg-blue-400" : " hidden"}>
				<form>
					<div className="">
						{cont.map((q) => {
							return (
								<Template
									question={q.question}
									answers={q.ans}
									actual={actual}
									setActual={setActual}
								/>
							);
						})}
					</div>
				</form>
			</div>
			<div className={resVis == true ? "bg-blue-400" : " hidden"}>
				<button onClick={res}>Back</button>
				<Result count={count} available={actual.size} />
			</div>
		</div>
	);
}

export default Home;
