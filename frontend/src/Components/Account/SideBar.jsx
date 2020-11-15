import React from "react";
import Bar from "../common/AppBar";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";

const drawerWidth = 339;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  menuButton: {
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
  },
  account: {
    marginLeft: "10px",
  },
  sidebar: {
    fontWeight: "bolder",
    fontSize: "14px",
    "&:hover": {
      filter: "brightness(70%)",
    },
  },
  link: {
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

function SideBar(props) {
  const classes = useStyles();

  const drawer = (
    <div style={{ height: "800px" }}>
      <div className={classes.toolbar} />
      <Typography
        style={{ fontFamily: "esti" }}
        className={classes.account}
        variant="h5"
        component="h2"
        align="left"
      >
        Your Account
      </Typography>
      <List>
        {[
          "Profile",
          "Address and Phone",
          "Payments",
          "Past orders",
          "Upcoming orders",
          "Saved Restaurent",
        ].map((text, index) => (
          <ListItem button key={text}>
            <Link to={`/account/${text}`} className={classes.link}>
              <div style={{ color: "#2B8282" }}>
                <Typography className={classes.sidebar}>{text}</Typography>
              </div>
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Grid
      xs={3}
      item
      style={{
        width: "100%",
        fontFamily: "esti",
      }}
    >
      <Paper style={{ padding: "0px 20px", marginTop: "15px" }} elevation={4}>
        {drawer}
      </Paper>
    </Grid>
  );
}

SideBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default SideBar;
