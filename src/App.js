import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
// import HomeList from './Components/Home';
import Products from './Components/Product';
// import ProductDetails from './redux/cart/Productdetails';
import Footer from './Components/Footer';
import Maindetails from './Components/maindetails';

const App = () => (
  <Router>
    <Footer />
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/products/:id" element={<Maindetails />} />
    </Routes>
  </Router>
);

export default App;
