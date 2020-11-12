import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RestaurantCard from "./RestaurantCard";
import { makeStyles } from "@material-ui/core/styles";

import FreeDelivery from "../SigninLandingPage/FreeDelivary";
import BrowseByCuisine from "../common/BrowseByCuisine";

import Pagination from "react-bootstrap/Pagination";

const useStyles = makeStyles({});

export default function RestaurantCardDiv(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  let data = useSelector((state) => state.app.restaurantsData);

  return (
    <div className="container-fulid">
      <div className="row">
        <div className="col">
          <FreeDelivery />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <BrowseByCuisine />
        </div>
      </div>

      {data !== [] ? (
        data.map((elem) => <RestaurantCard data={elem} />)
      ) : (
        <div className="col">
          <p>No Data</p>
        </div>
      )}

      <div className="row">
        <div className="col" style={{margin:"0% 25%"}}>
          <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item active>{1}</Pagination.Item>

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item>

            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
          <br/>
      <span style={{textAlign:"center"}}>Page {"activePage"} of {"data.totalpage"}</span>

        </div>
      </div>
    </div>
  );
}
