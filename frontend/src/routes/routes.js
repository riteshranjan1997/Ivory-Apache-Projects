import React from "react"
import { Route } from "react-router-dom"
import LandingPage from "../components/LandingPage/LandingPage"
import SigninLandinngPage from "../components/SigninLandingPage/SigninLandingPage"
import LoginPage from "../components/LoginPage/LoginPage"
import RegisterPage from "../components/RegisterPage/RegisterPage"

function Routes(){
    return(
        <>
        <Route path = "/"  exact render={() => <LandingPage/>}/>
        <Route path = '/lets-eat' exact render={() => <SigninLandinngPage/>} />
        <Route path = "/login" exact render ={() => <LoginPage/> } />
        <Route path = "/create-account" exact render = {() => <RegisterPage/>} />
        </>
    )
}
export default Routes

