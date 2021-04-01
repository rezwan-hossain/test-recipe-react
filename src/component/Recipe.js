import React, { useContext } from "react";
import IngredienList from './IngredienList'

import { RecipeContex } from "../App.js";

export default function Recipe(props) {
	const { handleRecipeDelete } = useContext(RecipeContex);
	return (
		<div>
			<div>
				<h3>{props.name}</h3>
				<div>
					<button>edit</button>
					<button onClick={() => handleRecipeDelete(props.id)}>delete</button>
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
			<div>
				<span>Ingredients</span>

				<div>
					<IngredienList  ingredients={props.ingredients} />
				</div>
			</div>
		</div>
	);
}
