import React from "react";

function Template({
	question,
	answers,
	actual,
	setActual,
	allSelectedDependency,
	setAllSelectedDependency,
}) {
	const addAns = (index) => {
		const old = actual;
		old.set(question, answers[index]);
		setActual(old);
		setAllSelectedDependency(!allSelectedDependency);
		// console.log(actual);
	};
	// console.log(actual);
	return (
		<div>
			<div className="text-xl placeholder:font-bold ml-8 mb-2">
				<h1>{question}</h1>
			</div>
			<div className=" ml-20 mx-20 grid grid-rows-4">
				<label>
					<input
						checked={actual.get(question) == answers[0]}
						type="radio"
						name={question}
						value={answers[0]}
						onChange={() => {
							addAns(0);
						}}
					></input>
					{answers[0]}
				</label>
				<label>
					<input
						checked={actual.get(question) == answers[1]}
						type="radio"
						name={question}
						value={answers[1]}
						onChange={() => {
							addAns(1);
						}}
					></input>
					{answers[1]}
				</label>
				<label>
					<input
						checked={actual.get(question) == answers[2]}
						type="radio"
						name={question}
						value={answers[2]}
						onChange={() => {
							addAns(2);
						}}
					></input>
					{answers[2]}
				</label>
				<label>
					<input
						checked={actual.get(question) == answers[3]}
						type="radio"
						name={question}
						value={answers[3]}
						onChange={() => {
							addAns(3);
						}}
					></input>
					{answers[3]}
				</label>
			</div>
		</div>
	);
}

export default Template;
