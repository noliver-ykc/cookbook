import React, { useState, useEffect } from "react";
import RecipeList from "./RecipeList";
import { v4 as uuidv4 } from "uuid"; // for pushing out super unique id
import "../css/app.css";
import RecipeEdit from "./RecipeEdit";
import ShoppingList from "./ShoppingList";

export const RecipeContext = React.createContext();
export const ShoppingListContext = React.createContext();

const LOCAL_STORAGE_KEY = "cookingWithReact.recipes";
function App() {
  // defined at the app level so both our edit and list functionalities can access state

  // load our values from local
  const [selectedRecipeId, setSelectedRecipeId] = useState();
  const [recipes, setRecipes] = useState(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (recipeJSON == null) {
      return sampleRecipes;
    } else {
      return JSON.parse(recipeJSON);
    }
  });
  const selectedRecipe = recipes.find(
    (recipe) => recipe.id === selectedRecipeId
  );
  const shopping = "shoppingTempValNicole";
  // save our values to local storage
  useEffect(() => {
    console.log("hello save");
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
  }, [recipes]); // [] is a dependency, whenever the component stored in this array changes, the effect takes place

  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
    handleRecipeChange
  };

  const shoppingListContextValue = { handleShoppingListShow };

  function handleRecipeSelect(id) {
    setSelectedRecipeId(id);
  }

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: "",
      servings: 1,
      cookTime: "",
      instructions: "",
      ingredients: [{ id: uuidv4(), name: "", amount: "", measurement: "" }],
    };
    setSelectedRecipeId(newRecipe.id);
    setRecipes([...recipes, newRecipe]);
  }

  function handleRecipeDelete(id) {
    if (selectedRecipeId != null && selectedRecipeId === id) {
      setSelectedRecipeId(undefined);
    }
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  }

  function handleRecipeChange(id, recipe) {
    // copying recipe array so we can mutate it
    const newRecipes = [...recipes];
    const index = newRecipes.findIndex((r) => r.id === id);
    newRecipes[index] = recipe;
    setRecipes(newRecipes);
  }

  function handleShoppingListShow() {
    //do something
    handleRecipeSelect(undefined);
  }

  return (
    <>
      <div className="nav-menu">
        <h1 className="appTitle">Party Menu Planner</h1>
        <div className="shopping-list">
          <button
            className="shopping-list-btn btn--ghost btn"
            onClick={() => handleShoppingListShow()}
            >View Shopping list
          </button>
        </div>
      </div>

      <RecipeContext.Provider value={recipeContextValue}>
        <RecipeList recipes={recipes} />
        {/* this is a common version of a react ternary if statement */}
        {selectedRecipe && <RecipeEdit recipe={selectedRecipe} />}
      </RecipeContext.Provider>
      <ShoppingListContext.Provider value={shoppingListContextValue}>
        <ShoppingList shopping={shopping} />
          {/* if btn click is true then display */}
      </ShoppingListContext.Provider>
    </>

  );
}

const sampleRecipes = [
  {
    id: 1,
    name: "Mac N Cheese",
    servings: 12,
    cookTime: "20",
    instructions: "Coming soon...",
    ingredients: [
      {
        id: 1,
        name: "Butter",
        amount: 3,
        measurement: "tbs",
      },
      {
        id: 2,
        name: "Milk",
        amount: 200,
        measurement: "g",
      },
      {
        id: 3,
        name: "Kraft Cheese Mix",
        amount: 2,
        measurement: "packets",
      },
    ],
  },
  {
    id: 2,
    name: "Kabocha Soup",
    servings: 2,
    cookTime: "0:45",
    instructions: "1. Put paprika on pork\n2. Put pork in oven\n3. Eat pork",
    ingredients: [
      {
        id: 1,
        name: "Onion",
        amount: 1,
        measurement: "",
      },
      {
        id: 2,
        name: "Kabocha",
        amount: 1200,
        measurement: "g",
      },
      {
        id: 3,
        name: "Butter",
        amount: 2,
        measurement: "tbs",
      },
      {
        id: 4,
        name: "鶏ガラスープ",
        amount: 800,
        measurement: "g",
      },
      {
        id: 5,
        name: "Milk",
        amount: 600,
        measurement: "g",
      },
      {
        id: 6,
        name: "生クリーム",
        amount: 200,
        measurement: "g",
      },
    ],
  },
];

export default App;
