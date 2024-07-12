import React from "react";

function Template({ question, answers }) {
	console.log(question);
	return (
		<div>
			<div className="text-xl placeholder:font-bold">
				<h1>{question}</h1>
			</div>
			<div className="bg-gray-500">
				{answers.map((ans) => {
					return (
						<div>
							<label>
								<input type="radio"></input>
								{ans}
							</label>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Template;
