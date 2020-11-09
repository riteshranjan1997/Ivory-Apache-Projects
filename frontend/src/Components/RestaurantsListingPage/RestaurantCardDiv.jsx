import React from "react"
import {useState , useEffect} from "react"
import { useDispatch, useSelector } from "react-redux";
import RestaurantCard from "./RestaurantCard"
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({});

export default function RestaurantCardDiv(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

    return (
      <>
        <div className="conatiner-fluid">
            
        </div>
      </>
    );
  }