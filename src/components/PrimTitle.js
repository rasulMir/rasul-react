import React from "react";

const PrimTitle = (props) => {
	return (
		<div className="primary-title">
			<span className="primary-title__span">
				{props.title}
			</span>
		</div>
	);
}

export default PrimTitle;