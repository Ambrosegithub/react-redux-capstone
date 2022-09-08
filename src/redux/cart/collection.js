const PRODUCTS_DETAILS = 'PRODUCTS_DETAILS';
const header = new Headers({ "Access-Control-Allow-Origin": "*" });

export const FetchProductDetails = () => async (dispatch) => {
  await fetch("https://fakestoreapi.com/products",{ header: header }).then((res) => res.json()).then((data) => { dispatch(productDetails(data)); });
};
// actioncreator

export const productDetails = (payload) => ({
  type: PRODUCTS_DETAILS,
  payload,
});

const initiaProducts = [];
const ProductDetailsReducer = (state = initiaProducts, action) => {
  switch (action.type) {
    case PRODUCTS_DETAILS:
      return action.payload;
    default:
      return state;
  }
};
export default ProductDetailsReducer;
