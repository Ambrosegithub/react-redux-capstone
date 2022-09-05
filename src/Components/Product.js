import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
 import { FetchProduct } from "../redux/API/productfetch";


const ProductLists = () => {
const dispatch = useDispatch()
const Products = useSelector(state=> state.Products)
useEffect(()=> {
    if(!Products.length){
      dispatch(FetchProduct)
    }
  },[]);
    return (
        
<div>
    <div>Get list of Products</div>
    
    </div>
    )
}

export default ProductLists;