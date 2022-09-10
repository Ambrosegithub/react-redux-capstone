import React from 'react';
import { Link } from 'react-router-dom';
import './item.css';

const Item = (state) => {
  const {
    id, title, price, image,
  } = state;

  const UNITPRICE = 'USD';
  return (
    <div className="products">
      <div className="contain" key={id}>
        <img
          className="images"
          src={image}
          alt="Nice cool products"
          style={{ width: '200px', height: '200px' }}
        />
        <div className="sub-cont">
          <h3 className="title">{title}</h3>
          <div className="price">{`${UNITPRICE} ${price}`}</div>
          <Link to={`/products/${id}`}>
            <div className="btn">see product Details</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
