import React from 'react';
import { Routes, Route } from 'react-router';
//import HomeList from './Components/Home';
import Products from './Components/Product';
import ProductDetails from './redux/cart/Productdetails';

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetails />} />
    </Routes>
  </>
);

export default App;
