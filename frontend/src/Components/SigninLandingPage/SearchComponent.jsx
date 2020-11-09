import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { colors } from "@material-ui/core";

const useStyles = makeStyles({
  root:{
    // fontFamily: "sans-serif",
    backgroundImage: `url("https://res.cloudinary.com/grubhub-marketing/image/upload/f_auto,fl_lossy,q_80/v1538431627/Homepage_Desktop_0018_Pizza_2x_qshvvo.jpg")`
  },
  title:{
      fontWeight:"700",
      color:"white"
  }
});

function SearchComponent () {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
      <h3 className={classes.title}>Who delivers in your neighborhood?</h3>
      
      </div>
    </div>
  );
}

export default SearchComponent;
