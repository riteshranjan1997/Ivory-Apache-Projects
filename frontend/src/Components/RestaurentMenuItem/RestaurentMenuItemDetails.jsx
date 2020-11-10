import React from 'react'
import Styled from 'styled-components'
import data from '../../data.json' 

const RestaurentDetails = Styled.div`
    position:relative;
    top:-100px;
    text-align:left;
    margin-left:100px;
    span{
        font-weight:bolder;
    }
`

function RestaurentMenuItemDetails(){
    console.log(data)
    return(
        <div>
        {data && data.map((item)=>(
            <RestaurentDetails>
                <h3><b>{item.restaurant_name}</b></h3>
                <div style={{display:"flex"}}>
                    <div className="text-muted" style={{marginRight:"10px"}}>{item.address}</div>
                    <div style={{color:"#2B8282"}}>Change Location</div>
                </div>

                <div style={{display:"flex"}}>
                <div className="mr-2">
                    {new Array(5).fill(0).map((stars,i)=>(
                        i<=item.aggregate_rating-1 ?                        
                            <i class="fas fa-star" style={{color:"orange"}}></i>                         
                         :
                            <i class="far fa-star" style={{color:"orange"}} ></i>                    
                    ))}
                    </div>
                    <div className="mr-2">{item.ratings} ratings</div>
                    <div className="mr-2"><span>{item.food_was_good}</span> food was good</div>
                    <div className="mr-2"><span>{item.delivery_was_on_time}</span> Delivary was on time</div>
                    <div><span>{item.delivery_was_on_time}</span> Order was correct</div>
                </div>
                <div>
                    <hr/>
                </div>
            </RestaurentDetails>
        ))}
        </div>
    )
}

export default RestaurentMenuItemDetails