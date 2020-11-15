import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RestaurantCard from "./RestaurantCard";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from '@material-ui/lab/Pagination';
import SortingData from '../common/SortingData'
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
      <div className="row">
        <div className="col">
          <FreeDelivery />
        </div>
      </div>
      <div className="row">
        <div className="col">
            <SortingData/>
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
