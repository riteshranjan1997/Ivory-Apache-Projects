import React from "react"
import {useState,useEffect} from "react"

import {useDispatch, useSelector} from "react-redux"
import {restaurantsRequest} from "../../redux/app/action"

import Filter from "./Filter";
import Bar from "../common/AppBar"
import RestaurantCardDiv from "./RestaurantCardDiv";

export default function RestaurantListingPage() {
  const dispatch = useDispatch();
  const userAddress = useSelector((state) => state.app.userAddress);
  const isError = useSelector((state) => state.app.isError);


  useEffect(()=>{
    dispatch(restaurantsRequest())
},[])

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
        <Bar addressModel="true"/>
        </div>
      </div>

      <div className="row">
        <div className="col">
            <Filter/>
        </div>
        <div className="col">
          <RestaurantCardDiv/>
        </div>
      </div>
      
    </div>
  );
}
