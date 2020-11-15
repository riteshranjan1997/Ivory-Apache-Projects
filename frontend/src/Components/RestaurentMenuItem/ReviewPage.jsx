import React from 'react'
import {useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'
import Rating from "@material-ui/lab/Rating";
import { makeStyles ,withStyles} from '@material-ui/core/styles';
import StarIcon from '@material-ui/icons/Star';
import Avatar from "@material-ui/core/Avatar";
import data from '../../data.json'

const StyledRating = withStyles({
    iconFilled: {
      color: 'orange',
    },
    iconHover:{
      color:"inherit",
    }
    
  })(Rating); 

function ReviewPage(){
    const ParamsId =useParams()
    const restaurantsData = useSelector((state)=>state.app.restaurantsData)
    // const data = restaurantsData.find(item =>item.restaurant_id == ParamsId.id)
    return(
        <div>
           
            <div><h4><b>Reviews from {data[0].restaurant_name}</b></h4></div>
            <div><StyledRating
                name="unique-rating"
                defaultValue={data[0].aggregate_rating}
                // getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                precision={1}
                icon={<StarIcon fontSize="inherit" />}
                /></div>
            <div style={{fontSize:"12px",color:"grey"}}>{data[0].votes} ratings</div>
            <div style={{marginTop:"10px",fontSize:"12px"}}>Here's what people are saying:</div>
            <div style={{display:"flex",marginTop:"20px"}}>
                <div style={{width:"70px"}} >
                    <div><h5><b>{data[0].food_was_good}</b></h5></div>
                    <div style={{fontSize:"12px"}}>Food Was Good</div>
                </div>
                <div style={{width:"70px",marginLeft:"30px"}}>
                    <div><h5><b>{data[0].order_was_correct}</b></h5></div>
                    <div style={{fontSize:"12px"}}>Order Was accurate</div>
                </div>
                <div style={{width:"70px",marginLeft:"30px"}}>
                    <div><h5><b>{data[0].delivery_was_on_time}</b></h5></div>
                    <div style={{fontSize:"12px"}}>Delivary was on time</div>
                </div>
            </div>
            <hr/>
            {data[0].reviews.map(item=>(
                <>
                <div style={{display:"flex"}}>
                    <div><Avatar style={{ backgroundColor: "#2B8282" }}>
                        {item.user_name[0]}
                    </Avatar></div>
                    <div>
                        <div style={{ marginLeft: "5px"}}>
                        {item.user_name}
                        </div>
                        <div><i class="fas fa-star" style={{color:"#2B8282"}}></i>{item.review.length}</div>
                    </div>                    
                </div>
                <div>
                    <StyledRating
                    name="unique-rating"
                    defaultValue={item.rating}
                    // getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                    precision={1}
                    icon={<StarIcon fontSize="inherit" />}
                    />
                </div>
                <div>{item.user_name} ordered</div>
                <div style={{display:"flex"}}>
                    {item.ordered.map(elem=>(
                        <div style={{background:"grey",padding:"10px"}}>
                            {elem}
                        </div>
                    ))}
                </div>
              </>
            ))}
            
        </div>
    )
}

export default ReviewPage