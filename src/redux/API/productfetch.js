// import { createAsyncThunk } from "@reduxjs/toolkit";

// Define constant
const baseUrl = 'https://fakestoreapi.com/products';
const PRODUCTS_FETCH = 'PRODUCTS_FETCH';
const PRODUCTS_UPDATE = 'PRODUCTS_UPDATE';
const PRODUCTS_DELETE = 'PRODUCT_DELETE';
const PRODUCTS_CATEGORIES = 'PRODUCTS_CATEGORIES';
const PRODUCTS_SORTING = 'PRODUCTS_SORTING';
const ADD_NEW_PRODUCTS = 'ADD_NEW_PRODUCTSFETCH';
const FETCH_SINGLE_PRODUCTS = 'FETCH_SINGLE_PRODUCTS';
const PRODUCTSLIMIT = 'PRODUCTSLIMITS';

// API

// export const FetchProduct = createAsyncThunk(
//   PRODUCTS_FETCH,
//   async () => {
//     const data = await fetch(`${baseUrl}`)
//     .then((res) => res.json())
//     .then((data) => data);
//     console.log(data)
//     return data;

//   }
// )

export const FetchProduct = async () => {
  const response = await fetch(baseUrl);
  const results = await response.json();
  console.log(results);
  return results;
};

// actioncreator
export const productfetch = (payload) => ({
  type: PRODUCTS_FETCH,
  payload,
});

export const productupdate = (payload) => ({
  type: PRODUCTS_UPDATE,
  payload,
});

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
