import {
    REGISTER_USERS_REQUEST, REGISTER_USERS_SUCCESS, REGISTER_USERS_FAILURE,
    LOGIN_USERS_REQUEST, LOGIN_USERS_SUCCESS, LOGIN_USERS_FAILURE,
    LOGOUT_USER, REMOVE_ERROR,
} from './actionType'


export const registerUserRequest = () => ({
    type: REGISTER_USERS_REQUEST,
})

export const registerUserSuccess = (payload) => ({
    type: REGISTER_USERS_SUCCESS,
    payload
})

export const registerUserFailure = (payload) => ({
    type: REGISTER_USERS_FAILURE,
    payload
})

export const registerRequest = payload => dispatch => {
    console.log(payload)
    dispatch(registerUserRequest())
    fetch("http://localhost:5000/api/user/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ ...payload }),
      })
        .then((res) => res.json())
        .then((res) => {
            dispatch(registerUserSuccess(res))
        })
        .catch((err) => {
            dispatch(registerUserFailure(err))
        });

    }

export const loginUserRequest = () => ({
    type: LOGIN_USERS_REQUEST,
})

export const loginUserSuccess = (payload) => ({
    type: LOGIN_USERS_SUCCESS,
    payload
})

export const loginUserFailure = (payload) => ({
    type: LOGIN_USERS_FAILURE,
    payload
})

export const loginRequest =  payload => dispatch => {
    dispatch(loginUserRequest())
    return fetch("http://localhost:5000/api/user/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({...payload}),
      })
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
            dispatch(loginUserSuccess(res))
        })
        .catch((err) => {
            dispatch(loginUserFailure(err))
        });
}

export const logoutUser = () => ({
    type: LOGOUT_USER
})


// for handdling errors
export const handleError = () => dispatch => {
    setTimeout(function () {
        dispatch(removerError())
    }, 4000)
}

export const removerError = () => ({
    type: REMOVE_ERROR
})