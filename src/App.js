import "./App.css";
import RecipeList from "./component/RecipeList";

function App() {
  const sampleRecipe = [
    {
      id: 1,
      name: "plain checken",
      serving: 3,
      coockTime: "1.45",
      instruction:
        "1. put salt in chicken\n2. cheken in the overn\n3. eat the checken",
    },
    {
      id: 2,
      name: "plain beef",
      serving: 3,
      coockTime: "1.45",
      instruction:
        "1. put salt in beef\n2. cheken in the overn\n3. eat the beef",
    },
  ];

  return (
    <div>
      <RecipeList recipes={sampleRecipe} />
    </div>
  );
}

export default App;
