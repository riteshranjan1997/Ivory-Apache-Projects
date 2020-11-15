import React from "react";
import AppBar from "../common/AppBar";
import { Redirect } from "react-router-dom";
import SearchComponent from "./SearchComponent";
import FreeDelivary from "./FreeDelivary";
import IntroductionCardDiv from "./IntroductionCardDiv";
import LandingPageFooter from "../LandingPage/LandinPageFooter";
import { useSelector } from "react-redux";

function SigninLandingPage() {
  const isAuth = useSelector((state) => state.auth.isAuth);

  if (!isAuth) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <div>
        <AppBar addressModel="true" notifications="true" login />
      </div>

      <div>
        <SearchComponent />
        <FreeDelivary />
        <IntroductionCardDiv />
        <LandingPageFooter />
      </div>
    </div>
  );
}

export default SigninLandingPage;
