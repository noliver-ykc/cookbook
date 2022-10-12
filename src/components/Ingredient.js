import React from "react";

export default function Ingredient({ name, amount, measurement }) {
  return (
    <>
      <span>{name}</span>
      <span>
        {amount}
        {measurement}
      </span>
    </>
  );
}
