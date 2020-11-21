import {
  UPDATE_ADDRESS,
  UPDATE_GIOLOCATION,
  FETCH_GIO_LOCATION,
  UPDATE_CUISINE,
  UPDATE_FILTERS,
  FETCH_RESTAURANTS_DATA_REQUEST,
  FETCH_RESTAURANTS_DATA_SUCCESS,
  FETCH_RESTAURANTS_DATA_FAILURE,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAILURE,
  UPDATE_CART_REQUEST,
  UPDATE_CART_SUCCESS,
  UPDATE_CART_FAILURE,
  DELETE_CART_ITEM_REQUEST,
  DELETE_CART_ITEM_SUCCESS,
  DELETE_CART_ITEM_FAILURE,
  REMOVE_ERROR,
} from "./actionTypes";

import axios from "axios";

export const UpdateUserAppAddress = (payload) => {
  return {
    type: UPDATE_ADDRESS,
    payload,
  };
};

export const fetchGioLocation = (payload) => (dispatch) => {
  axios({
    method: "get",
    url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${payload}.json`,
    params: {
      access_token:
        "pk.eyJ1IjoibWFuaXNoLWt1bWFyLWRldiIsImEiOiJja2gyOGw4b24wOWhwMnNtemVmeHA2djV0In0.IWI4BNamZ8XXAawc2fuk8w",
      country: "IN",
    },
  })
    .then((res) => {
      dispatch(
        UpdateUserGioLocation(res.data.features[0].geometry.coordinates)
      );
      // let longitude = res.data.features[0].geometry.coordinates[0]
      // let lattitude = res.data.features[0].geometry.coordinates[1]
      // dispatch(restaurantsRequest({longitude,lattitude}))
    })
    .catch((err) => console.log(err, "from err fetch long"));
};

export const removeAppError = () => ({
  type: REMOVE_ERROR,
});

export const UpdateUserGioLocation = (data) => {
  let longitude = data[0];
  let lattitude = data[1];
  return {
    type: UPDATE_GIOLOCATION,
    payload: { longitude, lattitude },
  };
};

export const restaurantsDataRequest = () => ({
  type: FETCH_RESTAURANTS_DATA_REQUEST,
});

export const restaurantsDataSuccess = (payload) => ({
  type: FETCH_RESTAURANTS_DATA_SUCCESS,
  payload,
});

export const restaurantsDataFailure = (payload) => ({
  type: FETCH_RESTAURANTS_DATA_FAILURE,
  payload,
});

export const restaurantsRequest = (payload) => (dispatch) => {
  console.log("restaurent Request", payload);
  dispatch(restaurantsDataRequest());
  axios({
    method: "POST",
    url: "http://ec2-13-127-156-161.ap-south-1.compute.amazonaws.com:5001/api/restaurant/lets-eat",
    data: payload,
  })
    .then((res) => {
      console.log(res.data.data.current);
      dispatch(restaurantsDataSuccess(res.data.data.current));
    })
    .catch((err) => {
      dispatch(restaurantsDataFailure(err));
    });
};

export const updateFilters = (payload) => ({
  type: UPDATE_FILTERS,
  payload,
});

export const UpdateUserCuisine = (payload) => ({
  type: UPDATE_CUISINE,
  payload,
});

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

export const addCart = (payload) => (dispatch) => {
  dispatch(addToCartRequest());
  axios
    .get("http://ec2-13-127-156-161.ap-south-1.compute.amazonaws.com:5001/api/")
    .then((res) => {
      dispatch(addToCartSuccess(res.data));
    })
    .catch((err) => {
      dispatch(addToCartFailure(err.data));
    });
};

export const updateToCartRequest = () => ({
  type: UPDATE_CART_REQUEST,
});

export const updateToCartSuccess = (payload) => ({
  type: UPDATE_CART_SUCCESS,
  payload,
});

export const updateToCartFailure = (payload) => ({
  type: UPDATE_CART_FAILURE,
  payload,
});

export const updateCart = (payload) => (dispatch) => {
  dispatch(updateToCartRequest());
  axios
    .get("http://ec2-13-127-156-161.ap-south-1.compute.amazonaws.com:5001/api/")
    .then((res) => {
      dispatch(updateToCartSuccess(res.data));
    })
    .catch((err) => {
      dispatch(updateToCartFailure(err.data));
    });
};

export const deleteCartRequest = () => ({
  type: DELETE_CART_ITEM_REQUEST,
});

export const deleteToCartSuccess = (payload) => ({
  type: DELETE_CART_ITEM_SUCCESS,
  payload,
});

export const deleteToCartFailure = (payload) => ({
  type: DELETE_CART_ITEM_FAILURE,
  payload,
});

export const DeleteCart = (payload) => (dispatch) => {
  dispatch(deleteCartRequest());
  axios
    .get("http://ec2-13-127-156-161.ap-south-1.compute.amazonaws.com:5001/api/")
    .then((res) => {
      dispatch(deleteToCartSuccess(res.data));
    })
    .catch((err) => {
      dispatch(deleteToCartFailure(err.data));
    });
};
