import React from 'react'
import Styled from 'styled-components'

const LandingPageHeaderWrapper = Styled.div`
    height:50px;
    background:#2b8282;
    color:white;
    padding-top:10px;
`
//Header description of the Landing Page
function LandingPageHeader(){
    return(
        <LandingPageHeaderWrapper>
            <div>Your health and safety is our priority, from restaurant to doorstep</div>
        </LandingPageHeaderWrapper>
    )
}

export default LandingPageHeader