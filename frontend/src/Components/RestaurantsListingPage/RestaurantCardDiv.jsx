import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RestaurantCard from "./RestaurantCard";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import SortingData from "../common/SortingData";
import FreeDelivery from "../SigninLandingPage/FreeDelivary";
import BrowseByCuisine from "../common/BrowseByCuisine";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles({
  ul: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
  },
});

export default function RestaurantCardDiv(props) {
  const isAuth = useSelector((state) => state.auth.isAuth);

  if (!isAuth) {
    <Redirect to="/" />;
  }

  return (
    <>
      <div className="row" style={{ marginTop: "65px" }}>
        <div className="col">
          <FreeDelivery />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <SortingData />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <BrowseByCuisine />
        </div>
      </div>
    </>
  );
}
