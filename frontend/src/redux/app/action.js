import {
    UPDATE_ADDRESS,
    UPDATE_GIOLOCATION,
    UPDATE_CUISINE,
    FETCH_RESTAURANTS_DATA_REQUEST,
    FETCH_RESTAURANTS_DATA_SUCCESS,
    FETCH_RESTAURANTS_DATA_FAILURE,
} from "./actionTypes"

import axios from "axios"

export const UpdateUserAppAddress = (payload) => ({
    type: UPDATE_ADDRESS,
    payload
})

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
    axios.get("http://localhost:5000/api/")
        .then((res) => {
            dispatch(restaurantsDataSuccess(res.data))
        })
        .catch((err) => {
            dispatch(restaurantsDataFailure(err.data))
        });

    }