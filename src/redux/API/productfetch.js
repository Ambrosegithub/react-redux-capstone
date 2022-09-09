// Define constant
const baseUrl = 'https://fakestoreapi.com/products';
const PRODUCTS_FETCH = 'PRODUCTS_FETCH';
const PRODUCTS_DELETE = 'PRODUCT_DELETE';
const PRODUCTS_CATEGORIES = 'PRODUCTS_CATEGORIES';
const PRODUCTS_SORTING = 'PRODUCTS_SORTING';
const ADD_NEW_PRODUCTS = 'ADD_NEW_PRODUCTSFETCH';
const FETCH_SINGLE_PRODUCTS = 'FETCH_SINGLE_PRODUCTS';
const PRODUCTSLIMIT = 'PRODUCTSLIMITS';
const header = new Headers({ 'Access-Control-Allow-Origin': '*' });

// API

export const productfetch = (payload) => ({
  type: PRODUCTS_FETCH,
  payload,
});

export const fetchProduct = () => async (dispatch) => {
  await fetch(baseUrl, { header })
    .then((res) => res.json())
    .then((data) => { dispatch(productfetch(data)); });
};

export const productdelete = (id) => ({
  type: PRODUCTS_DELETE,
  id,
});

export const productcategory = (payload) => ({
  type: PRODUCTS_CATEGORIES,
  payload,
});

export const productsorting = (payload) => ({
  type: PRODUCTS_SORTING,
  payload,
});

export const addnewproduct = (payload) => ({
  type: ADD_NEW_PRODUCTS,
  payload,
});

export const fetchsingleproduct = (payload) => ({
  type: FETCH_SINGLE_PRODUCTS,
  payload,
});

export const productLimits = (payload) => ({
  type: PRODUCTSLIMIT,
  payload,
});

const initiaProducts = [];
const ProductReducer = (state = initiaProducts, action) => {
  switch (action.type) {
    case PRODUCTS_FETCH:
      return action.payload;

    default:
      return state;
  }
};

export default ProductReducer;
