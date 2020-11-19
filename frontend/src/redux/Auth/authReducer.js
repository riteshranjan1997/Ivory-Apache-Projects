import {
  REGISTER_USERS_REQUEST,
  REGISTER_USERS_SUCCESS,
  REGISTER_USERS_FAILURE,
  LOGIN_USERS_REQUEST,
  LOGIN_USERS_SUCCESS,
  LOGIN_USERS_FAILURE,
  UPDATE_USER_DETAILS_REQUEST,
  UPDATE_USER_DETAILS_SUCCESS,
  UPDATE_USER_DETAILS_FAILURE,
  ADD_ADDRESS_REQUEST,
  ADD_ADDRESS_SUCCESS,
  ADD_ADDRESS_FAILURE,
  EDIT_ADDRESS_REQUEST,
  EDIT_ADDRESS_SUCCESS,
  EDIT_ADDRESS_FAILURE,
  DELETE_ADDRESS_REQUEST,
  DELETE_ADDRESS_SUCCESS,
  DELETE_ADDRESS_FAILURE,
  // FETCH_USER_DATA__REQUEST, FETCH_USER_DATA__SUCCESS, FETCH_USER_DATA__FAILURE,
  ADD_PAYMENT_CARD_REQUEST,
  ADD_PAYMENT_CARD_SUCCESS,
  ADD_PAYMENT_CARD_FAILURE,
  LOGOUT_USER,
  REMOVE_ERROR,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAILURE,
  EDIT_CART_REQUEST,
  EDIT_CART_SUCCESS,
  EDIT_CART_FAILURE,
  DELETE_CART_REQUEST,
  DELETE_CART_SUCCESS,
  DELETE_CART_FAILURE,
} from "./actionType";

const savedUser = JSON.parse(localStorage.getItem("savedUser")) || { cart: [] };
const savedAccessToken =
  JSON.parse(localStorage.getItem("savedAccessToken")) || "";

export const initState = {
  isLoading: false,
  user_data: savedUser || { cart: [] },
  message: "",
  isError: false,
  isAuth: savedAccessToken !== "" ? true : false,
  access_token: savedAccessToken || "",
};

export default (state = initState, { type, payload }) => {
  switch (type) {
    // for register and google register
    case REGISTER_USERS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case REGISTER_USERS_SUCCESS:
      localStorage.setItem("savedUser", JSON.stringify(payload.data.userData));
      localStorage.setItem(
        "savedAccessToken",
        JSON.stringify(payload.data.accessToken)
      );
      return {
        ...state,
        isLoading: false,
        isError: payload.error,
        user_data: payload.data.userData,
        access_token: payload.data.accessToken,
        message: payload.message,
        isAuth: true,
      };
    case REGISTER_USERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: payload.error,
        message: payload.message,
      };

    // for login and google login
    case LOGIN_USERS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case LOGIN_USERS_SUCCESS:
      localStorage.setItem("savedUser", JSON.stringify(payload.data.userData));
      localStorage.setItem(
        "savedAccessToken",
        JSON.stringify(payload.data.accessToken)
      );
      return {
        ...state,
        isLoading: false,
        isError: false,
        isAuth: true,
        message: payload.message,
        user_data: payload.data.userData,
        access_token: payload.data.accessToken,
      };
    case LOGIN_USERS_FAILURE:
      console.log("in login users failure", payload);
      return {
        ...state,
        isLoading: false,
        isError: payload.error,
        message: payload.message,
      };

    //  for editing profile
    case UPDATE_USER_DETAILS_REQUEST:
      return {
        ...state,
      };

    case UPDATE_USER_DETAILS_SUCCESS:
      console.log("in update success", payload);
      localStorage.setItem("savedUser", JSON.stringify(payload.data.userData));
      localStorage.setItem(
        "savedAccessToken",
        JSON.stringify(payload.data.accessToken)
      );
      return {
        ...state,
        user_data: payload.data.userData,
        access_token: payload.data.accessToken,
      };

    case UPDATE_USER_DETAILS_FAILURE:
      return {
        ...state,
      };

    // for adding new address to the user profile
    case ADD_ADDRESS_REQUEST:
      return {
        ...state,
      };
    case ADD_ADDRESS_SUCCESS:
      localStorage.setItem("savedUser", JSON.stringify(payload.data));
      return {
        ...state,
        user_data: payload.data,
      };
    case ADD_ADDRESS_FAILURE:
      return {
        ...state,
      };

    // for editing the user selected address
    case EDIT_ADDRESS_REQUEST:
      return {
        ...state,
      };
    case EDIT_ADDRESS_SUCCESS:
      return {
        ...state,
      };
    case EDIT_ADDRESS_FAILURE:
      return {
        ...state,
      };

    // for deleting the user saved address
    case DELETE_ADDRESS_REQUEST:
      return {
        ...state,
      };
    case DELETE_ADDRESS_SUCCESS:
      localStorage.setItem("savedUser", JSON.stringify(payload.data));
      return {
        ...state,
        user_data: payload.data,
      };
    case DELETE_ADDRESS_FAILURE:
      return {
        ...state,
      };

    // for adding payment card to user profile
    case ADD_PAYMENT_CARD_REQUEST:
      return {
        ...state,
      };
    case ADD_PAYMENT_CARD_SUCCESS:
      localStorage.setItem("savedUser", JSON.stringify(payload.data));
      return {
        ...state,
        user_data: payload.data,
      };
    case ADD_PAYMENT_CARD_FAILURE:
      return {
        ...state,
      };

    // for logout the user
    case LOGOUT_USER:
      localStorage.clear();
      return {
        ...state,
        isAuth: false,
        user_data: {},
        access_token: "",
      };

    // handling error
    case REMOVE_ERROR:
      return {
        ...state,
        message: "",
        isError: false,
      };
    case ADD_TO_CART_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case ADD_TO_CART_SUCCESS:
      console.log("in add to cart success", payload);
      localStorage.setItem(
        "savedUser",
        JSON.stringify(payload.data.data.userData)
      );
      return {
        ...state,
        isLoading: false,
        isError: payload.error,
        user_data: payload.data.data.userData,
        cart: payload.data.data.userData.cart,
        message: payload.message,
      };
    case ADD_TO_CART_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: payload.error,
        message: payload.message,
      };
    case EDIT_CART_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case EDIT_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: payload.error,
        user_data: payload.data,
        message: payload.message,
      };
    case EDIT_CART_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: payload.error,
        message: payload.message,
      };
    case DELETE_CART_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case DELETE_CART_SUCCESS:
      localStorage.setItem(
        "savedUser",
        JSON.stringify(payload.data.data.userData)
      );
      return {
        ...state,
        isLoading: false,
        isError: payload.error,
        user_data: payload.data.data.userData,
        cart: payload.data.data.userData.cart,
        message: payload.message,
      };
    case DELETE_CART_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: payload.error,
        message: payload.message,
      };

    default:
      return state;
  }
};
