import React from "react";
import Styled from "styled-components";
import {Link} from "react-router-dom"

function LandingPageHeader() {
  return (
    <div style={{height:"58px", backgroundColor:"#0f8c92", textAlign:"center", paddingTop:"10px"}}>
      <p style={{fontFamily:"Poppins",fontSize:"14px", color:"white" , marginTop:"10px", fontWeight:"500"}}>
  Your health and safety is our priority, from restaurant to doorstep <Link style={{color:"white", marginLeft:"10px"}}>Learn more</Link>
      </p>
    </div>
  );
}

export default LandingPageHeader;
