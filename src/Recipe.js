import React from 'react'
import IngredientList from './IngredientList'

export default function Recipe(props) {
  // using destructuring on line 3 will crowd the text, so placing in a variable here
  const {
    name,
    cookTime,
    servings,
    instructions,
    ingredients
  } = props

  return (
    <div>
      <div className="recipe-header">
        <h3 className='recipe-title'>{name}</h3>
        <div className="btns">
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
      <div className="rows">
        <span>Cook Time:</span>
        <span>{cookTime}</span>
      </div>
      <div className="rows">
        <span>Servings:</span>
        <span>{servings}</span>
      </div>
      <div className="rows">
        <span>Instructions:</span>
        <div className="recipe-rows-instructions">
          {instructions}
        </div>
      </div>
      <div className="rows">
        <span>Ingredients:</span>
        <div className="recipe-rows-ingredients">
          <IngredientList ingredients={ingredients}/>
        </div>
      </div>
    </div>
  )
}
