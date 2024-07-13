import React from "react";

function Template({ question, answers }) {
	console.log(question);
	return (
		<div>
			<div className="text-xl placeholder:font-bold ml-8 mb-2">
				<h1>{question}</h1>
			</div>
			<div className=" ml-20 mx-20">
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
