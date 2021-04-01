import "./App.css";
import RecipeList from "./component/RecipeList";
import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

function App() {
  const [recipes, setRecipes] = useState(sampleRecipe);

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: "new name",
      serving: 1,
      coockTime: "1.00",
      instruction: "somthing",
      ingredients: [
        {
          id: uuidv4(),
          name: "new Name",
          amount: "1 tbs",
        },
      ],
    };

    setRecipes([...recipes, newRecipe]);
  }
  return (
    <div>
      <RecipeList recipes={recipes} handleRecipeAdd={handleRecipeAdd} />
    </div>
  );
}

const sampleRecipe = [
  {
    id: 1,
    name: "plain checken",
    serving: 3,
    coockTime: "1.45",
    instruction:
      "1. put salt in chicken\n 2. cheken in the overn\n 3. eat the checken",
    ingredients: [
      {
        id: 1,
        name: "checken",
        amount: "2 tbs",
      },
      {
        id: 2,
        name: "salt",
        amount: "2 pound",
      },
    ],
  },
  {
    id: 2,
    name: "plain beef",
    serving: 3,
    coockTime: "1.45",
    instruction:
      "1. put salt in beef\n 2. cheken in the overn\n 3. eat the beef",
    ingredients: [
      {
        id: 1,
        name: "beef",
        amount: "2 tbs",
      },
      {
        id: 2,
        name: "salt",
        amount: "2 pound",
      },
    ],
  },
];

export default App;
