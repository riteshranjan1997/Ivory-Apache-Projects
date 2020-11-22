import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  restaurantsRequest,
  UpdateUserAppAddress,
} from "../../redux/app/action";
import { Redirect } from "react-router-dom";
import ErrorBar from "../../Components/common/ErrorBar";

import Filter from "./Filter";
import Bar from "../common/AppBar";
import RestaurantCardDiv from "./RestaurantCardDiv";
import Footer from "../LandingPage/LandinPageFooter";

export default function RestaurantListingPage() {
  const dispatch = useDispatch();
  const userGioLocation = useSelector((state) => state.app.userGioLocation);
  const userAddress = useSelector((state) => state.app.userAddress);
  useEffect(() => {
    fetchRestaurantData();
  }, []);

  // const isAuth = useSelector((state) => state.auth.isAuth);

  // if (!isAuth) {
  //   <Redirect to="/" />;
  // }

  console.log(userAddress);
  const fetchRestaurantData = () => {
    if (userAddress === "") {
      dispatch(UpdateUserAppAddress("Chennai, Tamil Nadu, India"));
      dispatch(
        restaurantsRequest({ lattitude: 13.02239444, longitude: 80.24243889 })
      );
    } else {
      dispatch(restaurantsRequest(userGioLocation));
    }
  };

  return (
    <>
      <Bar addressModel="true" notifications="true" login />
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <Filter />
          </div>
          <div className="col-9">
            <RestaurantCardDiv />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
