import React from "react"
import { Route } from "react-router-dom"
import LandingPage from "../components/LandingPage/LandingPage"
import SigninLandinngPage from "../components/SigninLandingPage/SigninLandingPage"
import LoginPage from "../components/LoginPage/LoginPage"
import RegisterPage from "../components/RegisterPage/RegisterPage"
import RestaurantListingPage from "../components/RestaurantsListingPage/RestaurantsListingPage"
import CheckoutPage from "../components/CheckoutPage/CheckoutPage" 

    function Routes() {

        return (
            <>
                <Route path="/" exact render={() => <LandingPage />} />
                <Route path='/lets-eat' exact render={() => <SigninLandinngPage />} />
                <Route path="/login" exact render={() => <LoginPage />} />
                <Route path="/create-account" exact render={() => <RegisterPage />} />
                <Route path="/search" exact render={() => <RestaurantListingPage />} />
                {/* <Route path="/menu" exact render={() => <MenuListingPage />} />
                <Route path="/checkout" exact render={() => <CheckoutPage />} /> */}
            </>
        )
    }
export default Routes

