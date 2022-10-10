import React, { useContext } from 'react'
import RecipeIngredientEdit from './RecipeIngredientEdit'
import { RecipeContext } from './App'
import { v4 as uuidv4 } from 'uuid';

export default function RecipeEdit({recipe}) {
  const { handleRecipeChange, handleRecipeSelect } = useContext(RecipeContext)

  function handleChange(changes) {
    // taking everything from recipe and everything from changes but in a brand new obj
    // and overwrites the new obj with new info
    // never alter props or state in react
    handleRecipeChange(recipe.id, { ...recipe, ...changes })
  }
  function handleIngredientChange(id, ingredient) {
    const newIngredients = [...recipe.ingredients]
    const index = newIngredients.findIndex(i => i.id === id)
    newIngredients[index] = ingredient
    handleChange({ingredients: newIngredients})
  }
  function handleIngredientAdd() {
    const newIngredient = {
      id: uuidv4(),
      name: '',
      amount: ''
    }
    handleChange({ingredients: [...recipe.ingredients, newIngredient]})
  }

  function handleIngredientDelete(id) {
    // makes a new ingredient list containing everything that does not have the id of the selected ingredient
    handleChange({ingredients: recipe.ingredients.filter(i => i.id !== id)})

  }
  return (
    <div className='recipe-edit'>
      <div className="rm-btn-container">
        {/* &times; uses html magic to build an x button thats perfectly center */}
        <button
          className="btn recipe-edit-rm-btn"
          // changes selected recipe id to undefined and now no longer shows stuff
          onClick={() => handleRecipeSelect(undefined)}
        >
          &times;
        </button>
      </div>
      <div className="recipe-edit-details-grid">
          <label
            htmlFor="name"
            className="recipe-edit-label">
              Name
          </label>
          <input
            type="text"
            name='name'
            id="name"
            value={recipe.name}
            onChange={e => handleChange({ name: e.target.value })}
            className="recipe-edit-input"
          />

          <label
            htmlFor="cookTime"
            className="recipe-edit-label">
              Cook Time
          </label>
          <input
            type="text"
            name='cookTime'
            id="cookTime"
            value={recipe.cookTime}
            onChange={e => handleChange({ cookTime: e.target.value })}
            className="recipe-edit-input"
          />

          <label
          htmlFor="servings"
          className="recipe-edit-label">
            Servings
          </label>
          <input
            type="number"
            min="1"
            name='servings'
            id="servings"
            value={recipe.servings}
            // e.target.value alwayys returns a str so must make int
            // return empty str if to int NaN
            onChange={e => handleChange({ servings: parseInt(e.target.value) || ''})}
            className="recipe-edit-input"
          />

          <label
            htmlFor="instructions"
            className="recipe-edit-label">
              Instructions
          </label>
          <textarea
            name='instructions'
            id="instructions"
            value={recipe.instructions}
            onChange={e => handleChange({ instructions: e.target.value })}
            className="recipe-edit-input">
          </textarea>
      </div>
      <br />
      <label className="recipe-edit-label">Ingredients</label>
      <div className="recipe-edit-ingredient-grid">
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        {recipe.ingredients.map(ingredient => (
          <RecipeIngredientEdit
            key={ingredient.id}
            handleIngredientChange={handleIngredientChange}
            handleIngredientDelete={handleIngredientDelete}
            ingredient={ingredient}
          />
        ))}
      </div>
      <div className="recipe-edit-add-ingredient-btn-container">
        <button
          className="btn btn--primary"
          onClick={() => handleIngredientAdd()}
          >
            Add Ingredient
          </button>
      </div>
    </div>
  )
}
