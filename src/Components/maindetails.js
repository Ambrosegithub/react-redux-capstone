/** eslint-disable */
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
      <Link to="/"><FaLessThan size={30} style={{ color: '#000', margin: '25px' }} className="link" /></Link>
      <div className="productList">
        <div className="detailImage">
          <img className="img" src={status.productItems.image} />

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
