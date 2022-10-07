import React, { useState, useEffect } from 'react';
import RecipeList from './RecipeList';
import { v4 as uuidv4 } from 'uuid'; // for pushing out supe runique id
import '../css/app.css'
import RecipeEdit from './RecipeEdit';

export const RecipeContext = React.createContext()
const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes'
function App() {
  // defined at the app level so both our edit and list functionalities can access state

  // load our values from local
  const [recipes, setRecipes] = useState(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (recipeJSON == null) {
      return sampleRecipes
    } else {
      return JSON.parse(recipeJSON)
    }
  })
  // save our values to local storage
  useEffect(() => {
   console.log("hello save")
   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
  }, [recipes]) // [] is a dependency, whenever the component stored in this array changes, the effect takes place



  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete
  }
  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: 'New',
      servings: 1,
      cookTime: '1:00',
      instructions: 'Instr',
      ingredients: [
        { id: uuidv4(), name: 'Name', amount: '1 Tbs'}
      ]
    }
    setRecipes([...recipes, newRecipe])
  }

  function handleRecipeDelete(id) {
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }

  return (
    <RecipeContext.Provider value ={recipeContextValue}>
      <RecipeList recipes={recipes}/>
      <RecipeEdit />
    </RecipeContext.Provider>
  )
}



const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: "1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken",
    ingredients: [
      {
        id: 1,
        name: "chicken",
        amount: "2lbs"
      },
      {
        id: 2,
        name: "Salt",
        amount: "1tbs"
      }
    ]
  },
  {
    id: 2,
    name: 'Plain Pork',
    servings: 5,
    cookTime: '0:45',
    instructions: "1. Put paprika on pork\n2. Put pork in oven\n3. Eat pork",
    ingredients: [
      {
        id: 1,
        name: "Pork",
        amount: "2lbs"
      },
      {
        id: 2,
        name: "Papirika",
        amount: "2tbs"
      }
    ]
  }
]

export default App;
