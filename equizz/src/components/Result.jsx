import React from "react";

function Result({ count, available }) {
	return (
		<div>
			You have answered {count}/{available} questions correctly
		</div>
	);
}

export default Result;
