import React from "react";
import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { restaurantsRequest } from "../../redux/app/action";

import Filter from "./Filter";
import Bar from "../common/AppBar";
import RestaurantCardDiv from "./RestaurantCardDiv";
import Footer from "../LandingPage/LandinPageFooter"

const data = {
  error: false,
  data: {
      current: [
          {
              cuisines: [
                  "North Indian"
              ],
              timings: [
                  {
                      monthu: {
                          pickup: "",
                          delivery: ""
                      }
                  }
              ],
              reviews: [
                  {
                      user_name: "",
                      rating: "",
                      no_reviews: "",
                      review: "",
                      ordered: "",
                      level: ""
                  },
                  {},
                  {}
              ],
              _id: "5fa68044ff04eca9320ff587",
              restaurant_id: "1002",
              restaurant_name: "AB's - Absolute Barbecues",
              restaurant_images: "Barbeques.jpg",
              city: "Chennai",
              address: "Velachery Tharamani Link Road, Opposite TCS, Velachery, Chennai",
              locality: "Velachery",
              aggregate_rating: "4.9",
              rating_color: "Dark Green",
              rating_text: "Excellent",
              votes: 859,
              location: {
                  type: "Point",
                  coordinates: [
                      12.981615,
                      80.231598
                  ]
              },
              food_was_good: "in percentage",
              delivery_was_on_time: "in percentage",
              order_was_correct: "in percentage",
              delivery: "time",
              tot_reviews: null
          },
          {
            cuisines: [
                "North Indian"
            ],
            timings: [
                {
                    monthu: {
                        pickup: "",
                        delivery: ""
                    }
                }
            ],
            reviews: [
                {
                    user_name: "",
                    rating: "",
                    no_reviews: "",
                    review: "",
                    ordered: "",
                    level: ""
                },
                {},
                {}
            ],
            _id: "5fa68044ff04eca9320ff587",
            restaurant_id: "1002",
            restaurant_name: "AB's - Absolute Barbecues",
            restaurant_images: "Barbeques.jpg",
            city: "Chennai",
            address: "Velachery Tharamani Link Road, Opposite TCS, Velachery, Chennai",
            locality: "Velachery",
            aggregate_rating: "4.9",
            rating_color: "Dark Green",
            rating_text: "Excellent",
            votes: 859,
            location: {
                type: "Point",
                coordinates: [
                    12.981615,
                    80.231598
                ]
            },
            food_was_good: "in percentage",
            delivery_was_on_time: "in percentage",
            order_was_correct: "in percentage",
            delivery: "time",
            tot_reviews: null
        }
      ]
  }
}


export default function RestaurantListingPage() {
  const dispatch = useDispatch();
  const userAddress = useSelector((state) => state.app.userAddress);
  const isError = useSelector((state) => state.app.isError);

  
  useEffect(() => {
    if (userAddress === "") {
      dispatch(
        restaurantsRequest({ lattitude: 13.02239444, longitude: 80.24243889 })
      );
    }
    dispatch(restaurantsRequest(userAddress));
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <Bar addressModel="true" login />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <Filter />
        </div>
        <div className="col">
          <RestaurantCardDiv data={data} />
        </div>
      </div>

      <div className="row">
        <div className="col">
            <Footer/>
        </div>
      </div>

    </div>
  );
}
