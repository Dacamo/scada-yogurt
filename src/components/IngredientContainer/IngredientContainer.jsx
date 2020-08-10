import React from "react";

const IngredientContainer = ({ ingredientName, quantity }) => (
  <>
    <h1>{ingredientName}</h1>
    <p>{quantity}</p>
  </>
);

export default IngredientContainer;
