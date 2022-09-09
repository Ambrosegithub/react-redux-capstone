import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import ProductReducer from './API/productfetch';
import ProductDetailsReducer from './cart/collection';
import details from './datails';

const rootReducer = combineReducers({
  products: ProductReducer,
  Details: ProductDetailsReducer,
  details,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
