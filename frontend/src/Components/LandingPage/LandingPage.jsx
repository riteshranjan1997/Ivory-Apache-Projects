import React from 'react'
import LandinPageHeader from './LandingPageHeader'
import LandingPageLocation from './LandingPageLocation'
import LandingPageSystem from './LandingPageSystem'
import LandingPageDelivary from './LandingPageDelivary'
import LandingPageAbout from './LandingPageAbout'

function LandingPage(){
    return(
        <div>
            <LandinPageHeader/>
            <LandingPageLocation/>
            <LandingPageSystem/>
            <LandingPageDelivary/>
            <LandingPageAbout/>
        </div>
    )
}

export default LandingPage