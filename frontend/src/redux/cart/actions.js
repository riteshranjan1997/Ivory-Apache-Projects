import {
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAILURE,
  EDIT_CART_REQUEST,
  EDIT_CART_SUCCESS,
  EDIT_CART_FAILURE,
  DELETE_CART_REQUEST,
  DELETE_CART_SUCCESS,
  DELETE_CART_FAILURE,
} from "./actionTypes";
import { useSelector } from "react-redux";

import axios from "axios";

export const addToCartRequest = () => ({
  type: ADD_TO_CART_REQUEST,
});

export const addToCartSuccess = (payload) => ({
  type: ADD_TO_CART_SUCCESS,
  payload,
});

export const addToCartFailure = (payload) => ({
  type: ADD_TO_CART_FAILURE,
  payload,
});
export const editCartRequest = () => ({
  type: EDIT_CART_REQUEST,
});

export const editCartSuccess = (payload) => ({
  type: EDIT_CART_SUCCESS,
  payload,
});

export const editCartFailure = (payload) => ({
  type: EDIT_CART_FAILURE,
  payload,
});
export const deleteCartRequest = () => ({
  type: DELETE_CART_REQUEST,
});

export const deleteCartSuccess = (payload) => ({
  type: DELETE_CART_SUCCESS,
  payload,
});

export const deleteCartFailure = (payload) => ({
  type: DELETE_CART_FAILURE,
  payload,
});

export const addRequest = (payload, access_token) => (dispatch) => {
  dispatch(addToCartRequest());
  axios
    .post("http://localhost:5000/api/cart/addToCart", payload, {
      headers: {
        Authorization: "Bearer "+access_token,
      },
    })
    .then((res) => {
      dispatch(addToCartSuccess(res));
    // console.log(res)
    })
    .catch((err) => {
      dispatch(addToCartFailure(err));
    });
};

export const editRequest = (payload) => (dispatch) => {
  console.log(payload);
  dispatch(editCartRequest());
  fetch("http://localhost:5000/api/cart/editCart", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ ...payload }),
  })
    .then((res) => res.json())
    .then((res) => {
      dispatch(editCartSuccess(res));
    })
    .catch((err) => {
      dispatch(editCartFailure(err));
    });
};

export const deleteRequest = (payload,access_token) => (dispatch) => {
  console.log(payload);
  dispatch(deleteCartRequest());
  axios
    .post("http://localhost:5000/api/cart/deleteFromCart", payload, {
      headers: {
        Authorization: "Bearer "+access_token,
      },
    })
    .then((res) => {
      dispatch(deleteCartSuccess(res));
    })
    .catch((err) => {
      dispatch(deleteCartFailure(err));
    });
};
