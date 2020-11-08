import {
    UPDATE_ADDRESS,
    UPDATE_GIOLOCATION,
    UPDATE_CUISINE,
} from "./actionTypes"


export const initState = {
    isLoading: false,
    userAddress: "",
    userGioLocation: "",
    userCuisine:"",
    restaurantsData:[],
    isError: false,
}


export default (state = initState, { type, payload }) => {

    switch (type) {

        case UPDATE_ADDRESS:
            return {
                ...state,
                userAddress: payload
            }
        case UPDATE_GIOLOCATION:
            return {
                ...state,
                userGioLocation: payload
            }
        case UPDATE_CUISINE:
            return {
                ...state,
                userCuisine: payload
            }
        default:
            return state
    }
}

