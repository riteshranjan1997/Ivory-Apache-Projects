import React from "react";
import AppBar from "../common/AppBar";
import SearchComponent from "./SearchComponent"

function SigninLandingPage() {

  return (
    <div>
      <AppBar addressModel="true" notifications="true"/>
      <SearchComponent/>
    </div>
  );
}

export default SigninLandingPage;
