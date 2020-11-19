import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles({
  root: {
    height: "150px",
    background: "#E0E0E0",
    padding: "30px",
  },
  headings: {
    textAlign: "left",
  },
});

function LandingPageAbout() {
  const isAuth = useSelector((state) => state.auth.isAuth);

  if (!isAuth) {
    <Redirect to="/" />;
  }
  const classes = useStyles();
  return (
    <Grid container alignItems="center" className={classes.root}>
      <Grid item xs={12} md={6}>
        <Grid container justify="center">
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            style={{ fontFamily: "esti" }}
          >
            AboutSeamless
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid container className={classes.headings}>
          <Typography variant="body2" color="textSecondary" component="p">
            Seamless is simply the easiest way to order food for delivery or
            takeout. Whatever you're in the mood for, wherever you're in the
            mood for it, you've got it. No menus, no phone calls, no repeating
            yourself. Seamless is a part of the Grubhub Inc. portfolio of
            brands. For more information on Grubhub, Inc., please visit
            about.grubhub.com.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default LandingPageAbout;
