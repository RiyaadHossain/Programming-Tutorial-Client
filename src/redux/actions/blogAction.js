import {
  ADD_CONTENT,
  ADD_TO_HISTORY,
  GET_CONTENT,
  REMOVE_FROM_CART,
  REMOVE_CONTENT,
} from "../actionTypes/actionTypes";

export const addProduct = (blog) => {
  return {
    type: ADD_CONTENT,
    payload: blog,
  };
};

export const removeProduct = (id) => {
  return {
    type: REMOVE_CONTENT,
    payload: id,
  };
};

export const addToHistory = (blog) => {
  return {
    type: ADD_TO_HISTORY,
    payload: blog,
  };
};

export const removeFromCart = (blog) => {
  return {
    type: REMOVE_FROM_CART,
    payload: blog,
  };
};

export const loaded = (blogs) => {
  return {
    type: GET_CONTENT,
    payload: blogs,
  };
};
