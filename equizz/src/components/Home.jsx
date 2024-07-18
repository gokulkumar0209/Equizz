import React, { useEffect, useState } from "react";
import data from "../data/data";
import Template from "./Template";
import Result from "./Result";
function Home() {
	const cont = data.cont;
	const expected = data.expected;
	const map = new Map();
	const [resVisible, setResVisible] = useState(false);
	const [actual, setActual] = useState(map);
	const [allSelected, setAllselected] = useState(false);
	const [count, setCount] = useState(0);
	const [allSelectedDependency, setAllSelectedDependency] = useState(false);
	const res = (e) => {
		e.preventDefault();
		let new_count = 0;
		// console.log(actual);
		// console.log(expected);
		for (let [key, value] of actual.entries()) {
			console.log(key);
			// console.log("actual " + actual.get(ele));
			// console.log("expected " + expected[ele]);
			if (value == expected[key]) {
				new_count += 1;
				setCount(new_count);
			}
		}
		if (actual.size == cont.length) {
			if (resVisible == true) setResVisible(false);
			else {
				setResVisible(true);
			}
		}
	};
	useEffect(() => {
		// console.log("Hi");
		if (actual.size == cont.length) {
			setAllselected(true);
		}
	}, [allSelectedDependency]);
	return (
		<div className=" bg-blue-200">
			<div className={resVisible ? "hidden" : "flex justify-end mr-10 "}>
				<button
					type="submit"
					onClick={res}
					disabled={!allSelected}
					className={
						allSelected == false
							? " bg-gray-400 p-1 px-3 border border-gray-800 mt-2"
							: "bg-blue-400 p-1 px-3 border border-blue-800 mt-2"
					}
				>
					Submit
				</button>
			</div>
			<div className={resVisible == false ? "bg-blue-200" : " hidden"}>
				<form>
					<div className="">
						{cont.map((q, index) => {
							return (
								<Template
									key={index}
									question={q.question}
									answers={q.ans}
									actual={actual}
									setActual={setActual}
									allSelectedDependency={allSelectedDependency}
									setAllSelectedDependency={setAllSelectedDependency}
								/>
							);
						})}
					</div>
				</form>
			</div>
			<div className={resVisible == true ? "bg-blue-200" : " hidden"}>
				<div className="flex justify-end mr-10">
					<button onClick={res} className=" bg-blue-400 p-1 px-3 border border-blue-800 mt-2 mr-4">
						Back
					</button>
					<button onClick={res} className=" bg-blue-400 p-1 px-3 border border-blue-800 mt-2">
						Reset
					</button>
					
				</div>
				<Result count={count} available={actual.size} />
			</div>
		</div>
	);
}

export default Home;
