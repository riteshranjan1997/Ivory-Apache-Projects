import React from 'react'
import Styled from 'styled-components'
import {useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'


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
    const ParamsId = useParams()
    const restaurantData = useSelector((state)=>state.app.restaurantsData) 
    const data = restaurantData.find(item => item.restaurent_id == ParamsId)

    return(
        <div>
       
            <RestaurentDetails>
                <h3><b>{data.restaurant_name}</b></h3>
                <div style={{display:"flex"}}>
                    <div className="text-muted" style={{marginRight:"10px"}}>{data.address}</div>
                    <div style={{color:"#2B8282"}}>Change Location</div>
                </div>

                <div style={{display:"flex"}}>
                <div className="mr-2">
                    {new Array(5).fill(0).map((stars,i)=>(
                        i<=data.aggregate_rating-1 ?                        
                            <i class="fas fa-star" style={{color:"orange"}}></i>                         
                         :
                            <i class="far fa-star" style={{color:"orange"}} ></i>                    
                    ))}
                    </div>
                    <div className="mr-2">{data.ratings} ratings</div>
                    <div className="mr-2"><span>{data.food_was_good}</span> food was good</div>
                    <div className="mr-2"><span>{data.delivery_was_on_time}</span> Delivary was on time</div>
                    <div><span>{data.delivery_was_on_time}</span> Order was correct</div>
                </div>
                <div>
                    <hr/>
                </div>
            </RestaurentDetails>
     
        </div>
    )
}

export default RestaurentMenuItemDetails