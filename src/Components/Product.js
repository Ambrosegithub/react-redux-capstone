import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../redux/API/productfetch';
import Item from './Item';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const filteredproducts = products.filter((product) => product.title
    .toLowerCase().includes(searchTerm.toLowerCase()));
  const handleChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
  };
  return (
    <>
      <div className="welcome">Welcome Home Page</div>
      <input
        type="text"
        name="search"
        className="search"
        placeholder="Search Item"
        value={searchTerm}
        onChange={handleChange}
      />
      <div className="products">
        {filteredproducts.map((product) => (
          <Item
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            category={product.category}
            image={product.image}
            rate={product.rating.rate}
            count={product.rating.count}
          />
        ))}
      </div>
    </>
  );
};

export default Products;
