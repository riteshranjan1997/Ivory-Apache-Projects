import React from "react";
import Styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import StarIcon from "@material-ui/icons/Star";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Popover from "react-bootstrap/Popover";
import { Redirect } from "react-router-dom";

const RestaurentDetails = Styled.div`
    position:relative;
    top:-100px;
    text-align:left;
    margin-left:100px;
    span{
        font-weight:bolder;
    }
`;
const StyledRating = withStyles({
  iconFilled: {
    color: "orange",
  },
  iconHover: {
    color: "inherit",
  },
})(Rating);
const popover = (
  <Popover id="popover-basic">
    <h6 style={{ textAlign: "center", padding: "10px" }}>
      Here's what people are saying:
    </h6>
    <Popover.Content>
      And here's some <strong>amazing</strong> content. It's very engaging.
      right?
    </Popover.Content>
  </Popover>
);

function RestaurentMenuItemDetails() {
  const isAuth = useSelector((state) => state.auth.isAuth);

  if (!isAuth) {
    <Redirect to="/" />;
  }

  const restaurantsData = useSelector((state) => state.app.restaurantsData);
  const ParamsId = useParams();
  console.log("params id", ParamsId);
  const item = restaurantsData.find(
    (item) => item.restaurant_id == ParamsId.id
  );
  // console.log("data",data)
  // console.log("in banner page",data)
  return (
    <div>
      <RestaurentDetails>
        <h3>
          <b>{item.restaurant_name}</b>
        </h3>
        <div style={{ display: "flex" }}>
          <div className="text-muted" style={{ marginRight: "10px" }}>
            {item.address}
          </div>
          <div style={{ color: "#2B8282" }}>Change Location</div>
        </div>

        <div style={{ display: "flex" }}>
          <div className="mr-2">
            <StyledRating
              name="unique-rating"
              defaultValue={item.aggregate_rating}
              // getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
              precision={1}
              icon={<StarIcon fontSize="inherit" />}
            />
          </div>
          <div className="mr-2">{item.votes} ratings</div>
          <div className="mr-2">
            <span>{item.food_was_good}</span> food was good
          </div>
          <div className="mr-2">
            <span>{item.delivery_was_on_time}</span> Delivary was on time
          </div>
          <div>
            <span>{item.order_was_correct}</span> Order was correct
          </div>
        </div>
        <div>
          <hr
            style={{
              width: "120%",
              marginBottom: "-30px",
              position: "relative",
              left: "-100px",
            }}
          />
        </div>
      </RestaurentDetails>
    </div>
  );
}

export default RestaurentMenuItemDetails;
