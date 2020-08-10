import React from "react";
import "./App.css";
import IngredientContainer from "./components/IngredientContainer";
import Boiler from "./components/Boiler";

const App = () => {
  return (
    <>
      <h1>Yogurt</h1>
      <IngredientContainer ingredientName="Leche" quantity="1L" />
      <IngredientContainer ingredientName="Fermento" quantity="1Kg" />
      <Boiler />
    </>
  );
};

export default App;
