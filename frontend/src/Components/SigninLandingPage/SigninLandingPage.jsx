import React from "react";
import AppBar from "../common/AppBar";
import { Redirect } from "react-router-dom";
import SearchComponent from "./SearchComponent";
import FreeDelivary from "./FreeDelivary";
import IntroductionCardDiv from "./IntroductionCardDiv";
import LandingPageFooter from "../LandingPage/LandinPageFooter";
import { useSelector } from "react-redux";

function SigninLandingPage() {
  const isauth = useSelector((state) => state.auth.isauth);

  //   if(!isauth){
  //     return <Redirect to="/" ></Redirect>
  //   }

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
