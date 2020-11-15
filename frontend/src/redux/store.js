import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import authReducer from "./Auth/authReducer"
import AppReducer from "./app/AppReducer"
import cartReducer from "./cart/reducer"
import thunk from "redux-thunk";
import locationReducer from "./GioLocation/locationReducer"
import filterReducer from './Filtering/filterReducer'

const rootReducer = combineReducers(
  {auth:authReducer, 
    app:AppReducer,
    cart:cartReducer,
    location:locationReducer,
    filter:filterReducer
    });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);