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
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import CloseIcon from "@material-ui/icons/Close";
import Fade from "@material-ui/core/Fade";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";


const useStyles = makeStyles((theme) => ({
  logo: {
    width: "105px",
    marginTop:"-5px",
  },
  addressModel: {
    width: "400px",
    maxHeight: "600px",
    backgroundColor: "white",
    border: "none",
    outline: "none",    
  },
  grow: {
    
  },
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
  LocatePlaces:{
    display:"flex",
    alignItems:"center"
  },
  searchField:{
    marginLeft:"10px",
    border:"none",
    outline:"none",
  },
  input:{
    padding:"10px",
    color:"grey",
    "&:hover":{
      border:"2px solid black",
      borderRadius:"5px"
    }
  },
  inputBar:{
    marginLeft:"200px"
  },
  menuDetails:{
    display:"flex",
    flexDirection:"column",
    marginRight:"10px"
  },
  menuRow:{
    display:"flex",
    justifyContent:"space-around",
    color:"#2B8282",
    padding:"10px",
  },
  menuIcon:{
    fontSize:"30px",
    textAlign:"center"
  }
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

  const [addressquery, setAddressQuery] = React.useState("");
  const [suggestedAddress, setsuggestedAddress] = React.useState([]);

  const isAuth = useSelector((state) => state.auth.isAuth);
  const userData = useSelector((state) => state.auth.user_data);
  const selectedAddress = useSelector((state) => state.app.userAddress);
  const [open, setOpen] = React.useState(false);
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));

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
    setOpen(false)
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    };



  const addressModel = (
    <Fade in={addressmodelStatus}>
      <div className={classes.addressModel}>
        <CloseIcon onClick={handleAddressModelclose}
        style={{color:"#2B8282",fontSize:"30px",fontWeight:"bold"}}
        />
         <h4 className={classes.modelHeading}>Your order settings</h4>
              <div className={classes.buttons}>
                  <Button
                  style={{
                      backgroundColor: "#2B8282",
                      color: "white",
                      width: "180px",
                      height:"40px",
                      borderRadius:"5px  0px 0px 5px"
                  }}
                  >
                  Delivary
                  </Button>
                  <Button
                  style={{
                      border: "1px solid #2B8282",
                      color: "#2B8282",
                      width: "180px",
                      height:"40px",
                      borderRadius:"0px  5px 5px 0px"
                  }}
                  >
                  PickUp
                  </Button>
              </div>

              <div className={classes.design}></div>
                <div style={{padding:"20px 0px 20px 0px "}}>When would You like your order?</div>
                <div></div>
                <div>Delivary Address</div>               
        <form>
          <TextField
            id="outlined-basic"
            label="Enter street address or zipcode"
            variant="outlined"
            value={addressquery}
            onChange={(e) => setAddressQuery(e.target.value)}
            style={{ width:"360px"}}
          />
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
        <Button  
            onClick={handleLocationUpdate}                                                      
            style={{
                backgroundColor: "#2B8282",
                color: "white",
                width: "360px",
                height:"40px",                
            }}
            >
            Update
            </Button>
        </form>
        
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
     <div className={classes.dialog}>
          <Dialog
            fullScreen={fullScreen}
            open={open}
            fullWidth="fullwidth"
            maxWidth="xs"
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
            >
            <DialogContent>
                {addressModel}
            </DialogContent>
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



      <nav class="navbar navbar-light bg-white">
        <div class="d-flex  container-fluid">
          
          <div class="terms-link">
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
                <div className={classes.LocatePlaces}>
                    <div><LocationOnIcon style={{color:"#2B8282"}} /></div>
                    <div style={{color:"#2B8282"}} onClick={handleClickOpen}>
                        {selectedAddress == "" ? "Delivery ASAP to" : selectedAddress}
                    </div>
                    <div><ExpandMoreIcon style={{color:"#2B8282"}}/></div>
                  </div>
              </h6>
            ) : null}
          </div>
          <div className={classes.inputBar}>
            <div className={classes.input}>
              <i className="fas fa-search" style={{color:"grey"}}></i>
              <input type="text" className={classes.searchField} placeholder="pizza-sushi-chinese"/>
            </div>
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
              <div>
              <OverlayTrigger
                 trigger="click"
                 key="bottom"
                 placement="bottom"
                 overlay={
                   <Popover id={"popover-positioned-bottom"}>
                     <Popover.Content>
                      <div style={{display:"flex",flexDirection:"column"}}>
                          <div className={classes.menuRow}>
                              <Link to="/account/Past orders" style={{color:"#2B8282",textDecoration:"none"}}>
                                <div className={classes.menuDetails}>
                                  <div className={classes.menuIcon}><i class="fas fa-history"></i></div>
                                  <div>Past orders</div>
                                </div>
                              </Link>
                              <Link to="/account/Upcoming orders" style={{color:"#2B8282",textDecoration:"none"}}>
                                <div className={classes.menuDetails}>
                                  <div className={classes.menuIcon}><i class="fas fa-briefcase"></i></div>
                                  <div>Upcoming orders</div>
                                </div>
                              </Link>
                          </div>
                          <div className={classes.menuRow}>
                            <Link to="/account/Saved Restaurent" style={{color:"#2B8282",textDecoration:"none"}}>
                                <div className={classes.menuDetails}>
                                  <div className={classes.menuIcon}><i class="fas fa-bookmark"></i></div>
                                  <div>Saved</div>
                                </div>
                              </Link>
                              <Link to="/account/Payments" style={{color:"#2B8282",textDecoration:"none"}}>
                                <div className={classes.menuDetails}>
                                  <div className={classes.menuIcon}><i class="fas fa-money-check"></i></div>
                                  <div>Payments</div>
                                </div>
                              </Link>
                          </div>
                          <div className={classes.menuRow}>
                            <Link to="/account" style={{color:"#2B8282",textDecoration:"none"}}>
                                <div className={classes.menuDetails} style={{marginLeft:"-10px"}}>
                                  <div className={classes.menuIcon}><i class="fas fa-cog"></i></div>
                                  <div>Account</div>
                                </div>
                              </Link>
                              <Link to="/" style={{color:"#2B8282",textDecoration:"none"}}>
                                <div className={classes.menuDetails} style={{marginLeft:"-10px"}}>
                                  <div className={classes.menuIcon}><i class="fas fa-info-circle"></i></div>
                                  <div>Help</div>
                                </div>
                              </Link>
                          </div>
                          <Divider/>
                          <div style={{color:"#2B8282",textAlign:"center"}}>SignOut</div>
                      </div>
                     </Popover.Content>
                   </Popover>
                 }
               >
                  <Button
                      style={{
                          backgroundColor: "#2B8282",
                          color: "white",
                          width: "233px",
                          border:"none"
                      }}
                      >
                      Account Details
                      </Button> 
                  </OverlayTrigger>
              </div>

                <div>{props.notifications ? (
                 <OverlayTrigger
                 trigger="click"
                 key="bottom"
                 placement="bottom"
                 overlay={
                   <Popover id={"popover-positioned-bottom"} style={{ maxHeight: "200px", width: "260px" }}>
                     <Popover.Content>
                      <div style={{display:"flex"}}>
                          <div style={{background:"orange",height:"50px",width:"50px",borderRadius:"5px",padding:"10px",marginRight:"5px",marginTop:"10px"}}>
                            <i class="far fa-clock" style={{fontSize:"30px",color:"white"}} ></i>
                          </div>
                          <div>
                            <div><span style={{fontWeight:"bold"}}>plan Ahead</span>:Schedule a week of tasty lunches deliveredto you desc<span style={{color:"#2B8282"}}>Plan now</span></div>
                          </div>
                        </div>
                     </Popover.Content>
                   </Popover>
                 }
               >
              <NotificationsIcon style={{color:"#2B8282",fontSize:"30px",marginRight:"20px"}}/>
              </OverlayTrigger>
                
            ) : null}</div>
              
                <div >{["bottom"].map((placement) => (
                <OverlayTrigger
                  trigger="click"
                  key={placement}
                  placement={placement}
                  className="p-2 bd-highlight m-2"
                  overlay={
                    <Popover style={{ maxHeight: "200px", width: "260px" }}>
                      <Popover.Content>
                        <div style={{ fontSize: "18px",display:"flex",flexDirection:"column" }}>
                          <div style={{alignSelf:"center"}}><img src="https://www.seamless.com/assets/img/seamless/empty-bag.svg" height="100px" width="100px" alt="Empty Bag"/></div>
                          <div style={{fontSize:"20px",fontWeight:"bolder",color:"grey",alignSelf:"center"}}>Your Bag is empty</div>
                        </div>
                      </Popover.Content>
                    </Popover>
                  }
                >
                  <div variant="secondary">
                    <LocalMallIcon style={{color:"#2B8282",fontSize:"30px"}}/>
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
