import React from "react";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { colors } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    // fontFamily: "sans-serif",
    backgroundImage: `url("https://res.cloudinary.com/grubhub-marketing/image/upload/f_auto,fl_lossy,q_80/v1538431627/Homepage_Desktop_0018_Pizza_2x_qshvvo.jpg")`,
  },
  title: {
    fontWeight: "700",
    color: "white",
  },
});

export default function SearchComponent() {
  const classes = useStyles();

  return (
   <>
      <div className={`container-fluid ${classes.root}`}>
        <div className="row">
          <div className="col">
            <h3 className={classes.title}>
              Who delivers in your neighborhood?
            </h3>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <button
                  class="btn btn-secondary"
                  type="button"
                  id="button-addon1"
                >
                  ASAP
                </button>
              </div>
              <div class="input-group-prepend">
                <input
                  type="text"
                  class="form-control"
                  placeholder=""
                  aria-label="Example text with button addon"
                  aria-describedby="button-addon1"
                />
              </div>
              <input
                type="text"
                class="form-control"
                placeholder=""
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
              />

              <button
                class="btn btn-secondary"
                type="button"
                id="button-addon2"
              >
                Find food
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="conteiner">
        <div className="row">
        <h6>Explore our collections</h6>
          <div className=" col">
            <img src="https://res.cloudinary.com/grubhub/image/upload/d_search:browse-images:default.jpg/w_600,h_300,f_auto,g_auto,q_auto:eco,dpr_auto,c_fill/topics_umami_homepage/assets_free_delivery.jpg" alt=""/>
          </div>
          <div className=" col">
            <img src="https://res.cloudinary.com/grubhub/image/upload/d_search:browse-images:default.jpg/w_600,h_300,f_auto,g_auto,q_auto:eco,dpr_auto,c_fill/topics_umami_homepage/assets_delicious_deals.jpg" alt=""/>
          </div>
          <div className=" col">
            <img src="https://res.cloudinary.com/grubhub-assets/image/upload/d_search:browse-images:default.jpg/w_273,h_566,f_auto,q_auto:eco/v1588201081/home_collection/07_popular-nearyou_273x566-min.jpg" alt=""/>
          </div>

          
        </div>
      </div>


      </>


  );
}