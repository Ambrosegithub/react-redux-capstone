import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchProduct } from '../redux/API/productfetch';
// import { useParams } from 'react-router-dom';
import Item from './Item';
// import HomeList from './Home';
// import { v4 as uuidv4 } from 'uuid';

const ProductLists = () => {
  // const {id} = useParams()
  const dispatch = useDispatch();
  const Products = useSelector((state) => state.Products);
  useEffect(() => {
    if (Products.length === 0) {
      dispatch(FetchProduct());
    }
  }, []);


  // const [searchTerm, setSearchTerm] = useState(''); 
  // const {id} = useParams()
  // const dispatch = useDispatch();
  // const products = useSelector((state) => state.Products);
  // console.log(products)
  // const filteredProducts = products.filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()))
  // useEffect(() => {
  //   dispatch(FetchProduct())
  // }, [searchTerm]);
  // const handleChange = (e) => {
  //   const { value } = e.target;
  //   setSearchTerm(value);
  return (
    <>
      {/* <HomeList /> */}
      <div>Welcome Home Page</div>
      <input 
      type="text" name="search" 
      className="search" 
      placeholder="Search Item" 
      // value={searchTerm} onChange={handleChange} 
    />
      <div className="products">
        {Products.map((Product) => (
          <Item
            key={Product.id}
            id={Product.id}
            title={Product.title}
            price={Product.price}
            description={Product.description}
            category={Product.category}
            image={Product.image}
            rate={Product.rating.rate}
            count={Product.rating.count}
          />
        ))}
      </div>
    </>
  );
};

export default ProductLists;
