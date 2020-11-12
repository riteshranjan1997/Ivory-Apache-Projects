import React from "react";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useDispatch, useSelector } from "react-redux";
import {
  restaurantsRequest,
  UpdateUserAppAddress,
  UpdateUserGioLocation,
} from "../../redux/app/action";

import Filter from "./Filter";
import Bar from "../common/AppBar";
import BrowseByCuisine from "../common/BrowseByCuisine"
import RestaurantCardDiv from "./RestaurantCardDiv";
import Footer from "../LandingPage/LandinPageFooter";


export default function RestaurantListingPage() {
  const dispatch = useDispatch();
  const userGioLocation = useSelector((state)=>state.app.userGioLocation)
  const userAddress = useSelector((state) => state.app.userAddress);
  const isError = useSelector((state) => state.app.isError);

  const fetchRestaurantData =  () => {
    if (userAddress === "") {
     dispatch(UpdateUserAppAddress("Chennai, Tamil Nadu, India"));
      dispatch(
        restaurantsRequest({ lattitude: 13.02239444, longitude: 80.24243889 })
      );
    } else {
      dispatch(restaurantsRequest(userGioLocation));
    }
  }

  useEffect(() => {
    fetchRestaurantData()
    console.log("use effect")
  }, []);

  return (
    <>
      <Bar addressModel="true" notifications="true" login  />
      <Container fluid>
        <Row>
          <Filter />
          <Col>
            <RestaurantCardDiv  />
          </Col>
        </Row>

        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    </>
  );
}
