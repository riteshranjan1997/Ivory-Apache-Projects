import React from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LandinPageHeader from "./LandingPageHeader";
import LandingPageLocation from "./LandingPageLocation";
import LandingPageSystem from "./LandingPageSystem";
import LandingPageDelivary from "./LandingPageDelivary";
import LandingPageAbout from "./LandingPageAbout";
import LandingPageFooter from "./LandinPageFooter";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function LandingPage() {
  const classes = useStyles();
  const isAuth = useSelector((state) => state.auth.isAuth);

  if (isAuth) {
    return <Redirect to="/lets-eat" />;
  }

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <LandinPageHeader />
        </Grid>
        <Grid item xs={12}>
          <LandingPageLocation />
        </Grid>
        <Grid item xs={12}>
          <LandingPageSystem />
        </Grid>
        <Grid item xs={12}>
          <LandingPageDelivary />
        </Grid>
        <Grid item xs={12}>
          <LandingPageAbout />
        </Grid>
        <Grid item xs={12}>
          <LandingPageFooter />
        </Grid>
      </Grid>
    </div>
  );
}

export default LandingPage;
