import React from 'react';
import { Link } from 'react-router-dom';
import './item.css'
const Items = (props) => {
  const {
    id, title, price, description, category, image, rate, count,
  } = props;
 
const UNITPRICE = 'USD'
  return (
    <div className ='products'>
      <div key={id}>
        <h3 className=''>{ title }</h3>
        <div>  {id}</div>
        <div> {UNITPRICE + price} </div>
        <div>{ description }</div>
        <div>{ category }</div>
        <img src={image} alt="Nice cool products" style={{width: "200px", height: "200px"}} />
        <div>{ rate }</div>
        <div>{ count }</div>
        <Link to={`/products/${id}`}>
        <div>see project Details</div>
        </Link>
      </div>
    </div>
  );
};

export default Items;
