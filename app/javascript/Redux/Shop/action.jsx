import React, { useEffect, useImperativeHandle } from "react";
import axios from "axios";
import * as types from "../Shop/types";



export const addToCart = (itemID) => {
  return {
    type: types.ADD_TO_CART,
    payload: {
      id: itemID,
    },
  };
};

export const removeFromCart = (itemID) => {
  return {
    type: types.REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};

export const adjustItemQuantity = (itemID, value) => {
  return {
    type: types.ADJUST_ITEM_QUANTITY,
    payload: {
      id: itemID,
      quantity: value,
    },
  };
};

export const loadCurrentItem = (item) => {
  return {
    type: types.LOAD_CURRENT_ITEM,
    payload: {
      id: item,
    },
  };
};

export const fetchProductsRequest = () => {
  return {
    type: types.FETCH_PRODUCTS_REQUEST,
  };
};

export const fetchProductsSuccess = (products) => {
  return {
    type: types.FETCH_PRODUCTS_SUCCESS,
    payload: products,
  };
};

export const fetchProductsFailure = (error) => {
  return {
    type: types.FETCH_PRODUCTS_FAILURE,
    payload: error,
  };
};


export function fetchProducts() {

  return (dispatch) => {
      dispatch(fetchProductsRequest());
      axios
        .get("/api/v1/products/index")
        .then((response) => {
          const products = response.data.products;
          dispatch(fetchProductsSuccess(products));
        })
        .catch((error) => {
          // error.message is the error message
          dispatch(fetchProductsFailure(error.message));
        });
  };
};




