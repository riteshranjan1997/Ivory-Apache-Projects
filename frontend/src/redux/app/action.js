import {
    UPDATE_ADDRESS,
    UPDATE_GIOLOCATION,
    UPDATE_CUISINE,
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
} from "./actionTypes"

import axios from "axios"

export const UpdateUserAppAddress = (payload) => {
    restaurantsRequest()


 return  {
        type: UPDATE_ADDRESS,
            payload
    }
}

export const UpdateUserGioLocation = (payload) => ({
    type: UPDATE_GIOLOCATION,
    payload
})

export const UpdateUserCuisine = (payload) => ({
    type: UPDATE_CUISINE,
    payload
})

export const restaurantsDataRequest = () => ({
    type: FETCH_RESTAURANTS_DATA_REQUEST,
})

export const restaurantsDataSuccess = (payload) => ({
    type: FETCH_RESTAURANTS_DATA_SUCCESS,
    payload
})

export const restaurantsDataFailure = (payload) => ({
    type: FETCH_RESTAURANTS_DATA_FAILURE,
    payload
})


export const restaurantsRequest = payload => dispatch => {
    dispatch(restaurantsDataRequest())
    axios.get("http://localhost:5000/api/restaurant/lets-eat")
        .then((res) => {
            dispatch(restaurantsDataSuccess(res.data))
        })
        .catch((err) => {
            dispatch(restaurantsDataFailure(err.data))
        });

}


export const addToCartRequest = () => ({
    type: ADD_TO_CART_REQUEST,
})

export const addToCartSuccess = (payload) => ({
    type: ADD_TO_CART_SUCCESS,
    payload
})

export const addToCartFailure = (payload) => ({
    type: ADD_TO_CART_FAILURE,
    payload
})

export const addCart = payload => dispatch => {
    dispatch(addToCartRequest())
    axios.get("http://localhost:5000/api/")
        .then((res) => {
            dispatch(addToCartSuccess(res.data))
        })
        .catch((err) => {
            dispatch(addToCartFailure(err.data))
        });

}


export const updateToCartRequest = () => ({
    type: UPDATE_CART_REQUEST,
})

export const updateToCartSuccess = (payload) => ({
    type: UPDATE_CART_SUCCESS,
    payload
})

export const updateToCartFailure = (payload) => ({
    type: UPDATE_CART_FAILURE,
    payload
})

export const updateCart = payload => dispatch => {
    dispatch(updateToCartRequest())
    axios.get("http://localhost:5000/api/")
        .then((res) => {
            dispatch(updateToCartSuccess(res.data))
        })
        .catch((err) => {
            dispatch(updateToCartFailure(err.data))
        });

}