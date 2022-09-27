import React from 'react'

export default function Recipe() {
  return (
    <div>
      <div className="recipe-header">
        <h3 className='recipe-title'>Plain Chickem</h3>
        <div className="btns">
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
      <div className="rows">
        <span>Cook Time:</span>
        <span>1:45</span>
      </div>
      <div className="rows">
        <span>Servings:</span>
        <span>3</span>
      </div>
      <div className="rows">
        <span>Instructions:</span>
        <div className="recipe-rows-instructions">
          1. Put salt on chicken
          2. put chicken in oven
          3. eat chicken
        </div>
      </div>
    </div>
  )
}
