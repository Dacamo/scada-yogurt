import React from "react";
import "./App.css";
import IngredientContainer from "./components/IngredientContainer";
import Boiler from "./components/Boiler";

const App = () => {
  return (
    <main class="min-h-screen h-full mx-auto w-3/5 flex items-center text-gray-700">
      <div class="grid grid-cols-2 gap-4">
        <div>
          <div className="py-4">
            <IngredientContainer ingredientName="Leche" />
          </div>
          <div className="py-4">
            <IngredientContainer ingredientName="Fermento" />
          </div>
        </div>
        <div>
          <Boiler />
        </div>
      </div>
    </main>
  );
};

export default App;
