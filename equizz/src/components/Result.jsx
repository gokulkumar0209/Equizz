import React from "react";

function Result({ count, available }) {
	return (
		<div className="h-screen flex justify-center items-center">
			<h1 className=" text-2xl">You have answered {count}/{available} questions correctly</h1>
		</div>
	);
}

export default Result;
