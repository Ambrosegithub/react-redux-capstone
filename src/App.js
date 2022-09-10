import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './Components/Product';
import Maindetails from './Components/maindetails';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/products/:id" element={<Maindetails />} />
    </Routes>
  </Router>
);

export default App;
