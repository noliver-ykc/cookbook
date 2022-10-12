import React, { useContext } from "react";
import { ShoppingListContext } from "./App";

export default function ShoppingList(props) {
  const {
    handleShoppingListShow
    } = useContext(ShoppingListContext);

  return (
    <>
      <div>ShoppingList</div>
    </>

  )
}
