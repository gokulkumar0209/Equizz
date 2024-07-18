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
	};
	return (
		<div>
			<div className="text-xl placeholder:font-bold ml-8 mb-2">
				<h1>{question}</h1>
			</div>
			<div className=" ml-20 mx-20 grid grid-rows-4">
				{answers.map((answer, index) => {
					return (
						<label>
							<input
								checked={actual.get(question) == answer}
								type="radio"
								name={question}
								value={answer}
								onChange={() => {
									addAns(index);
								}}
							></input>
							{answer}
						</label>
					);
				})}
			</div>
		</div>
	);
}

export default Template;
