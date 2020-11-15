import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RestaurantCard from "./RestaurantCard";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from '@material-ui/lab/Pagination';

import FreeDelivery from "../SigninLandingPage/FreeDelivary";
import BrowseByCuisine from "../common/BrowseByCuisine";

const useStyles = makeStyles({
  ul: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
  },
});

export default function RestaurantCardDiv(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  let data = useSelector((state) => state.app.restaurantsData);
  let activePage = useSelector((state) => state.app.activePage);
  const [active_page, setActivePage] = useState(1);

  const handlePageChange = (e, page) => {
    setActivePage(page);
    console.log(active_page)
  };

  return (
    <>
      <div className="row" style={{marginTop:"65px"}}>
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

      {/* <div className="row mt-4">
        <div className="col" style={{ margin: "0% 28%", textAlign: "center" }}>
        <Pagination count={10} variant="outlined" shape="rounded" onChange={handlePageChange} />
          <span>
            Page {activePage + " "} of {" " + data.totalpage}
          </span>
        </div>
      </div> */}
    </>
  );
}
