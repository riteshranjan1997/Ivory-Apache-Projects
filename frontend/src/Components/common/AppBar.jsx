import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  UpdateUserAppAddress,
  UpdateUserGioLocation,
  restaurantsRequest,
} from "../../redux/app/action";
import { logoutUser } from "../../redux/Auth/action";
import LoginModel from "./LoginModel";
import Styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Modal from "@material-ui/core/Modal";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Avatar from "@material-ui/core/Avatar";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import CloseIcon from "@material-ui/icons/Close";
import Fade from "@material-ui/core/Fade";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { deleteRequest } from "../../redux/Auth/action";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  logo: {
    width: "120px",
    marginTop: "-5px",
  },
  addressModel: {
    width: "400px",
    height: "400px",
    backgroundColor: "white",
    border: "none",
    outline: "none",
  },
  grow: {},
  navbar: {
    backgroundColor: "white",
    color: "black",
    height: "50px",
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
  LocatePlaces: {
    display: "flex",
    alignItems: "center",
  },
  searchField: {
    marginLeft: "10px",
    border: "none",
    outline: "none",
  },
  input: {
    padding: "10px",
    color: "grey",
    "&:hover": {
      border: "2px solid black",
      borderRadius: "5px",
    },
  },
  inputBar: {
    marginLeft: "200px",
  },
  menuDetails: {
    display: "flex",
    flexDirection: "column",
    marginRight: "10px",
  },
  menuRow: {
    display: "flex",
    justifyContent: "space-around",
    color: "#2B8282",
    padding: "10px",
  },
  menuIcon: {
    fontSize: "30px",
    textAlign: "center",
  },
  boxshadow: {
    borderRadius: "0px",
    background: "#55b9f3",
    boxShadow: " -1px -1px 8px black",
  },
}));

const LocationWrapper = Styled.div`    
    width:250px;
    
    li{
        width:360px;
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
  const userData = useSelector((state) => state.auth.user_data);
  const selectedAddressFromStore = useSelector(
    (state) => state.app.userAddress || ""
  );
  const theme = useTheme();
  const selectedGioLocationFromStore = useSelector((state) => {
    if (state.app.userGioLocation) {
      return [
        state.app.userGioLocation.longitude,
        state.app.userGioLocation.lattitude,
      ];
    } else {
      return [];
    }
  });
  const [addressquery, setAddressQuery] = useState("");
  const [selectedAddress, setSelectedAddress] = useState({});
  const [suggestedAddress, setsuggestedAddress] = useState([]);
  const [open, setOpen] = useState(false);
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));

  const cart = useSelector((state) => state.auth.user_data.cart);
  console.log("in app bar CART is ", cart);

  const access_token = useSelector((state) => state.auth.access_token);
  useEffect(() => {
    return axios
      .get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${addressquery}.json?limit=5&access_token=pk.eyJ1Ijoic291bmRhcnlhbWVjc2UiLCJhIjoiY2toMmUxZHBoMGJtdDJ3cGNqOWhmbTJqaiJ9.sZeF_rzMTfs2fPBA4JsHxQ`
      )
      .then((res) => setsuggestedAddress(res.data.features))
      .catch((err) => console.log(err));
  }, [addressquery]);

  const isAuth = useSelector((state) => state.auth.isAuth);
  if (!isAuth) {
    return <Redirect to="/" />;
  }

  const handleLocationUpdate = () => {
    if (selectedAddress !== []) {
      dispatch(UpdateUserAppAddress(selectedAddress.place_name));
      dispatch(UpdateUserGioLocation(selectedAddress.geometry.coordinates));
      handleClose();
      setTimeout(() => {
        let longitude = selectedAddress.geometry.coordinates[0];
        let lattitude = selectedAddress.geometry.coordinates[1];
        dispatch(
          restaurantsRequest({ longitude: longitude, lattitude: lattitude })
        );
      }, 100);
    }
  };

  const handleDelete = (payload) => {
    dispatch(deleteRequest(payload, access_token));
  };
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

  // const getUserGeoLocation = () => {
  //   navigator.geolocation.getCurrentPosition(success, error);

  //   function success(pos) {
  //     axios
  //       .get(
  //         `https://api.mapbox.com/geocoding/v5/mapbox.places/${pos.coords.longitude},${pos.coords.latitude}.json?access_token=pk.eyJ1Ijoicml0ZXNocmFuamFuMTk5NyIsImEiOiJja2gwMjZ5NGowMzJhMnFxbWpxc3kwNmxrIn0._1C2CDnVfnnySzjFo-Zb1A`
  //       )
  //       .then((res) => console.log(res.data))
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //     console.log(pos.coords);
  //   }
  //   function error(err) {
  //     console.log("unable to get location");
  //   }
  // }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addressModel = (
    <Fade in={addressmodelStatus}>
      <div className={classes.addressModel}>
        <CloseIcon
          onClick={handleAddressModelclose}
          style={{ color: "#2B8282", fontSize: "30px", fontWeight: "bold" }}
        />
        <h4 className={classes.modelHeading}>Your order settings</h4>
        <div className={classes.buttons}>
          <Button
            style={{
              backgroundColor: "#2B8282",
              color: "white",
              width: "180px",
              height: "40px",
              borderRadius: "5px  0px 0px 5px",
            }}
          >
            Delivary
          </Button>
          <Button
            style={{
              border: "1px solid #2B8282",
              color: "#2B8282",
              width: "180px",
              height: "40px",
              borderRadius: "0px  5px 5px 0px",
            }}
          >
            PickUp
          </Button>
        </div>

        <div className={classes.design}></div>
        <div style={{ padding: "20px 0px 20px 0px " }}>
          When would You like your order?
        </div>
        <div></div>
        <div>Delivary Address</div>
        <Autocomplete
          disableClearable
          freeSolo
          options={suggestedAddress.map((place) => place.place_name)}
          onChange={(event, value) =>
            setSelectedAddress(() =>
              suggestedAddress.find((place) => place.place_name === value)
            )
          }
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Enter street address or zip code"
              margin="normal"
              variant="outlined"
              value={addressquery}
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
              onChange={(e) => {
                console.log(e.target.value);
                setAddressQuery(e.target.value);
              }}
            />
          )}
        />
        <Button
          onClick={handleLocationUpdate}
          style={{
            backgroundColor: "#2B8282",
            color: "white",
            width: "360px",
            height: "40px",
          }}
        >
          Update
        </Button>
      </div>
    </Fade>
  );

  const loginModel = <LoginModel />;

  // console.log("in app bar",cart.length,cart_items.length,cart,cart_items,(cart.length || cart_items.length))
  return (
    <div
      className={classes.boxshadow}
      style={{ zIndex: 30, width: "100%", position: "fixed" }}
    >
      {/* {isAuth ? handleLoginModelClose() : null } */}
      <div className={classes.dialog}>
        <Dialog
          fullScreen={fullScreen}
          open={open}
          fullWidth="fullwidth"
          maxWidth="xs"
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogContent>{addressModel}</DialogContent>
        </Dialog>
      </div>
      <Modal
        open={logingModelStatus}
        onClose={handleLoginModelClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        closeAfterTransition
      >
        {loginModel}
      </Modal>

      <nav
        class="navbar navbar-light bg-white"
        style={{ position: "sticky", top: 0 }}
      >
        <div class="d-flex  container-fluid">
          <div class="terms-link">
            <Link to="/">
              <img
                className={classes.logo}
                src="../flawless_logo.png"
                alt="company logo"
              />
            </Link>
          </div>

          <div class="p-2 bd-highlight terms-link">
            {props.addressModel ? (
              <h6 onClick={handleAddressModelOpen}>
                <div className={classes.LocatePlaces}>
                  <div>
                    <LocationOnIcon style={{ color: "#2B8282" }} />
                  </div>
                  <div style={{ color: "#2B8282" }} onClick={handleClickOpen}>
                    Delivery ASAP to
                    {selectedAddressFromStore === ""
                      ? " Select a address"
                      : " " + selectedAddressFromStore}
                  </div>
                  <div>
                    <ExpandMoreIcon style={{ color: "#2B8282" }} />
                  </div>
                </div>
              </h6>
            ) : null}
          </div>

          {props.cuisines ? (
            <div className={classes.inputBar}>
              <div className={classes.input}>
                <i className="fas fa-search" style={{ color: "grey" }}></i>
                <input
                  type="text"
                  className={classes.searchField}
                  placeholder="pizza-sushi-chinese"
                />
              </div>
            </div>
          ) : null}

          <div class="ml-auto p-2 bd-highlight">
            <div className="d-flex">
              <div>
                {isAuth ? (
                  <div>
                    <OverlayTrigger
                      trigger="click"
                      key="bottom"
                      placement="bottom"
                      overlay={
                        <Popover id={"popover-positioned-bottom"}>
                          <Popover.Content>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <div className={classes.menuRow}>
                                <Link
                                  to="/account/Past orders"
                                  style={{
                                    color: "#2B8282",
                                    textDecoration: "none",
                                  }}
                                >
                                  <div className={classes.menuDetails}>
                                    <div className={classes.menuIcon}>
                                      <i class="fas fa-history"></i>
                                    </div>
                                    <div>Past orders</div>
                                  </div>
                                </Link>
                                <Link
                                  to="/account/Upcoming orders"
                                  style={{
                                    color: "#2B8282",
                                    textDecoration: "none",
                                  }}
                                >
                                  <div className={classes.menuDetails}>
                                    <div className={classes.menuIcon}>
                                      <i class="fas fa-briefcase"></i>
                                    </div>
                                    <div>Upcoming orders</div>
                                  </div>
                                </Link>
                              </div>
                              <div className={classes.menuRow}>
                                <Link
                                  to="/account/Saved Restaurent"
                                  style={{
                                    color: "#2B8282",
                                    textDecoration: "none",
                                  }}
                                >
                                  <div className={classes.menuDetails}>
                                    <div className={classes.menuIcon}>
                                      <i class="fas fa-bookmark"></i>
                                    </div>
                                    <div>Saved</div>
                                  </div>
                                </Link>
                                <Link
                                  to="/account/Payments"
                                  style={{
                                    color: "#2B8282",
                                    textDecoration: "none",
                                  }}
                                >
                                  <div className={classes.menuDetails}>
                                    <div className={classes.menuIcon}>
                                      <i class="fas fa-money-check"></i>
                                    </div>
                                    <div>Payments</div>
                                  </div>
                                </Link>
                              </div>
                              <div className={classes.menuRow}>
                                <Link
                                  to="/account"
                                  style={{
                                    color: "#2B8282",
                                    textDecoration: "none",
                                  }}
                                >
                                  <div
                                    className={classes.menuDetails}
                                    style={{ marginLeft: "-10px" }}
                                  >
                                    <div className={classes.menuIcon}>
                                      <i class="fas fa-cog"></i>
                                    </div>
                                    <div>Account</div>
                                  </div>
                                </Link>
                                <Link
                                  to="/"
                                  style={{
                                    color: "#2B8282",
                                    textDecoration: "none",
                                  }}
                                >
                                  <div
                                    className={classes.menuDetails}
                                    style={{ marginLeft: "-10px" }}
                                  >
                                    <div className={classes.menuIcon}>
                                      <i class="fas fa-info-circle"></i>
                                    </div>
                                    <div>Help</div>
                                  </div>
                                </Link>
                              </div>
                              <Divider />
                              <div
                                style={{
                                  color: "#2B8282",
                                  textAlign: "center",
                                }}
                                onClick={() => dispatch(logoutUser())}
                              >
                                Not {userData.first_name} ? SignOut
                              </div>
                            </div>
                          </Popover.Content>
                        </Popover>
                      }
                    >
                      <Button
                        style={{
                          width: "233px",
                          border: "none",
                          outline: "none",
                          color: "#2B8282",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            marginTop: "-5px",
                            fontFamily: "esti",
                          }}
                        >
                          <div>
                            <Avatar
                              style={{
                                backgroundColor: "#2B8282",
                                height: "30px",
                                width: "30px",
                              }}
                            >
                              {userData.first_name[0]}
                            </Avatar>
                          </div>
                          <div style={{ marginLeft: "5px", color: "#6b6b83" }}>
                            Hi,{" " + userData.first_name}{" "}
                          </div>
                          <div>
                            <ExpandMoreIcon
                              style={{ color: "#6b6b83", marginLeft: "20px" }}
                            />
                          </div>
                        </div>
                      </Button>
                    </OverlayTrigger>
                  </div>
                ) : props.login ? (
                  <button
                    className="btn btn-outline-success"
                    onClick={handleLoginModelOpen}
                    style={{ color: "#2B8282", marginRight: "20px" }}
                  >
                    Sign in
                  </button>
                ) : null}
              </div>

              <div>
                {props.notifications ? (
                  <OverlayTrigger
                    trigger="click"
                    key="bottom"
                    placement="bottom"
                    overlay={
                      <Popover
                        id={"popover-positioned-bottom"}
                        style={{ maxHeight: "200px", width: "260px" }}
                      >
                        <Popover.Content>
                          <div style={{ display: "flex" }}>
                            <div
                              style={{
                                background: "orange",
                                height: "50px",
                                width: "50px",
                                borderRadius: "5px",
                                padding: "10px",
                                marginRight: "5px",
                                marginTop: "10px",
                              }}
                            >
                              <i
                                class="far fa-clock"
                                style={{ fontSize: "30px", color: "white" }}
                              ></i>
                            </div>
                            <div>
                              <div>
                                <span style={{ fontWeight: "bold" }}>
                                  plan Ahead
                                </span>
                                :Schedule a week of tasty lunches deliveredto
                                you desc
                                <span style={{ color: "#2B8282" }}>
                                  Plan now
                                </span>
                              </div>
                            </div>
                          </div>
                        </Popover.Content>
                      </Popover>
                    }
                  >
                    <NotificationsIcon
                      style={{
                        color: "#2B8282",
                        fontSize: "30px",
                        marginRight: "20px",
                      }}
                    />
                  </OverlayTrigger>
                ) : null}
              </div>

              <div>
                {cart.length === 0
                  ? ["bottom"].map((placement) => (
                      <OverlayTrigger
                        trigger="click"
                        key={placement}
                        placement={placement}
                        className="p-2 bd-highlight m-2"
                        overlay={
                          <Popover
                            style={{ maxHeight: "200px", width: "260px" }}
                          >
                            <Popover.Content>
                              <div
                                style={{
                                  fontSize: "18px",
                                  display: "flex",
                                  flexDirection: "column",
                                }}
                              >
                                <div style={{ alignSelf: "center" }}>
                                  <img
                                    src="https://www.seamless.com/assets/img/seamless/empty-bag.svg"
                                    height="100px"
                                    width="100px"
                                    alt="Empty Bag"
                                  />
                                </div>
                                <div
                                  style={{
                                    fontSize: "20px",
                                    fontWeight: "bolder",
                                    color: "grey",
                                    alignSelf: "center",
                                  }}
                                >
                                  Your Bag is empty
                                </div>
                              </div>
                            </Popover.Content>
                          </Popover>
                        }
                      >
                        <div variant="secondary">
                          <LocalMallIcon
                            style={{ color: "#2B8282", fontSize: "30px" }}
                          />
                        </div>
                      </OverlayTrigger>
                    ))
                  : ["bottom"].map((placement) => (
                      <OverlayTrigger
                        trigger="click"
                        key={placement}
                        placement={placement}
                        className="p-2 bd-highlight m-2"
                        overlay={
                          <Popover
                            style={{ minxHeight: "200px", width: "260px" }}
                          >
                            <Popover.Content>
                              <div
                                style={{
                                  fontSize: "18px",
                                  display: "flex",
                                  flexDirection: "column",
                                  padding: "10px",
                                }}
                              >
                                <div className="mb-2">
                                  <b>Your Order</b>
                                </div>
                                {/* { cart.length>0 ? :auth_cart.length > 0? : } */}
                                {cart &&
                                  cart.map((item) => (
                                    <div>
                                      <div
                                        style={{
                                          display: "flex",
                                          fontSize: "14px",
                                          justifyContent: "space-between",
                                        }}
                                      >
                                        <div>{item.quantity}</div>
                                        <div
                                          style={{
                                            color: "#2B8282",
                                            alignSelf: "left",
                                          }}
                                        >
                                          {item.item_name}
                                        </div>

                                        <div>
                                          <i
                                            class="fas fa-trash"
                                            style={{ color: "grey" }}
                                            onClick={(e) => {
                                              console.log("in handle delete");
                                              e.preventDefault();
                                              handleDelete({
                                                restaurant_id:
                                                  item.restaurant_id,
                                                item_id: item.item_id,
                                                quantity: item.quantity,
                                              });
                                            }}
                                          ></i>
                                        </div>

                                        <div>₹{item.price}</div>
                                      </div>
                                      <hr />
                                    </div>
                                  ))}

                                <div
                                  style={{
                                    display: "flex",
                                    fontSize: "12px",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <div>item Subtotal</div>
                                  <div>
                                    {cart &&
                                      cart.reduce(
                                        (a, item) => a + item.price,
                                        0
                                      )}
                                  </div>
                                </div>
                                <hr />
                                <div>
                                  <Link to="/checkout">
                                    <Button
                                      style={{
                                        backgroundColor: "#13AA37",
                                        color: "white",
                                        width: "220px",
                                        height: "40px",
                                        borderRadius: "10px",
                                      }}
                                    >
                                      <span style={{ fontSize: "15.4" }}>
                                        Proceed to Checkout
                                      </span>
                                    </Button>
                                  </Link>
                                </div>
                              </div>
                            </Popover.Content>
                          </Popover>
                        }
                      >
                        <div variant="secondary">
                          <LocalMallIcon
                            style={{
                              color: "#2B8282",
                              fontSize: "30px",
                              zIndex: 1,
                            }}
                          />
                          <span
                            class="badge badge-pill badge-success"
                            style={{
                              position: "relative",
                              right: "10px",
                              top: "-7px",
                              fontSize: "10px",
                            }}
                          >
                            {cart.length}{" "}
                          </span>
                        </div>
                      </OverlayTrigger>
                    ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
