import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function RestaurantCard(props) {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <img src={props.data.img} alt="" />
          </div>

          <div className="col">
            <h5>{props.data.name}</h5>
            <img src="" alt="s+" />
            <span>{props.data.name}</span>
          </div>

          <div className="col">
            <img src="" alt="star" />
            <spam>{props.data.name}</spam>
          </div>

          <div className="col">
            <h5>{props.data.name}</h5>
            <span>mins</span>
          </div>
        </div>
      </div>
    </>
  );
}
