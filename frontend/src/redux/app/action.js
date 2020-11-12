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
            UpdateUserGioLocation(payload)
 return  {
        type: UPDATE_ADDRESS,
            payload
    }
}


export const UpdateUserGioLocation =  (payload) =>(dispatch) =>{

    console.log(payload,"fetching long,")  

    return axios({
        method: "get",
        url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${payload}.json`,
        params: {
          access_token:
            "pk.eyJ1Ijoic291bmRhcnlhbWVjc2UiLCJhIjoiY2toMmUxZHBoMGJtdDJ3cGNqOWhmbTJqaiJ9.sZeF_rzMTfs2fPBA4JsHxQ",
          country: "IN",
        },
      })
      .then(res => dispatch(updateGioLocation(res.data.features[1].geometry.coordinates)))
      .catch(err => console.log(err,"from err fetch long"))    
}

export const updateGioLocation =(payload) =>({
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
    console.log(payload)
    dispatch(restaurantsDataRequest())
    return axios({
        method:"POST",
        url:"http://localhost:5000/api/restaurant/lets-eat",
        data:{
            longitude:payload[1],
            latitude:payload[0]
        }
      })
        .then((res) => {
            console.log(res)
            // dispatch(restaurantsDataSuccess(res.data))
        })
        .catch((err) => {
            dispatch(restaurantsDataFailure(err))
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