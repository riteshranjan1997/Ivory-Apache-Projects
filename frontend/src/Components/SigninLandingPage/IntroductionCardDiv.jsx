import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  tag: {
    border: "1px solid white",
    padding: "10px",
    width: "max-content",
    fontWeight: "bolder",
    textAlign: "center",
    position: "relative",
    borderRadius: "10px",
    fontSize: "25px",
    top: "-70px",
    left: "30px",
    background: "white",
    opacity: 0.6,
  },
});

export default function IntroductionCardDiv() {
  const classes = useStyles();

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h4
            className="my-2 mb-4"
            style={{ fontFamily: "Poppins", fontWeight: "700" }}
          >
            Explore our collections
          </h4>
        </div>
        <div className="col-5 mr-5">
          <img
            src="https://res.cloudinary.com/grubhub/image/upload/d_search:browse-images:default.jpg/w_600,h_300,f_auto,g_auto,q_auto:eco,dpr_auto,c_fill/topics_umami_homepage/assets_free_delivery.jpg"
            height="300px"
            width="550px"
            alt=""
          />
          <div className={classes.tag}>Top Rated</div>
        </div>
        <div className=" col-5 ml-5">
          <img
            src="https://res.cloudinary.com/grubhub/image/upload/d_search:browse-images:default.jpg/w_600,h_300,f_auto,g_auto,q_auto:eco,dpr_auto,c_fill/topics_umami_homepage/assets_delicious_deals.jpg"
            height="300px"
            width="550px"
            alt=""
          />
          <div className={classes.tag}>Delicious Deals</div>
        </div>
        {/* <div className="col-3">
            <img src="https://res.cloudinary.com/grubhub-assets/image/upload/d_search:browse-images:default.jpg/w_273,h_566,f_auto,q_auto:eco/v1588201081/home_collection/07_popular-nearyou_273x566-min.jpg" alt=""/>
            <div className={classes.tagBottom}><p>Most popular</p><p> near you </p></div>
            <button style={{background:"white",color:"black",border:"none",width:"200px"}} className={classes.seeAllButton}>See all</button></div>          
        </div> */}

        <div className="col-5 mr-5">
          <img
            src="https://res.cloudinary.com/grubhub/image/upload/d_search:browse-images:default.jpg/w_600,h_300,f_auto,g_auto,q_auto:eco,dpr_auto,c_fill/topics_umami_homepage/assets_new_on_gh.jpg"
            height="300px"
            width="550px"
            alt=""
          />
          <div className={classes.tag}>New on Seamless</div>
        </div>
        <div className=" col-5 ml-5">
          <img
            src="https://res.cloudinary.com/grubhub/image/upload/d_search:browse-images:default.jpg/w_600,h_300,f_auto,g_auto,q_auto:eco,dpr_auto,c_fill/topics_umami_homepage/assets_under_45_minutes.jpg"
            height="300px"
            width="550px"
            alt=""
          />
          <div className={classes.tag}>45 minutes or less</div>
        </div>
      </div>
    </div>
  );
}
