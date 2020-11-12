import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Rating from "@material-ui/lab/Rating";
import { withStyles } from "@material-ui/core/styles";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

const StyledRating = withStyles({
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

export default function RestaurantCard() {
    
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

          <div style={{ marginRight: "500px" }}>
            <h5>{props.data.restaurant_name}</h5>
            <span>{props.data.restaurant_images}</span>
            <img style={{padding:"5px"}}
              src="https://res.cloudinary.com/grubhub-assets/image/upload/v1577663084/subscriptions/s_flag_ihsory.svg"
              alt="s+"
            />
          </div>

          <div style={{ marginRight: "150px" }}>
            

            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={popover}
            >
              <div>
                <Rating
                  name="size-medium"
                  defaultValue={3.8}
                  value={props.data.aggregate_rating}
                  size="small"
                />
                <br />
                <spam>{props.data.votes} ratings</spam>
              </div>
            </OverlayTrigger>
          </div>

          <div>
            <h5>20-30</h5>
            <span>mins</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
