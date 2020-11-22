import React from "react";
import AppBar from "../common/AppBar";
import { Redirect } from "react-router-dom";
import SearchComponent from "./SearchComponent";
import FreeDelivary from "./FreeDelivary";
import IntroductionCardDiv from "./IntroductionCardDiv";
import LandingPageFooter from "../LandingPage/LandinPageFooter";
import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import ErrorBar from "../../Components/common/ErrorBar";

function SigninLandingPage() {
  // const isAuth = useSelector((state) => state.auth.isAuth);

  // if (!isAuth) {
  //   return <Redirect to="/" />;
  // }

  return (
    <div>
      <AppBar notifications="true" login />
      <ErrorBar />
      <Grid container>
        <Grid item xs={12} style={{ marginTop: "60px" }}>
          <SearchComponent />
        </Grid>
        <Grid item xs={12}>
          <FreeDelivary />
        </Grid>
        <Grid item xs={12}>
          <IntroductionCardDiv />
        </Grid>
        <Grid item xs={12}>
          <LandingPageFooter />
        </Grid>
      </Grid>
    </div>
  );
}

export default SigninLandingPage;
