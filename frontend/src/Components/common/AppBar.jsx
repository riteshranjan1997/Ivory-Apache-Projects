import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { UpdateUserAppAddress } from "../../redux/app/action";
import LoginModel from "./LoginModel";
import Styled from "styled-components";
import { fade, makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Modal from "@material-ui/core/Modal";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Avatar from "@material-ui/core/Avatar";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import CloseIcon from "@material-ui/icons/Close";
import Fade from "@material-ui/core/Fade";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

const useStyles = makeStyles((theme) => ({
  logo: {
    width: "105px",
  },
  addressModel: {
    width: "576px",
    height: "407px",
    backgroundColor: "white",
    margin: "auto",
    border: "none",
    outline: "none",
    padding: "16px 12px",
  },
  grow: {
    flexGrow: 1,
  },
  navbar: {
    backgroundColor: "white",
    color: "black",
    height: "70px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
}));

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

export default function Bar(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [addressmodelStatus, setAddressModelStatus] = React.useState(false);
  const [logingModelStatus, setlogingModelStatus] = React.useState(false);

  const [addressquery, setAddressQuery] = React.useState("");
  const [suggestedAddress, setsuggestedAddress] = React.useState([]);

  const isAuth = useSelector((state) => state.auth.isAuth);
  const userData = useSelector((state) => state.auth.user_Data);
  const selectedAddress = useSelector((state) => state.app.userAddress);

  const handleAddressModelOpen = () => {
    setAddressModelStatus(true);
  };

  const handleAddressModelclose = () => {
    setAddressModelStatus(false);
  };

  const handleLoginModelOpen = () => {
    setlogingModelStatus(true);
  };

  const handleLoginModelClose = () => {
    setlogingModelStatus(false);
  };

  const handleLocationUpdate = () => {
    dispatch(UpdateUserAppAddress(addressquery));
    handleAddressModelclose();
  };



  const addressModel = (
    <Fade in={addressmodelStatus}>
      <div className={classes.addressModel}>
        <CloseIcon onClick={handleAddressModelclose} />
        <h5>Your order settings</h5>
        <p>When would you like your order?</p>
        <p>ASAP</p>
        <h6>Delivery address</h6>
        <form>
          <TextField
            id="outlined-basic"
            label="Enter street address or zipcode"
            variant="outlined"
            value={addressquery}
            onChange={(e) => setAddressQuery(e.target.value)}
            style={{ width: "250px" }}
          />

          <Button
            variant="contained"
            className={classes.button}
            onClick={handleLocationUpdate}
          >
            Update
          </Button>
        </form>
        <LocationWrapper>
          <ul style={{ listStyleType: "none", textAlign: "left" }}>
            {addressquery &&
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
      </div>
    </Fade>
  );

  const loginModel = <LoginModel />;

  useEffect(() => {
    return axios
      .get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${addressquery}.json?limit=5&access_token=pk.eyJ1Ijoic291bmRhcnlhbWVjc2UiLCJhIjoiY2toMmUxZHBoMGJtdDJ3cGNqOWhmbTJqaiJ9.sZeF_rzMTfs2fPBA4JsHxQ`
      )
      .then((res) => setsuggestedAddress(res.data.features))
      .catch((err) => console.log(err));
  }, [addressquery]);

  return (
    <div>

      <Modal
        open={addressmodelStatus}
        onClose={handleAddressModelclose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        closeAfterTransition
      >
        {addressModel}
      </Modal>
      <Modal
        open={logingModelStatus}
        onClose={handleLoginModelClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        closeAfterTransition
      >
        {loginModel}
      </Modal>



      <nav class="navbar navbar-light bg-white">
        <div class="d-flex bd-highlight mb-3 container-fluid">
          <div class="p-2 bd-highlight terms-link">
            <Link to="/">
              <img
                className={classes.logo}
                src="https://res.cloudinary.com/grubhub-assets/image/upload/v1576524886/Seamless_logo_flxqyg.svg"
                alt="company logo"
              />
            </Link>
          </div>

          <div class="p-2 bd-highlight terms-link">
            {props.addressModel ? (
              <h6 onClick={handleAddressModelOpen}>
                <LocationOnIcon />
                Delivery ASAP <spam>to</spam>{" "}
                {selectedAddress == "" ? "Enter an address" : selectedAddress}
                <ExpandMoreIcon />
              </h6>
            ) : null}
          </div>

          <div class="ml-auto p-2 bd-highlight">
            <div className="d-flex">
              <div>
                {isAuth ? (
                  <>
                    {" "}
                    <PopupState variant="popover" popupId="demo-popup-popover">
                      {(popupState) => (
                        <div>
                          <Avatar {...bindTrigger(popupState)}>
                            {userData.first_name[0]}
                          </Avatar>
                          <spam {...bindTrigger(popupState)}>
                            Hi,{" " + userData.first_name}!{" "}
                          </spam>
                          <ExpandMoreIcon {...bindTrigger(popupState)} />
                          <Popover
                            {...bindPopover(popupState)}
                            anchorOrigin={{
                              vertical: "bottom",
                              horizontal: "center",
                            }}
                            transformOrigin={{
                              vertical: "top",
                              horizontal: "center",
                            }}
                          >
                            <div>abcd</div>
                          </Popover>
                        </div>
                      )}
                    </PopupState>{" "}
                  </>
                ) : props.login ? (
                  <button
                    className="btn btn-outline-success"
                    onClick={handleLoginModelOpen}
                  >
                    Sign in
                  </button>
                ) : null}
              </div>

                <div>{props.notifications ? (
                <NotificationsIcon />
            ) : null}</div>
              
                <div >{["bottom"].map((placement) => (
                <OverlayTrigger
                  trigger="click"
                  key={placement}
                  placement={placement}
                  className="p-2 bd-highlight m-2"
                  overlay={
                    <Popover style={{ height: "300px", width: "160px" }}>
                      <Popover.Content>
                        <div style={{ fontSize: "18px" }}>
                          cart is empty
                        </div>
                      </Popover.Content>
                    </Popover>
                  }
                >
                  <div variant="secondary">
                    <LocalMallIcon />
                  </div>
                </OverlayTrigger>
              ))}</div>
              
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
