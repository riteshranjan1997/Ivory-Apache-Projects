import React from 'react'
import {Redirect} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import LandinPageHeader from './LandingPageHeader'
import LandingPageLocation from './LandingPageLocation'
import LandingPageSystem from './LandingPageSystem'
import LandingPageDelivary from './LandingPageDelivary'
import LandingPageAbout from './LandingPageAbout'
import LandingPageFooter from './LandinPageFooter'

function LandingPage(){

    const isAuth = useSelector((state) => state.auth.isAuth);

    if (isAuth) {
        return <Redirect to="/lets-eat" />;
      }

    return(
        <div>
            <LandinPageHeader/>
            <LandingPageLocation/>
            <LandingPageSystem/>
            <LandingPageDelivary/>
            <LandingPageAbout/>
            <LandingPageFooter/>
        </div>
    )
}

export default LandingPage