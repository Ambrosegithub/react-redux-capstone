import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { FaLessThan } from 'react-icons/fa';
import { getDetails } from '../redux/datails';

const Maindetails = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.details);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getDetails(id));
  }, []);
  const Unitprice = '$';
  return (
    <div className="detailss">
      <div className="header">
        {' '}
        <h2>
          Welcome TO
          <span className="desire">Your Desire</span>
          <span className="page">Products Page</span>
        </h2>
        <Link to="/"><FaLessThan size={20} style={{ color: '#fff', margin: '25px' }} className="link" /></Link>
      </div>
      <div className="productList">
        <div className="detailImage">
          <img src={status.productItems.image} className="img" alt="Nice looking products" />
        </div>
        <div className="productdetails">
          <h2>{status.productItems.title}</h2>
          <p>{status.productItems.description}</p>
          <p>{status.productItems.category}</p>
          <p className="pricedetails">{`${Unitprice} ${status.productItems.price}`}</p>
          <button type="button" className="cart">Add to Cart</button>
        </div>

      </div>
    </div>
  );
};

export default Maindetails;
