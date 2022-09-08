import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import {  FetchProductDetails } from './collection';
import Items from '../../Components/Item';
// import { v4 as uuidv4 } from 'uuid';

const ProductDetails = () => {
  const {id} = useParams()
  const dispatch = useDispatch();
  const details = useSelector((state) => state.Details);
  const productDetailsList = details.filter(productDetailsList => productDetailsList.id ===id)
  useEffect(() => {
    if (productDetailsList.length == 0) {
      dispatch(FetchProductDetails(productDetailsList));
    }
  }, []);
  console.log(productDetailsList);
  return (

    <div>
      <div>Add items to Cart</div>
     {
        details.map((detail) => (
          <Items
            key={detail.id}
            title={detail.title}
            price={detail.price}
            descriptiion={detail.descriptiion}
            category={detail.category}
            image={detail.image}
            rate={detail.rating.rate}
            count={detail.rating.count}
          />
        ))
      }
      
    </div>
  );
};

export default ProductDetails;
