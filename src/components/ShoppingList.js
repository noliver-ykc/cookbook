import React, { useContext } from "react";
//import { ShoppingListContext } from "./App";

export default function ShoppingList(props) {
  //const { handleShoppingListShow } = useContext(ShoppingListContext);
  const ingredients = [
    {
      Kabocha: 1200,
      Butter: 2,
      HeavyCream: 200,
    },
    {
      MacNCheeseMix: 3,
      Butter: 3,
    },
  ];

  function ingredientSum(food) {
    let output = "";
    const aggregate = food.reduce((a, b) => {
      for (let k in b) {
        if (b.hasOwnProperty(k)) a[k] = (a[k] || 0) + b[k];
      }
      return a;
    }, {});
    for (const [key, value] of Object.entries(aggregate)) {
      output += `${key}: ${value} `;
    }
    return output;
  }

  return (
    <>
      <div className="shopping-list-container">
        ShoppingListNicole
        <p>{ingredientSum(ingredients)}</p>
      </div>
    </>
  );
}
