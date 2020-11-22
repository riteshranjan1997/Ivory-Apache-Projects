import {
  UPDATE_ADDRESS,
  UPDATE_GIOLOCATION,
  UPDATE_CUISINE,
  UPDATE_FILTERS,
  FETCH_RESTAURANTS_DATA_REQUEST,
  FETCH_RESTAURANTS_DATA_SUCCESS,
  FETCH_RESTAURANTS_DATA_FAILURE,
  REMOVE_ERROR,
} from "./actionTypes";

const restaurantdata =
  JSON.parse(localStorage.getItem("savedrestaurantdata")) || [];
const savedUserLocation =
  JSON.parse(localStorage.getItem("savedUserLocation")) || "";
const savedUserGioLocation =
  JSON.parse(localStorage.getItem("savedUserGioLocation")) || {};

export const initState = {
  isLoading: false,
  userAddress: savedUserLocation || "",
  userGioLocation: savedUserGioLocation || {},
  userCuisine: "",
  userFilter: {},
  restaurantsData: restaurantdata || [],
  isError: false,
  activePage: 1,
};

const AppReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case UPDATE_ADDRESS:
      localStorage.setItem("savedUserLocation", JSON.stringify(payload));
      return {
        ...state,
        userAddress: payload,
      };
    case UPDATE_GIOLOCATION:
      localStorage.setItem("savedUserGioLocation", JSON.stringify(payload));
      return {
        ...state,
        userGioLocation: payload,
      };
    case UPDATE_FILTERS:
      return {
        ...state,
        userFilter: payload,
      };
    case UPDATE_CUISINE:
      return {
        ...state,
        userCuisine: payload,
      };
    case FETCH_RESTAURANTS_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_RESTAURANTS_DATA_SUCCESS:
      localStorage.setItem("savedrestaurantdata", JSON.stringify(payload));
      return {
        ...state,
        restaurantsData: payload,
      };
    case FETCH_RESTAURANTS_DATA_FAILURE:
      return {
        ...state,
        isError: true,
      };
    case REMOVE_ERROR:
      return {
        ...state,
        message: "",
        isError: false,
      };

    default:
      return state;
  }
};

export default AppReducer;
