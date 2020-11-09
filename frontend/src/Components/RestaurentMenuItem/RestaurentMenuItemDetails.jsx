import React from 'react'
import Styled from 'styled-components' 

const RestaurentDetails = Styled.div`
    position:relative;
    top:-100px;
    text-align:left;
    margin-left:100px;
    i{
        color:yellow;
    }
    span{
        font-weight:bolder;
    }
`

function RestaurentMenuItemDetails(){
    return(
        <RestaurentDetails>
            <h3><b>McDonald's</b></h3>
            <div style={{display:"flex"}}>
                <div style={{marginRight:"10px"}}>1235 New York Ave NW</div>
                <div style={{color:"#2B8282"}}>Change Location</div>
            </div>
            <div style={{display:"flex"}}>
                <div className="mr-2">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <div className="mr-2">34 ratings</div>
                <div className="mr-2"><span>94%</span> food was good</div>
                <div className="mr-2"><span>88%</span> Delivary was on time</div>
                <div><span>91%</span> Order was correct</div>
            </div>
            <div>
                <hr/>
            </div>
        </RestaurentDetails>
    )
}

export default RestaurentMenuItemDetails