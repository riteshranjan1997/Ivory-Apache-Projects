import React from "react";
import axios from "axios";
import {Link} from "react-router-dom" 
import { useEffect, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import Styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import {
  UpdateUserAppAddress,
  UpdateUserGioLocation,
} from "../../redux/app/action";

const useStyles = makeStyles({
  root: {
    // fontFamily: "sans-serif",
    height: "312px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    backgroundImage: `url("https://res.cloudinary.com/grubhub-marketing/image/upload/f_auto,fl_lossy,q_80/v1538431627/Homepage_Desktop_0018_Pizza_2x_qshvvo.jpg")`,
  },
  title: {
    fontWeight: "700",
    color: "white",
  },

  tagBottom: {
    border: "1px solid white",
    padding: "10px",
    width: "max-content",
    wordWrap: "break-word",
    fontWeight: "bolder",
    textAlign: "center",
    position: "relative",
    borderRadius: "10px",
    fontSize: "25px",
    top: "-550px",
    left: "20px",
    background: "white",
    opacity: 0.6,
  },
  seeAllButton: {
    position: "relative",
    top: "-180px",
    padding: "10px",
    borderRadius: "5px",
    color: "black",
  },
});

const LocationWrapper = Styled.div`    
    width:280px;
    position: absolute;
    z-index:10;
    left:98px;
    top:50px;
    li{
      width:280px;
      background-color:white;
        padding:10px;
        border:1px solid #E0E0E0;
        border-top:none;
    }
    ul{        
        position:relative;
        left:-38px;
        top :-3px;
    }
    ul li:hover {
        background : #2b8282;
        color : white;
    }
`;

export default function SearchComponent() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const selectedAddress = useSelector(state => state.app.userAddress)

  const [addressQuery, setAddressQuery] = useState("");
  const [cuisineQuery, setcuisineQuery] = useState("");
  const [suggestedAddress, setsuggestedAddress] = React.useState([]);

  const handleLocationUpdate = () => {
    if(selectedAddress !== ""){
      dispatch(UpdateUserAppAddress(addressQuery));
      dispatch(UpdateUserGioLocation(addressQuery));
    }
  };

  useEffect(() => {
    return axios
      .get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${addressQuery}.json?limit=5&access_token=pk.eyJ1Ijoic291bmRhcnlhbWVjc2UiLCJhIjoiY2toMmUxZHBoMGJtdDJ3cGNqOWhmbTJqaiJ9.sZeF_rzMTfs2fPBA4JsHxQ`
      )
      .then((res) => setsuggestedAddress(res.data.features))
      .catch((err) => console.log(err));
  }, [addressQuery]);

  return (
    <div className={`container-fluid ${classes.root}`}>
      <div className="row">
        <div className="col">
          <div
            className="container"
            style={{ width: "60%", marginTop: "50px", fontFamily: "Poppins" }}
          >
            <div className="row">
              <div className="col">
                <h2 style={{ fontWeight: "700", color: "white" , marginTop:"50px"}}>
                  Who delivers in your neighborhood?
                </h2>
              </div>
            </div>

            {/* <div className="row">

              <div className="col">
              </div>

              <div className="col">
              </div>
              
            </div> */}

            <div className="row">
              <div className="col-9">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <button class="input-group-text" id="basic-addon1">
                      <AccessTimeIcon style={{ marginRight: "10px" }} /> ASAP
                    </button>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter street address"
                    value={addressQuery}
                    onChange={(e) => setAddressQuery(e.target.value)}
                    style={{ padding: "25px 16px" }}
                  />
                  <LocationWrapper>
                    <ul style={{ listStyleType: "none", textAlign: "left" }}>
                      {addressQuery &&
                        suggestedAddress &&
                        suggestedAddress.map((item, i) => (
                          <>
                            {/* {i>=active && i<=active+4? */}
                            <li
                              className={`dropDown`}
                              // data-toggle="modal"
                              // data-target="#exampleModal"
                              key={item.id}
                              onClick={(e) => {
                                setAddressQuery(item.place_name);
                              }}
                            >
                              {item.place_name}
                            </li>
                          </>
                        ))}
                    </ul>
                  </LocationWrapper>
                  <input
                    type="text"
                    class="form-control"
                    value={cuisineQuery}
                    placeholder="Enter Cuisine"
                    onChange={(e) => setcuisineQuery(e.target.value)}
                    style={{ padding: "25px 16px" }}
                  />
                </div>
              </div>

              <div className="col">
                <button
                  className="btn"
                  style={{
                    backgroundColor: "#2b8492",
                    color: "white",
                    fontFamily: "Poppins",
                    padding: "12px 16px",
                    borderRadius: "7px",
                    fontWeight: "700",
                  }}
                  onClick={handleLocationUpdate}
                >
                 <Link to="/search" style={{color:"inherit", textDecoration:"none"}}> Find Food </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
