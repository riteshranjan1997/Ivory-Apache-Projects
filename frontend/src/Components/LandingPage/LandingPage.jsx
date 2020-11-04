import React from 'react'
import LandinPageHeader from './LandingPageHeader'
import LandingPageLocation from './LandingPageLocation'
import LandingPageSystem from './LandingPageSystem'
import LandingPageDelivary from './LandingPageDelivary'
import LandingPageAbout from './LandingPageAbout'
import LandingPageFooter from './LandinPageFooter'

function LandingPage(){
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