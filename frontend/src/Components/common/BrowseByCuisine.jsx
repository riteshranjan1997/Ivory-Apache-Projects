import React from "react";
import Styles from "./LoginModel.module.css";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "../../redux/Auth/action";
import { Redirect, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Card, TextField, Checkbox, Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles({});

export default function BrowseByCuisine() {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
      <div className="container">
        <h5 className={Styles.title}>Sign in with your Seamless account</h5>
        <div className="row">
          <div className="col">
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="..." class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                  <img src="..." class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                  <img src="..." class="d-block w-100" alt="..."/>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
  );
}
