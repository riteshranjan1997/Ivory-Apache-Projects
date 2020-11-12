import React from "react";
import { useSelector } from "react-redux";
import Styled from 'styled-components'
import AppBar from '../common/AppBar'

const CheckoutPageWrapper = Styled.div`
    
   margin-left:30px;
   div:nth-child(1){
      margin-bottom:40px;
   }
   p{
     font-size:10px;
     line-height:1px;
   }
`

export default function CheckoutPage() {
  const userData = useSelector((state)=>state.auth.user_data)
  const cart = useSelector((state)=>state.cart.cart)
  console.log(cart[0].restaurant_name)
  console.log(userData)
  return (
    <div>
      <AppBar/>
  <CheckoutPageWrapper>
    <div className="row">
      <div className="col">
        <div className="row">
          <div className="col-9">
              <div style={{marginTop:"75px"}}>
                  <h2 style={{textAlign:"left"}}><b>You've entered a new address</b></h2>
                  <h2 style={{textAlign:"left"}}><b>Does everything below look correct?</b></h2>
              </div>
              <div style={{textAlign:"left"}}><b>Contact</b></div>
                <div className="row">
                  <div class="form-group col-4">
                  <input type="text" class="form-control" id="exampleInputPassword1" placeholder="first_name"/>
                  </div>
                </div>
                <div className="row">
                  <div class="form-group col-4">
                  <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Last_name"/>
                  </div>
                </div>
                <div className="row">
                  <div class="form-group col-4">
                  <input type="text" class="form-control" id="exampleInputPassword1" placeholder="emailId"/>
                  </div>
                </div>
                <div className="row">
                  <div class="form-group col-4">
                  <input type="text" class="form-control" id="exampleInputPassword1" placeholder="phone No"/>
                  </div>        
                </div>
                <div className="text-left">
                    <p>By providing your phone number, you consent to receive text messages from</p>
                    <p>Grubhub related to your order. Standard message rates may apply. See our Terms</p>
                    <p>of Use for more information.</p>
                </div>
                <div style={{textAlign:"left"}}><b>Address</b></div>
                  <div className="row">
                    <div class="form-group col-3">
                      <input type="text" class="form-control" id="exampleInputPassword1" placeholder="address"/>
                    </div>
                    <div class="form-group col-3">
                      <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Apartment"/>
                    </div>  
                    <div class="form-group col-3">
                        <input type="text" class="form-control" id="exampleInputPassword1" placeholder="cross street"/>
                    </div>      
                  </div>
                  <div className="row">
                    <div class="form-group col-3">
                      <input type="text" class="form-control" id="exampleInputPassword1" placeholder="city"/>
                    </div>
                    <div class="form-group col-3">
                      <input type="text" class="form-control" id="exampleInputPassword1" placeholder="area"/>
                    </div>  
                    <div class="form-group col-3">
                        <input type="text" class="form-control" id="exampleInputPassword1" placeholder="zip code"/>
                    </div>      
                  </div>
                  <div>
                    <div style={{textAlign:"left"}}><b>Delivary Instruction</b></div>
                      <div class="form-group col-9">
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="leave info for your driver"></textarea>
                      </div>
                  </div>
                  <div class="form-group form-check col-4">
                      <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                      <label class="form-check-label" for="exampleCheck1">Save Address</label>
                  </div>
                  <div className="d-flex justify-content-left">
                    <button type="submit" className="btn btn-primary mb-2 col-9" style={{alignSelf:"left"}}>Continue to payment method</button>
                  </div>
          </div>
          
          <div className="col-3 border" style={{position:"fixed",marginLeft:"74%" ,fontSize:"12px",lineHeight:"2px"}} >
              <div style={{marginTop:"85px"}} ><b><p>Your order from</p></b></div>
              <div><p>{cart[0].restaurantName=== " " ? " " : cart[0].restaurantName  }</p></div>
              <div>Restaurant Name</div>
              <hr/>
              {cart && cart.map((item)=>(
                <div>
                  <div className="d-flex justify-content-between">
                    <div><p>{item.quantity ?item.quantity:0 }</p></div>
                    <div><p>{item.name ? item.name :0 }</p></div>
                    <div><p>₹{item.totalPrice ?item.totalPrice:0 }</p></div>
                  </div>
                  <hr/>
                </div>
              ))}
              <div className="d-flex justify-content-between">
                <div>Items Subtotal</div>
                <div>{cart && cart.reduce((a,item)=>(
                                  a+item.totalPrice
                    ),0)}</div>
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
                <div><b>Total</b></div>
                <div><b>Rupees</b></div>
              </div>
              <div style={{background:"#2B8282",padding:"20px",color:"white",fontSize:"20px",marginTop:"220px"}}><span>{">"}</span>Modify Your Order</div>
              <div className="d-flex  justify-content-between bg-secondary text-white p-2 " >
                <div><b>Total</b></div>
                <div><b>Rupees</b></div>
              </div>
              </div>
        </div>
       </div>
      </div>
  </CheckoutPageWrapper>
  </div>
  )
}
