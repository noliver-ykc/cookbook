import React from "react";

export default function RecipeIngredientEdit(props) {
  const { ingredient, handleIngredientChange, handleIngredientDelete } = props;

  function handleChange(changes) {
    /// same as handle recipe change
    handleIngredientChange(ingredient.id, { ...ingredient, ...changes });
  }
  return (
    <>
      <input
        className="recipe-edit-input"
        type="text"
        onChange={(e) => handleChange({ name: e.target.value })}
        value={ingredient.name}
      />
      <input
        className="recipe-edit-input"
        type="text"
        onChange={(e) => handleChange({ amount: e.target.value })}
        value={ingredient.amount}
      />

      <select
        name="measurement"
        id="measurement"
        onChange={(e) => handleChange({ measurement: e.target.value })}
      >
        <option value={ingredient.measurement}>{ingredient.measurement}</option>
        <option value="g">g</option>
        <option value="tsp">tsp</option>
        <option value="tbsp">tbsp</option>
        <option value="ml">mL</option>
        <option value="packet">packet(s)</option>
        <option value="packet">whole</option>
      </select>

      <button
        className="btn btn--danger"
        onClick={() => handleIngredientDelete(ingredient.id)}
      >
        &times;
      </button>
    </>
  );
}
