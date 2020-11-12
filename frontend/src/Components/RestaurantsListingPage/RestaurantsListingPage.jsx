import React from "react";
import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  restaurantsRequest,
  UpdateUserAppAddress,
} from "../../redux/app/action";

import Filter from "./Filter";
import Bar from "../common/AppBar";
import BrowseByCuisine from "../common/BrowseByCuisine"
import RestaurantCardDiv from "./RestaurantCardDiv";
import Footer from "../LandingPage/LandinPageFooter";


export default function RestaurantListingPage() {
  const dispatch = useDispatch();
  const userGioLocation = useSelector((state)=>state.app.userGioLocation)
  const userAddress = useSelector((state) => state.app.userAddress);
  const isError = useSelector((state) => state.app.isError);
  console.log(userGioLocation)
  useEffect(() => {
    // if (userAddress === "") {
    //   dispatch(UpdateUserAppAddress("Chennai, Tamil Nadu, India"));
    //   dispatch(restaurantsRequest({ lattitude: 13.02239444, longitude: 80.24243889 })
    //   );
    // } else {      
      dispatch(restaurantsRequest(userGioLocation));
    // }
  }, []);

  return (
    <>
     
      <Bar addressModel="true"/>
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
