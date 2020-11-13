import {
    UPDATE_ADDRESS,
    UPDATE_GIOLOCATION,
    UPDATE_CUISINE,
    UPDATE_FILTERS,
    FETCH_RESTAURANTS_DATA_REQUEST,
    FETCH_RESTAURANTS_DATA_SUCCESS,
    FETCH_RESTAURANTS_DATA_FAILURE
} from "./actionTypes"


export const initState = {
    isLoading: false,
    userAddress: "",
    userGioLocation: {},
    userCuisine: "",
    userFilter:{},
    restaurantsData: [],
    isError: false,
    activePage:1
}


 const AppReducer=(state = initState, { type, payload }) => {
    switch (type) {
        case UPDATE_ADDRESS:
            return {
                ...state,
                userAddress: payload
            }
        case UPDATE_GIOLOCATION:
            console.log("in reducer", payload)
            return {
                ...state,
                userGioLocation: payload
            }
        case UPDATE_FILTERS:
            return {
                ...state,
                userFilter:payload
            }
        case UPDATE_CUISINE:
            return {
                ...state,
                userCuisine: payload
            }
        case FETCH_RESTAURANTS_DATA_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_RESTAURANTS_DATA_SUCCESS:
            return {
                ...state,
                restaurantsData: payload
            }
        case FETCH_RESTAURANTS_DATA_FAILURE:
            return {
                ...state,
                isError: true
            }
        default:
            return state
    }
}

export default AppReducer
