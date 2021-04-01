import React from "react";

export default function Recipe(props) {
	return (
		<div>
			<div>
				<h3>{props.name}</h3>
				<div>
					<button>edit</button>
					<button>delete</button>
				</div>
			</div>
			<div>
				<span>Coock Time:</span>
				<span> {props.coockTime}</span>
			</div>
			<div>
				<span>Serving:</span>
				<span>{props.serving}</span>
			</div>
			<div>
				<span>Instaruction</span>
				<div>{props.instruction}</div>
			</div>
		</div>
	);
}
