import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Rating from "@material-ui/lab/Rating";
import { withStyles } from "@material-ui/core/styles";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
const StyledRating = ()=>withStyles({
  iconFilled: {
    color: "#ff6d75",
  },
  iconHover: {
    color: "#ff3d47",
  },
})(Rating);
const popover = (
  <Popover id="popover-basic">
    <h6 style={{textAlign:"center" , padding:"10px"}} >Here's what people are saying:</h6>
    <Popover.Content>
      And here's some <strong>amazing</strong> content. It's very engaging.
      right?
    </Popover.Content>
  </Popover>
);
export default function RestaurantCard(props) {
  const classes = StyledRating()
  return (
    <Link
      style={{ textDecoration: "none", color: "black" }}
      to={`/menu/${props.data.restaurant_id}`}
    >
      <div class="card" style={{ padding: "12px 5px" }}>
        <div className="row d-flex">
          <div className="mx-4">
            <img
              style={{ width: "92px", height: "92px" }}
              src={props.data.restaurant_images}
              alt=""
            />
          </div>
          <div style={{ width: "40%" }}>
            <h6><b>{props.data.restaurant_name}</b></h6>
            <img style={{padding:"5px"}}
              src="https://res.cloudinary.com/grubhub-assets/image/upload/v1577663084/subscriptions/s_flag_ihsory.svg"
              alt="s+"
            />
            <span className="text-muted" style={{fontSize:"12px"}}>{props.data.cuisines[0]}</span>
          </div>
          <div style={{ marginRight: "12%" }}>         
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={popover}
            >
              <div>
                <div className="mr-5">
                      {new Array(5).fill(0).map((stars,i)=>(
                          i<=props.data.aggregate_rating-1 ?                        
                              <i class="fas fa-star" style={{color:"orange"}}></i>                         
                          :
                          <i class="fas fa-star" style={{color:"grey"}}></i>                     
                      ))}
                    </div>
                    <spam className="text-muted ml-2" style={{fontSize:"12px"}}>{props.data.votes} ratings</spam>
                <br />               
              </div>
            </OverlayTrigger>
          </div>
          <div>
            <h6><b>20-30</b></h6>
            <span className ="text-muted" style={{fontSize:"10px"}}>mins</span>
          </div>
        </div>
      </div>
    </Link>
  );
}