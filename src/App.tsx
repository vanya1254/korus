import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";

import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="korus/" element={<Home />} />
        <Route path="korus/recipes/:id" element={<Recipes />} />
      </Routes>
    </div>
  );
};

export default App;
