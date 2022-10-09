import React from 'react'

export default function RecipeIngredientEdit({ingredient}) {
  return (
    <>
      <input
        className="recipe-edit-input"
        type="text"
        value={ingredient.name}
      />
      <input
        className="recipe-edit-input"
        type="text"
        value={ingredient.amount}
      />
      <button className="btn btn--danger">&times;</button>
    </>
  )
}
