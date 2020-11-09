import React, {useEffect} from "react";
import axios from "axios"
import Styled from 'styled-components';
import { fade, makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core"; 
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import Modal from "@material-ui/core/Modal";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Avatar from "@material-ui/core/Avatar";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import CloseIcon from "@material-ui/icons/Close";
import Fade from "@material-ui/core/Fade";

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
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
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
  const [addressmodelStatus, setAddressModelStatus] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [addressquery, setAddressQuery] = React.useState("");
  const [suggestedAddress, setsuggestedAddress] = React.useState([]);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const handleAddressModelOpen = () => {
    setAddressModelStatus(true);
  };

  const handleAddressModelclose = () => {
    setAddressModelStatus(false);
  };

  let selectedAddress = "Mumbai";
  let userFirstname = "Ritesh";

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

          <Button variant="contained" className={classes.button}>
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

  useEffect(() => {
    return axios
      .get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${addressquery}.json?limit=5&access_token=pk.eyJ1Ijoic291bmRhcnlhbWVjc2UiLCJhIjoiY2toMmUxZHBoMGJtdDJ3cGNqOWhmbTJqaiJ9.sZeF_rzMTfs2fPBA4JsHxQ`
      )
      .then((res) => setsuggestedAddress(res.data.features))
      .catch((err) => console.log(err));
  }, [addressquery]);

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.navbar}>
        <div className="row">
          <div className="col">
            <img
              className={classes.logo}
              src="https://res.cloudinary.com/grubhub-assets/image/upload/v1576524886/Seamless_logo_flxqyg.svg"
              alt="company logo"
            />
          </div>
          <div className="col">
            {props.addressModel ? (
              <h6 onClick={handleAddressModelOpen}>
                <LocationOnIcon />
                Delivery ASAP <spam>to</spam>{" "}
                {selectedAddress == "" ? "Enter an address" : selectedAddress}
                <ExpandMoreIcon />
              </h6>
            ) : null}
          </div>
          <div className="col">
            <p>
              <Avatar>{userFirstname[0]}</Avatar>Hi,{" " + userFirstname}!{" "}
              <ExpandMoreIcon />
            </p>
          </div>

          <div className="col">
            <NotificationsIcon />
          </div>

          <div className="col">
            <LocalMallIcon />
          </div>
        </div>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <Modal
        open={addressmodelStatus}
        onClose={handleAddressModelclose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        closeAfterTransition
      >
        {addressModel}
      </Modal>
    </div>
  );
}
