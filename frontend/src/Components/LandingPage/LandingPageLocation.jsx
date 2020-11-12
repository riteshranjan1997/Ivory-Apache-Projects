import React from "react";
import { useEffect } from "react";
import { UpdateUserAppAddress,fetchGioLocation } from "../../redux/app/action";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Link, Redirect } from "react-router-dom";
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
    width:250px;
    
    li{
        width:248px;
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

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    flexGrow: 1,
    marginTop: "-8px",
  },
  paper: {
    marginTop: "8px",
  },
  // control: {
  //   padding: theme.spacing(2),
  // },
  signInBar: {
    color: "#2b8282",
    fontSize: "18px",
    fontWeight: "700",
    marginTop: "80px",
    marginLeft: "50%",
  },

  button: {
    background: "#2b8282",
    color: "white",
    marginLeft: "5px",
    padding: "15px",
  },
  logo: {
    height: "120px",
    width: "180px",
    position: "absolute",
    top: "100px",
  },
  logo2: {
    width: "350px",
    position: "absolute",
    bottom: "-160px",
    left: "400px",
  },
}));

//Added Location part,Logo and Image

function LandingPageLocation() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [query, setQuery] = React.useState("");
  const [data, setData] = React.useState([]);
  console.log(data);
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
    dispatch(fetchGioLocation(query))
  };

  return (
    <Grid container className={classes.root} spacing={1}>
      <Grid item xs={12} md={6}>
        <Grid container justify="center" spacing={1}>
          <Box
            className={classes.paper}
            display={{ xs: "none", sm: "none", md: "block" }}
          >
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="FrontImage"
                  // display={{ xs: 'none', sm: 'none', md: 'block'}}
                  image="https://media-cdn.grubhub.com/image/upload/c_scale,w_1650/q_50,dpr_auto,f_auto,fl_lossy,c_crop,e_vibrance:20,g_center,h_900,w_800/v1539269005/Onboarding/SL/burger-and-fries.jpg"
                  title="LandingPageImage"
                />
              </CardActionArea>
            </Card>
          </Box>
          <img
            className={classes.logo}
            src="https://res.cloudinary.com/grubhub-assets/image/upload/v1576524886/Seamless_logo_flxqyg.svg"
            alt="logo"
          />
          <img
            className={classes.logo2}
            src="https://media-cdn.grubhub.com/image/upload/dpr_auto,f_auto,fl_lossy/v1539202744/Onboarding/SL/treat-yourself-SL.png"
            alt="logo"
          />
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid container justify="center" spacing={2}>
          <div className="container">
            <div className="row">
              <div className={`col ${classes.signInBar}`}>
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
              </div>
            </div>
          </div>

          <div className="container" style={{marginTop:"30%", width:"70%"}}>
            <div className="row">
              <div className="col">
                <h1 style={{fontSize:"42px", fontWeight:"700"}}>
                  Seamless food delivary every time
                </h1>
              </div>
            </div>

            <div className="row my-2">
              <div className="col">
                
              <form>
              <TextField
                id="outlined-basic"
                label="Enter street address or zipcode"
                variant="outlined"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{ width: "350px" }}
              />

              <Link to="/search">
                <Button
                  variant="contained"
                  onClick={handleLocationUpdate}
                  className={classes.button}
                >
                  Find Food
                </Button>
              </Link>
            </form>
            <LocationWrapper>
              <ul style={{ listStyleType: "none", textAlign: "left" }}>
                {query &&
                  data &&
                  data.map((item, i) => (
                    <>
                      {/* {i>=active && i<=active+4? */}
                      <li
                        className={`dropDown`}
                        // data-toggle="modal"
                        // data-target="#exampleModal"
                        key={item.id}
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

              </div>
            </div>

          </div>

        </Grid>
      </Grid>
    </Grid>
  );
}

export default LandingPageLocation;
