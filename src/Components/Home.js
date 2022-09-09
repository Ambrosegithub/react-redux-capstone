// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
// import { FetchProduct } from '../redux/API/productfetch';
// import './item.css';

// import Item from './Item';


// const HomeList = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const {id} = useParams()
//   const dispatch = useDispatch();
//   const products = useSelector((state) => state.Products);
//   console.log(products)
//   const filteredProducts = products.filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()))
//   useEffect(() => {
//     dispatch(FetchProduct())
//   }, [searchTerm]);
//   const handleChange = (e) => {
//     const { value } = e.target;
//     setSearchTerm(value);
//   };

//   const UNITPRICE = 'USD';

//   return(
//   <>
//     {' '}
//     <div>Welcome Home Page</div>
//     {/* <Item /> */}
//     <input 
//       type="text" name="search" 
//       className="search" 
//       placeholder="Search Item" 
//       value={searchTerm} onChange={handleChange} 
//       />
//       {filteredProducts.map((product)=>(
//         <>
//          <div key={id} className="products">

// <div id={product.id}>
//   <h3 className="title">{ product.title }</h3>
//   <div className="price">
//     {' '}
//     {`${UNITPRICE} ${product.price}`}
//     {' '}
//   </div>
//   <img className="images" src={product.image} alt="Nice cool products" style={{ width: '200px', height: '200px' }} />
//   <Link to={`/products/${id}`}>
//     <div>see project Details</div>
//   </Link>
// </div>
// </div>
//         </>
//       ))}

//   </>
// )
// };

// export default HomeList;
