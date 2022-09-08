//import React, { useEffect } from 'react';
import {  useSelector } from 'react-redux';
import { useParams } from 'react-router';
//import {  FetchProductDetails } from './collection';
import Items from '../../Components/Item';
// import { v4 as uuidv4 } from 'uuid';

const ProductDetails = () => {
  const {id} = useParams()
  console.log(id)
  //const dispatch = useDispatch();
  const details = useSelector((state) => state.Products);
  console.log(details)
  const productDetailsList = details.filter((product) => {
    if (product.id === parseInt(id))
      return product;
    return;
  });
 
  console.log(productDetailsList);
  return (

    <div>
      <div>Add items to Cart</div>
     {
        productDetailsList.map((detail) => (
          <Items
            key={detail.id}
            title={detail.title}
            price={detail.price}
            description={detail.description}
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
