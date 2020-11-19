import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "30px",
  },
  headings: {
    textAlign: "left",
  },
});

function LandingPageDelivary() {
  const isAuth = useSelector((state) => state.auth.isAuth);

  if (!isAuth) {
    <Redirect to="/" />;
  }

  const classes = useStyles();
  return (
    <Container fixed>
      <Grid container className={classes.root}>
        <Grid item xs={12} md={6}>
          <Typography
            className={classes.headings}
            gutterBottom
            variant="h4"
            style={{ fontFamily: "esti" }}
          >
            Restaurants near you, delivered fast
            <Typography variant="body2" color="textSecondary" component="p">
              Seamless is simply the easiest way to order food for delivery or
              takeout. Whatever you're in the mood for, wherever you're in the
              mood for it, you've got it. No menus, no phone calls, no repeating
              yourself. Just simple neighborhood food delivery. Seamless is a
              part of the Grubhub Inc. portfolio of brands. For more information
              on Grubhub, Inc., please visit about.grubhub.com.
            </Typography>
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={1}>
            <img
              className="img-fluid"
              src="https://media-cdn.grubhub.com/image/upload/f_auto,fl_lossy,w_570/v1539270959/Onboarding/SL/female-friends-lunch.png"
              alt="description"
            />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default LandingPageDelivary;
