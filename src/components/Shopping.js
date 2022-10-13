import React from 'react'
import IngredientList from "./IngredientList";
import Recipe from './Recipe'

export default function shopping({ingredients}) {
  const ingredientElements = ingredients.map
  (ingredient => {
    return <Ingredient key={ingredient.id} {...ingredient} />
  })
  return (
    <div className='ingredient-grid'>
      {ingredientElements}
    </div>
  )
}

// get every recipe
// get the ingredients for every recipe and store in an array
// iterate through array of objs and display data
