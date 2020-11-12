import React from "react";
import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import LandingPage from "../Components/LandingPage/LandingPage";
import Profile from "../Components/Account/Profile";
import Address from "../Components/Account/Address";
import RestaurentPage from "../Components/RestaurantsListingPage/RestaurantsListingPage";
import RestaurentMenuItem from "../Components/RestaurentMenuItem/RestaurentMenuItem";
import Payments from "../Components/Account/Payments";
import PastOrders from "../Components/Account/PastOrders";
import UpcomingOrders from "../Components/Account/UpcomingOrders";
import SigninLandinngPage from "../Components/SigninLandingPage/SigninLandingPage";
import LoginPage from "../Components/LoginPage/LoginPage";
import RegisterPage from "../Components/RegisterPage/RegisterPage";
import SavedRestaurent from "../Components/Account/SavedRestaurent";

export default function Routes() {
  const isauth = useSelector((state) => state.auth.isauth);

  //   if(!isauth){
  //     return <Redirect to="/" ></Redirect>
  //   }

  return (
    <Switch>
      <Route path="/" exact render={() => <LandingPage />} />
      <Route path="/lets-eat" exact render={() => <SigninLandinngPage />} />
      <Route path="/login" exact render={() => <LoginPage />} />
      <Route path="/create-account" exact render={() => <RegisterPage />} />
      <Route
        path="/search"
        exact
        render={(props) => <RestaurentPage props={props} />}
      />
      <Route
        path="/menu/:id"
        render={(props) => <RestaurentMenuItem props={props} />}
      />
      <Route
        path="/account"
        exact
        render={(props) => <Profile props={props} />}
      />
      <Route
        path="/account/Profile"
        render={(props) => <Profile props={props} />}
      />
      <Route
        path="/account/Address and Phone"
        render={(props) => <Address props={props} />}
      />
      <Route
        path="/account/Payments"
        render={(props) => <Payments props={props} />}
      />
      <Route
        path="/account/Past orders"
        render={(props) => <PastOrders props={props} />}
      />
      <Route
        path="/account/Upcoming orders"
        render={(props) => <UpcomingOrders props={props} />}
      />
      <Route
        path="/account/Saved Restaurent"
        render={(props) => <SavedRestaurent props={props} />}
      />
    </Switch>
  );
}
