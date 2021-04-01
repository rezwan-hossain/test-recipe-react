import React from "react";
import Recipe from "./Recipe.js";

export default function RecipeList({ recipes, handleRecipeAdd }) {
	return (
		<div className="recipe-list" >
			<div>
				{recipes.map((recipe) => {
					return <Recipe key={recipe.id} {...recipe} />;
				})}
			</div>
			<button onClick={handleRecipeAdd} > add recipe</button>
		</div>
	);
}
