import "./App.css";
import RecipeList from "./component/RecipeList";
import { useState, createContext, useEffect } from "react";

import { v4 as uuidv4 } from "uuid";

export const RecipeContex = createContext();
const LOCAL_STORAGE_KEY = 'coockingWithReact.recipes'

function App() {
  const [recipes, setRecipes] = useState(sampleRecipe);

  useEffect(()=>{
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if(recipeJSON != null){
      setRecipes(JSON.parse(recipeJSON))
    } 
  }, [])
  
  useEffect(()=>{
    
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
  }, [recipes])



  const recipeContexValue = {
    handleRecipeAdd,
    handleRecipeDelete,
  };

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

  function handleRecipeDelete(id) {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  }
  return (
    <RecipeContex.Provider value={recipeContexValue}>
      <RecipeList recipes={recipes} />
    </RecipeContex.Provider>
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
