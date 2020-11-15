import {ADD_TO_CART_REQUEST,
    ADD_TO_CART_SUCCESS,
    ADD_TO_CART_FAILURE,
    EDIT_CART_REQUEST,
    EDIT_CART_SUCCESS,
    EDIT_CART_FAILURE,
    DELETE_CART_REQUEST,
    DELETE_CART_SUCCESS,
    DELETE_CART_FAILURE} from "./actionTypes"


    export const initState = {
        isLoading: false,
        user_data:{},
        cart:[],
        message: "",
        isError: false,
    }
    
    export default (state = initState, { type, payload }) => {
        console.log("in payload reducer",payload)
        switch (type) {    
            case ADD_TO_CART_REQUEST:
                return {
                    ...state,
                    isLoading: true,
                    isError: false,
                }
            case ADD_TO_CART_SUCCESS:
                return {
                    ...state,
                    isLoading: false,
                    isError: payload.error,
                    user_data: payload.data.userData,
                    cart:payload.data.userData.cart,
                    message:payload.message,                    
                }
            case ADD_TO_CART_FAILURE:
                return {
                    ...state,
                    isLoading: false,
                    isError: payload.error,
                    message: payload.message,
                }
                case EDIT_CART_REQUEST:
                    return {
                        ...state,
                        isLoading: true,
                        isError: false,
                    }
                case EDIT_CART_SUCCESS:
                    return {
                        ...state,
                        isLoading: false,
                        isError: payload.error,
                        user_data: payload.data,
                        message:payload.message,
                    }
                case EDIT_CART_FAILURE:
                    return {
                        ...state,
                        isLoading: false,
                        isError: payload.error,
                        message: payload.message,
                    }
                    case DELETE_CART_REQUEST:
                        return {
                            ...state,
                            isLoading: true,
                            isError: false,
                        }
                    case DELETE_CART_SUCCESS:
                        return {
                            ...state,
                            isLoading: false,
                            isError: payload.error,
                            user_data: payload.data.userData,
                            cart:payload.data.userData.cart,
                            message:payload.message,
                        }
                    case DELETE_CART_FAILURE:
                        return {
                            ...state,
                            isLoading: false,
                            isError: payload.error,
                            message: payload.message,
                        }         
                        default:
                return state
        }
    }