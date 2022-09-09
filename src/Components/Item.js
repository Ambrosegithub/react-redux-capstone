/* eslint-disable react/prop-types */
import React from 'react';
// import { propTypes } from 'react-bootstrap/esm/Image';
import { Link } from 'react-router-dom';
import './item.css';

const Item = (props) => {
  const {
    id, title, price, image,
  } = props;
  // const {searchItem, setSearchItem}

  const UNITPRICE = 'USD';
  return (
    <div className="products">

      <div key={id}>
        <h3 className="title">{ title }</h3>
        <div className="price">
          {' '}
          {`${UNITPRICE} ${price}`}
          {' '}
        </div>
        <img className="images" src={image} alt="Nice cool products" style={{ width: '200px', height: '200px' }} />
        <Link to={`/products/${id}`}>
          <div>see project Details</div>
        </Link>
      </div>
    </div>
  );
};

/* eslint-disable react/prop-types */
/*
Item.propTypes = {
  id: propTypes.Number.isRequired,
  title: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  image: propTypes.string.isRequired,
};
*/
export default Item;
