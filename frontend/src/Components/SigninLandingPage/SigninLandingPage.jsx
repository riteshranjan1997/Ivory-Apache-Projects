import React from "react";
import AppBar from "../common/AppBar";
import {Redirect}  from "react-router-dom"
import SearchComponent from "./SearchComponent"
import {useSelector} from "react-redux"

function SigninLandingPage() {

  return (

    <div>
      <AppBar addressModel="true" notifications="true" login/>
      <SearchComponent/>
    </div>
  );
}

export default SigninLandingPage;
