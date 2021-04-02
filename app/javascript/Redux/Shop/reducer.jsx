import React from "react";
import * as types from "../Shop/types";
import axios from "axios";
import Product from "./Product";
import { useEffect, useState, Component } from "react";




const INITIAL_STATE = {
    loading: false,
    products: [{title: "Hello World !!!", name: "Hello World !!!"}], // TODO ID, TITLE, DECRIPTION, PRICE, IMAGE
    error: '',
    cart: [],
    currentItem: null
}


const shopReducer = (state = INITIAL_STATE, action) => {


  switch(action.type) {
      case types.ADD_TO_CART:
        const item = state.products.find((product) => product.id === action.payload.id);
        const inCart = state.cart.find((item) => item.id === action.payload.id ? true : false);
          return {
            ...state,
            cart: inCart ? state.cart.map((item) => item.id === action.payload.id ? {...item, quantity: item.quantity + 1} : item) : [...state.cart, {...item, quantity: 1}],
          };
      case types.REMOVE_FROM_CART:
          return {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload.id),
          };
      case types.ADJUST_ITEM_QUANTITY:
          return {
            cart: state.cart.map((item) => item.id === action.payload.id ? {...item, quantity: + action.payload.quantity} : item)
          };
      case types.LOAD_CURRENT_ITEM:
          return {
            ...state,
            currentItem: action.payload,
          };
      case types.FETCH_PRODUCTS_REQUEST:
        return {
          ...state,
          loading: true
        }
      case types.FETCH_PRODUCTS_SUCCESS:
        return {
          loading: false,
          products: action.payload,
          error: '',
          cart: [],
          currentItem: null
        }
      case types.FETCH_PRODUCTS_FAILURE:
        return {
          loading: false,
          products: [],
          error: action.payload
        }
      default:
          return state;
  }
  
};






export default shopReducer;