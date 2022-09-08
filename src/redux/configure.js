import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import ProductReducer from './API/productfetch';
import ProductDetailsReducer from './cart/collection';

const rootReducer = combineReducers({
  Products: ProductReducer,
  Details: ProductDetailsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
