import React from 'react';
import { Routes, Route } from 'react-router';
// import HomeList from './Components/Home';
import Products from './Components/Product';
// import ProductDetails from './redux/cart/Productdetails';
import Footer from './Components/Footer';
import Maindetails from './Components/maindetails';

const App = () => (
  <>
    <Footer />
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/products/:id" element={<Maindetails />} />
    </Routes>
  </>
);

export default App;
