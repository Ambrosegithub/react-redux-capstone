import React from "react";
import Home from "./Components/Home";
import { Routes, Route } from 'react-router'
import Products from "./Components/Product.js";
import { FetchProduct } from "./redux/API/productfetch";
import NavBar from "./Components/navbar";

export const App = () => {
  return (
    <>
      <NavBar />
	   <FetchProduct /> 
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
};