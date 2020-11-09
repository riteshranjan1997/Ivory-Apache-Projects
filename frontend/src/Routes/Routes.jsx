import React from 'react'
import {Switch,Route} from 'react-router-dom'
import LandingPage from "../Components/LandingPage/LandingPage"
import Profile from '../Components/Account/Profile'
import Address from "../Components/Account/Address"
import Payments from '../Components/Account/Payments'
import PastOrders from '../Components/Account/PastOrders'
import UpcomingOrders from '../Components/Account/UpcomingOrders'
import SigninLandinngPage from "../Components/SigninLandingPage/SigninLandingPage"
import LoginPage from "../Components/LoginPage/LoginPage"
import RegisterPage from "../Components/RegisterPage/RegisterPage"

export default function Routes(){
    return(
        <Switch>
            <Route path = "/"  exact render={() => <LandingPage/>}/>
            <Route path = '/lets-eat' exact render={() => <SigninLandinngPage/>} />
            <Route path = "/login" exact render ={() => <LoginPage/> } />
            <Route path = "/create-account" exact render = {() => <RegisterPage/>} />
            <Route path = "/" exact render={(props)=><Profile props={props}/>} />
            <Route path="/account/Profile" render={(props)=><Profile props={props}/>} />
            <Route path="/account/Address and Phone" render={(props)=><Address props={props}/>} />
            <Route path="/account/Payments" render={(props)=><Payments props={props}/>} />
            <Route path="/account/Past orders" render={(props)=><PastOrders props={props}/>} />
            <Route path="/account/Upcoming orders" render={(props)=><UpcomingOrders props={props}/>} />
        </Switch>
    )
}