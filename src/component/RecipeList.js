import React, { useContext } from "react";
import Recipe from "./Recipe.js";

import { RecipeContex } from "../App.js";

export default function RecipeList({ recipes }) {
	const { handleRecipeAdd } = useContext(RecipeContex);

	return (
		<div className="recipe-list">
			<div>
				{recipes.map((recipe) => {
					return <Recipe key={recipe.id} {...recipe} />;
				})}
			</div>

			<button onClick={() => handleRecipeAdd()}> add recipe</button>
		</div>
	);
}
