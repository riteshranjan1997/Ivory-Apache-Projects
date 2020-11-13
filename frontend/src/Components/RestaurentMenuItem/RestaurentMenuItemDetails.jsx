import React from 'react'
import Styled from 'styled-components'
import { useSelector,useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

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
    const restaurantsData = useSelector((state)=>state.app.restaurantsData)
    const ParamsId =useParams()
    console.log("params id",ParamsId)
    const item = restaurantsData.find(item =>item.restaurant_id == ParamsId.id)
    // console.log("data",data)
    // console.log("in banner page",data)
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
                    <div className="mr-2">{item.votes} ratings</div>
                    <div className="mr-2"><span>{item.food_was_good}</span> food was good</div>
                    <div className="mr-2"><span>{item.delivery_was_on_time}</span> Delivary was on time</div>
                    <div><span>{item.order_was_correct}</span> Order was correct</div>
                </div>
                <div>
                    <hr/>
                </div>
            </RestaurentDetails>
        </div>
    )
}

export default RestaurentMenuItemDetails