import React from 'react';
import { Routes, Route } from 'react-router';
import Home from './Components/Home';
import Products from './Components/Product';
import { FetchProduct } from './redux/API/productfetch';
import NavBar from './Components/navbar';

const App = () => (
  <>
    <NavBar />
    <FetchProduct />
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  </>
);

export default App;
