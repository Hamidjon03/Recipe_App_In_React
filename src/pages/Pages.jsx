import Home from "./Home";
import Cuisine from "./Cuisine";
import React from "react";
import Recipe from "./Recipe";
import { Route, Routes } from "react-router-dom";
import Searched from "./Searched";

function Pages() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched/>} />
        <Route path="/recipe/:name" element={<Recipe />} />
      </Routes>
  );
}

export default Pages;
