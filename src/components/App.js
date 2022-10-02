import React, { useState } from 'react';
import RecipeList from './RecipeList';
import { v4 as uuidv4 } from 'uuid'; // for pushing out supe runique id
import '../css/app.css'

function App() {
  // defined at the app level so both our edit and list functionalities can access state
  const [recipes, setRecipes] = useState(sampleRecipes)

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
    <RecipeList
      recipes={recipes}
      handleRecipeAdd={handleRecipeAdd}
      handleRecipeDelete={handleRecipeDelete}
    />
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
