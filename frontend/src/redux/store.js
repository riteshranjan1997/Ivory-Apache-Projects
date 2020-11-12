import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import authReducer from "./Auth/authReducer"
import AppReducer from "./app/AppReducer"
import cartReducer from "./cart/reducer"
import thunk from "redux-thunk";

const rootReducer = combineReducers({auth:authReducer, app:AppReducer,cart:cartReducer});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);