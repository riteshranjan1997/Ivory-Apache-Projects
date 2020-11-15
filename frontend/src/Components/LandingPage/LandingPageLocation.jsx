import React from "react";
import { useEffect } from "react";
import { UpdateUserAppAddress, fetchGioLocation } from "../../redux/app/action";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Link, Redirect } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import Styled from "styled-components";

const LocationWrapper = Styled.div`    
    z-index:20;
    width:"100%"; 
    li{
        padding:10px;
        border:1px solid #E0E0E0;
        border-top:none;
        z-index:20;
    }
    ul{        
        position:relative;
        left:-38px;
        top :-3px;
        z-index:20;
    }
    ul li:hover {
        background : #2b8282;
        color : white;
        z-index:20;
    }
`;

const useStyles = makeStyles((theme) => ({
  root: {},
  coverImg: {
    [theme.breakpoints.up("xs")]: {
      height: "750px",
    },
  },
  gioLocationDiv: {
    padding: "64px 100px",
  },
  signInBar: {
    color: "#2b8282",
    fontSize: "18px",
    fontWeight: "700",
    height: "250px",
    width: "100%",
    textAlign: "right",
    fontFamily: "esti",
    fontSize: "24px",
  },

  button: {
    background: "#2b8282",
    color: "white",
    padding: "15px",
  },

  logo: {
    height: "80px",
    width: "190px",
    position: "absolute",
    top: "100px",
  },
  logo2: {
    width: "350px",
    position: "absolute",
    bottom: "0%",
    left: "25%",
  },
}));

//Added Location part,Logo and Image

function LandingPageLocation() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userGioLocation = useSelector((state) => state.app.userGioLocation);
  const [query, setQuery] = React.useState("");
  const [data, setData] = React.useState([]);
  useEffect(() => {
    return axios
      .get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?limit=5&access_token=pk.eyJ1Ijoic291bmRhcnlhbWVjc2UiLCJhIjoiY2toMmUxZHBoMGJtdDJ3cGNqOWhmbTJqaiJ9.sZeF_rzMTfs2fPBA4JsHxQ`
      )
      .then((res) => setData(res.data.features))
      .catch((err) => console.log(err));
  }, [query]);

  const handleLocationUpdate = () => {
    dispatch(UpdateUserAppAddress(query));
    dispatch(fetchGioLocation(query));
    console.log(userGioLocation, "user gio");
  };

  return (
    <Grid container className={classes.root}>

      <Grid item xs={12} md={6} style={{ height: "65%" }}>
        <Grid container justify="center">
          <CardMedia
            component="img"
            alt="FrontImage"
            className={classes.coverImg}
            image="https://media-cdn.grubhub.com/image/upload/c_scale,w_1650/q_50,dpr_auto,f_auto,fl_lossy,c_crop,e_vibrance:20,g_center,h_900,w_800/v1539269005/Onboarding/SL/burger-and-fries.jpg"
            title="LandingPageImage"
          />
          <img className={classes.logo} src="flawless_logo.png" alt="logo" />
          <img
            className={classes.logo2}
            src="https://media-cdn.grubhub.com/image/upload/dpr_auto,f_auto,fl_lossy/v1539202744/Onboarding/SL/treat-yourself-SL.png"
            alt="logo"
          />
        </Grid>
      </Grid>

      <Grid item xs={12} md={6} className={classes.gioLocationDiv}>

        <Grid container>
          <Grid item className={classes.signInBar} md={12}>
            <p>
              Get Perks in the App{" "}
              <Link
                to="/login"
                style={{
                  marginLeft: "20px",
                  color: "#2b8282",
                  textDecoration: "none",
                }}
              >
                Sign in
              </Link>
            </p>
          </Grid>

          <Grid item md={12}>
            
              <h1
                style={{
                  fontSize: "52px",
                  fontFamily: "esti",
                }}
              >
                flawless food delivary every time
              </h1>
          </Grid>

          <Grid item md={12}>
            <Grid container>
              <Grid item md={7}>
                <TextField
                  autocomplete="false"
                  label="Enter Address"
                  variant="outlined"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  style={{width:"100%"}}
                />
                <LocationWrapper>
                  <ul style={{ listStyleType: "none", textAlign: "left"}}>
                    {query &&
                      data &&
                      data.map((item, i) => (
                        <>
                          <li
                            className={`dropDown`}
                            key={i}
                            onClick={(e) => {
                              setQuery(item.place_name);
                            }}
                          >
                            {item.place_name}
                          </li>
                        </>
                      ))}
                  </ul>
                </LocationWrapper>
              </Grid>

              <Grid item md={4} style={{marginLeft:"10px"}}>
                <Link to="/search">
                  <button
                    variant="contained"
                    onClick={handleLocationUpdate}
                    className={`${classes.button} btn`}
                  >
                    Find Food
                  </button>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

      </Grid>
    </Grid>
  );
}

export default LandingPageLocation;
