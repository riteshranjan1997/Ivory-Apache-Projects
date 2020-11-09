import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import authreducer from "./Auth/authReducer"
import AppReducer from "./app/AppReducer"
import thunk from "redux-thunk";

const rootReducer = combineReducers({auth:authreducer, app:AppReducer});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);