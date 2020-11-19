import {
  REGISTER_USERS_REQUEST,
  REGISTER_USERS_SUCCESS,
  REGISTER_USERS_FAILURE,
  LOGIN_USERS_REQUEST,
  LOGIN_USERS_SUCCESS,
  LOGIN_USERS_FAILURE,
  LOGIN_WITH_GOOGLE_REQUEST,
  LOGIN_WITH_GOOGLE_SUCCESS,
  LOGIN_WITH_GOOGLE_FAILURE,
  UPDATE_USER_DETAILS_REQUEST,
  UPDATE_USER_DETAILS_SUCCESS,
  UPDATE_USER_DETAILS_FAILURE,
  ADD_ADDRESS_REQUEST,
  ADD_ADDRESS_SUCCESS,
  ADD_ADDRESS_FAILURE,
  DELETE_ADDRESS_REQUEST,
  DELETE_ADDRESS_SUCCESS,
  DELETE_ADDRESS_FAILURE,
  FETCH_USER_DATA__REQUEST,
  FETCH_USER_DATA__SUCCESS,
  FETCH_USER_DATA__FAILURE,
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
import axios from "axios";

// for register User
export const registerUserRequest = () => ({
  type: REGISTER_USERS_REQUEST,
});

export const registerUserSuccess = (payload) => ({
  type: REGISTER_USERS_SUCCESS,
  payload,
});

export const registerUserFailure = (payload) => ({
  type: REGISTER_USERS_FAILURE,
  payload,
});

export const registerRequest = (payload) => (dispatch) => {
  console.log(payload);
  dispatch(registerUserRequest());
  fetch("http://localhost:5001/api/user/register", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ ...payload }),
  })
    .then((res) => res.json())
    .then((res) => {
      dispatch(registerUserSuccess(res));
    })
    .catch((err) => {
      dispatch(registerUserFailure(err));
    });
};

// for login user
export const loginUserRequest = () => ({
  type: LOGIN_USERS_REQUEST,
});

export const loginUserSuccess = (payload) => ({
  type: LOGIN_USERS_SUCCESS,
  payload,
});

export const loginUserFailure = (payload) => ({
  type: LOGIN_USERS_FAILURE,
  payload,
});

export const loginRequest = (payload) => (dispatch) => {
  dispatch(loginUserRequest());
  return fetch("http://localhost:5001/api/user/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ ...payload }),
  })
    .then((res) => res.json())
    .then((res) => {
      if (!res.error) {
        console.log(res);
        dispatch(loginUserSuccess(res));
      } else {
        dispatch(loginUserFailure(res));
      }
    })
    .catch((err) => {
      console.log("in login user failure");
      dispatch(loginUserFailure(err));
    });
};

// for google auth (both for register and login)
export const googelLoginUserRequest = () => ({
  type: LOGIN_WITH_GOOGLE_REQUEST,
});

export const googelLoginUserSuccess = (payload) => ({
  type: LOGIN_WITH_GOOGLE_SUCCESS,
  payload,
});

export const googelLoginUserFailure = (payload) => ({
  type: LOGIN_WITH_GOOGLE_FAILURE,
  payload,
});

export const googleLoginRequest = (payload) => (dispatch) => {
  console.log(payload);
  dispatch(loginUserRequest());
  axios({
    method: "POST",
    url: "http://localhost:5001/api/user/googleLogin",
    data: { ...payload },
  })
    .then((res) => {
      dispatch(loginUserSuccess(res.data));
    })
    .catch((err) => {
      dispatch(loginUserFailure(err));
    });
};

// use for fetch user data
export const fetchUserDataRequest = () => ({
  type: FETCH_USER_DATA__REQUEST,
});

export const fetchUserDataSuccess = (payload) => ({
  type: FETCH_USER_DATA__SUCCESS,
  payload,
});

export const fetchUserDataFailure = (payload) => ({
  type: FETCH_USER_DATA__FAILURE,
  payload,
});

export const UserDataRequest = (payload) => (dispatch) => {
  dispatch(fetchUserDataRequest());
  return fetch("", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ ...payload }),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      dispatch(fetchUserDataSuccess(res));
    })
    .catch((err) => {
      dispatch(fetchUserDataFailure(err));
    });
};

// editing profile data of user
export const updateUserRequest = () => ({
  type: UPDATE_USER_DETAILS_REQUEST,
});

export const updateUserSuccess = (payload) => ({
  type: UPDATE_USER_DETAILS_SUCCESS,
  payload,
});

export const updateUserFailure = (payload) => ({
  type: UPDATE_USER_DETAILS_FAILURE,
  payload,
});

export const userUpdateRequest = (payload, accessToken) => (dispatch) => {
  console.log(payload, accessToken, "action");
  dispatch(updateUserRequest());
  return fetch("http://localhost:5001/api/settings/profile", {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
    body: JSON.stringify({ ...payload }),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      dispatch(updateUserSuccess(res));
    })
    .catch((err) => {
      dispatch(updateUserFailure(err));
    });
};

// axios.put("http://localhost:5001/api/settings/profile", payload, {
//     headers:{
//         Authorization: "Bearer " + accessToken
//     }}
//     )

// for adding new address to the user account
export const addAddressRequest = () => ({
  type: ADD_ADDRESS_REQUEST,
});

export const addAddressSuccess = (payload) => ({
  type: ADD_ADDRESS_SUCCESS,
  payload,
});

export const addAddressFailure = (payload) => ({
  type: ADD_ADDRESS_FAILURE,
  payload,
});

export const AddressRequest = (payload, accessToken) => (dispatch) => {
  dispatch(addAddressRequest());
  return fetch("http://localhost:5001/api/settings/addAddress", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
    body: JSON.stringify({ ...payload }),
  })
    .then((res) => res.json())
    .then((res) => {
      dispatch(addAddressSuccess(res));
    })
    .catch((err) => {
      dispatch(addAddressFailure(err));
    });
};

export const deleteAddressRequest = () => ({
  type: DELETE_ADDRESS_REQUEST,
});

export const deleteAddressSuccess = (payload) => ({
  type: DELETE_ADDRESS_SUCCESS,
  payload,
});

export const deleteAddressFailure = (payload) => ({
  type: DELETE_ADDRESS_FAILURE,
  payload,
});

export const AddressDeleteRequest = (payload, accessToken) => (dispatch) => {
  dispatch(deleteAddressRequest());
  return fetch("http://localhost:5001/api/settings/deleteAddress", {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
    body: JSON.stringify({ ...payload }),
  })
    .then((res) => res.json())
    .then((res) => {
      dispatch(deleteAddressSuccess(res));
    })
    .catch((err) => {
      dispatch(deleteAddressFailure(err));
    });
};

export const addPaymentRequest = () => ({
  type: DELETE_ADDRESS_REQUEST,
});

export const addPaymentSuccess = (payload) => ({
  type: DELETE_ADDRESS_SUCCESS,
  payload,
});

export const addPaymentFailure = (payload) => ({
  type: DELETE_ADDRESS_FAILURE,
  payload,
});

export const PaymentCardAddRequest = (payload, accessToken) => (dispatch) => {
  dispatch(addPaymentRequest());
  console.log(payload, accessToken, "in action");
  return fetch("http://localhost/5001/api/settings/addCard", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
    body: JSON.stringify({ ...payload }),
  })
    .then((res) => res.json())
    .then((res) => {
      dispatch(addPaymentSuccess(res));
    })
    .catch((err) => {
      dispatch(addPaymentFailure(err));
    });
};

// logging out user
export const logoutUser = () => ({
  type: LOGOUT_USER,
});

// for handdling errors
// export const handleError = () => dispatch => {
//     setTimeout(function () {
//         dispatch(removerAuthError())
//     }, 4000)
// }

export const removeAuthError = () => ({
  type: REMOVE_ERROR,
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
    .post("http://localhost:5001/api/cart/addToCart", payload, {
      headers: {
        Authorization: "Bearer " + access_token,
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
  fetch("http://localhost:5001/api/cart/editCart", {
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
export const deleteRequest = (payload, access_token) => (dispatch) => {
  console.log(payload);
  dispatch(deleteCartRequest());
  axios
    .post("http://localhost:5001/api/cart/deleteFromCart", payload, {
      headers: {
        Authorization: "Bearer " + access_token,
      },
    })
    .then((res) => {
      dispatch(deleteCartSuccess(res));
    })
    .catch((err) => {
      dispatch(deleteCartFailure(err));
    });
};
