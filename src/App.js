import React from "react";
import "./App.css";
import Boiler from "./components/Boiler";

const App = () => {
  return (
    <main className="min-h-screen h-full mx-auto w-3/5 flex items-center text-gray-700">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Boiler />
        </div>
      </div>
    </main>
  );
};

export default App;
