import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Styled from "styled-components";
import AppBar from "../common/AppBar";
import axios from "axios";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { userUpdateRequest } from "../../redux/Auth/action";
import ErrorBar from "../common/ErrorBar";

const CheckoutPageWrapper = Styled.div`
    
   margin-left:30px;
   div:nth-child(1){
      margin-bottom:40px;
   }
   p{
     font-size:10px;
     line-height:1px;
   }
`;

export default function CheckoutPage() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const userData = useSelector((state) => state.auth.user_data);

  const [firstName, setFirstName] = React.useState(userData.first_name);
  const [lastName, setLastName] = React.useState(userData.last_name);
  const [email, setEmail] = React.useState(userData.email);
  const access_token = useSelector((state) => state.auth.access_token);
  const address = useSelector((state) => state.app.userAddress);
  const dispatch = useDispatch();
  console.log("in check out page auth", isAuth);

  if (!isAuth) {
    return <Redirect to="/" />;
  }
  const cart = userData.cart;
  console.log("in checkout page cart is", userData, userData.cart);
  console.log("address is ", address);
  const paymentHandler = async (e) => {
    e.preventDefault();
    const API_URL = "http://ec2-13-127-156-161.ap-south-1.compute.amazonaws.com/api/payment/";
    const orderUrl = `${API_URL}order`;
    try {
      var response = await axios.post(
        orderUrl,
        { amount: cart && cart.reduce((a, item) => a + item.price, 0) },
        {
          headers: {
            Authorization: "Bearer " + access_token,
          },
        }
      );

      console.log("payment response is ", response);
      console.log("payment response is ", response.data);
      console.log("payment response is ", response.data.data);
      console.log("payment response is ", response.data.data.order);
      var data = response.data.data.order;
    } catch (err) {
      console.log(err);
      return;
    }
    console.log("data in check out is", data);
    const options = {
      name: "Masai RazorPay",
      description: "Integration of Razorpay",
      order_id: data.id,
      handler: async (response) => {
        try {
          const paymentId = response.razorpay_payment_id;
          const url = `${API_URL}capture/${paymentId}`;
          const captureResponse = await axios.post(url, {
            amount: cart && cart.reduce((a, item) => a + item.price, 0),
          });
          const successObj = JSON.parse(captureResponse.data);
          const captured = successObj.captured;
          if (captured) {
            console.log("success", captured);
            alert("order success");
            dispatch(userUpdateRequest({}, access_token));
          }
        } catch (err) {
          console.log(err);
        }
      },
      theme: {
        color: "#c6203d",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };
  if (cart.length == 0) {
    return <Redirect to="/account/Past%20orders" />;
  }

  return (
    <div>
      <AppBar />
      <ErrorBar />
      <br />
      <br />
      <br />
      <CheckoutPageWrapper>
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col-9">
                <div style={{ marginTop: "75px" }}>
                  <h2 style={{ textAlign: "left" }}>
                    <b>Review and place order</b>
                  </h2>
                  <h2 style={{ textAlign: "left" }}>
                    <b>
                      Review address, payments, and tip to complete your
                      purchase
                    </b>
                  </h2>
                </div>
                <div style={{ textAlign: "left" }}>
                  <b>Contact</b>
                </div>
                <div className="row">
                  <div class="form-group col-4">
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="first_name"
                      value={firstName}
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                      style={{ fontWeight: "bold" }}
                    />
                  </div>
                </div>
                <div className="row">
                  <div class="form-group col-4">
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Last_name"
                      value={lastName}
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                      style={{ fontWeight: "bold" }}
                    />
                  </div>
                </div>
                <div className="row">
                  <div class="form-group col-4">
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="emailId"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      style={{ fontWeight: "bold" }}
                    />
                  </div>
                </div>
                <div className="row">
                  <div class="form-group col-4">
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="phone No"
                      style={{ fontWeight: "bold" }}
                    />
                  </div>
                </div>
                <div className="text-left">
                  <p>
                    By providing your phone number, you consent to receive text
                    messages from
                  </p>
                  <p>
                    Grubhub related to your order. Standard message rates may
                    apply. See our Terms
                  </p>
                  <p>of Use for more information.</p>
                </div>
                <div style={{ textAlign: "left" }}>
                  <b>Address</b>
                </div>
                {/* <div>{address}</div>  */}

                <div className="row">
                  <div class="form-group col-3">
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="address"
                    />
                  </div>
                  <div class="form-group col-3">
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Apartment"
                    />
                  </div>
                  <div class="form-group col-3">
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="cross street"
                    />
                  </div>
                </div>
                <div className="row">
                  <div class="form-group col-3">
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="city"
                    />
                  </div>
                  <div class="form-group col-3">
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="area"
                    />
                  </div>
                  <div class="form-group col-3">
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="zip code"
                    />
                  </div>
                </div>
                <div>
                  <div style={{ textAlign: "left" }}>
                    <b>Delivary Instruction</b>
                  </div>
                  <div class="form-group col-9">
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="leave info for your driver"
                    ></textarea>
                  </div>
                </div>
                <div class="form-group form-check col-4">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    Save Address
                  </label>
                </div>
                <div className="d-flex justify-content-left">
                  <button
                    type="submit"
                    className="btn btn-primary mb-2 col-9"
                    style={{ alignSelf: "left" }}
                    onClick={paymentHandler}
                  >
                    Continue to payment method
                  </button>
                </div>
              </div>

              <div
                className="col-3 border"
                style={{
                  position: "fixed",
                  marginLeft: "74%",
                  fontSize: "12px",
                  lineHeight: "2px",
                  height: 500,
                  border: "1px solid red",
                  overflowY: "scroll",
                }}
              >
                <div style={{ marginTop: "55px" }}>
                  <b>
                    <p style={{ fontSize: 15.4 }}>Your order from</p>
                  </b>
                </div>
                {/* <div><p>{cart[0].restaurentName=== " " ? " " : cart[0].restaurentName  }</p></div> */}
                {/* <div style={{ fontSize: 14 }}>
                  {cart && cart[0] && (cart[0].restaurant_name === " ")
                    ? " "
                    : (cart && cart[0].restaurant_name)}
                </div> */}
                <hr />
                {cart &&
                  cart.map((item) => (
                    <div>
                      <div className="d-flex  justify-content-between">
                        <div>{item.quantity ? item.quantity : 0}</div>
                        <div>{item.item_name ? item.item_name : 0}</div>
                        <div>₹{item.price ? item.price : 0}</div>
                      </div>
                      <hr style={{ marginTop: "-50px" }} />
                    </div>
                  ))}
                <div className="d-flex justify-content-between">
                  <div>Items Subtotal</div>
                  <div>
                    {cart && cart.reduce((a, item) => a + item.price, 0)}
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <div>Delivary Fees</div>
                  <div>₹0</div>
                </div>
                <div className="d-flex justify-content-between">
                  <div>Tax and fees</div>
                  <div>₹0</div>
                </div>
                <div className="d-flex justify-content-between">
                  <div>
                    <b>Total</b>
                  </div>
                  <div>
                    <b>{cart && cart.reduce((a, item) => a + item.price, 0)}</b>
                  </div>
                </div>
                <div
                  style={{
                    background: "#2B8282",
                    padding: "20px",
                    color: "white",
                    fontSize: "20px",
                    marginTop: "100px",
                    border: "1px solid black",
                  }}
                >
                  {
                    <Link
                      to={`/lets-eat`}
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <span>
                        <i class="fas fa-greater-than"></i>
                      </span>
                      Modify Your Order
                    </Link>
                  }
                </div>
                <div
                  className="d-flex  justify-content-between bg-secondary text-white p-2 "
                  style={{ alignItems: "center" }}
                >
                  <div>
                    <b
                      style={{
                        textAlign: "center",
                        fontSize: 25.4,
                        position: "relative",
                        top: "15px",
                        left: 15,
                      }}
                    >
                      TOTAL
                    </b>
                  </div>
                  <div>
                    <b
                      style={{
                        textAlign: "center",
                        fontSize: 25.4,
                        position: "relative",
                        right: 25,
                        bottom: 10,
                      }}
                    >
                      {cart && cart.reduce((a, item) => a + item.price, 0)}
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CheckoutPageWrapper>
    </div>
  );
}
