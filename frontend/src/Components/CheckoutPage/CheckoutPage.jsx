import React from "react";
import Styled from 'styled-components'

const CheckoutPageWrapper = Styled.div`
   margin-top:100px;
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
  return (
  <CheckoutPageWrapper>
    <div>
      <div>
          <div>
            <h2 style={{textAlign:"left"}}><b>You've entered a new address</b></h2>
          <h2 style={{textAlign:"left"}}><b>Does everything below look correct?</b></h2>
          </div>
          <div style={{textAlign:"left"}}><b>Contact</b></div>
            <div className="row">
              <div class="form-group col-4">
              <input type="text" class="form-control" id="exampleInputPassword1"/>
              </div>
            </div>
            <div className="row">
              <div class="form-group col-4">
              <input type="text" class="form-control" id="exampleInputPassword1"/>
              </div>
            </div>
            <div className="row">
              <div class="form-group col-4">
              <input type="text" class="form-control" id="exampleInputPassword1"/>
              </div>
            </div>
            <div className="row">
              <div class="form-group col-4">
              <input type="text" class="form-control" id="exampleInputPassword1"/>
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
                  <input type="text" class="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="form-group col-3">
                  <input type="text" class="form-control" id="exampleInputPassword1"/>
                </div>  
                <div class="form-group col-3">
                    <input type="text" class="form-control" id="exampleInputPassword1"/>
                </div>      
              </div>
              <div className="row">
                <div class="form-group col-3">
                  <input type="text" class="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="form-group col-3">
                  <input type="text" class="form-control" id="exampleInputPassword1"/>
                </div>  
                <div class="form-group col-3">
                    <input type="text" class="form-control" id="exampleInputPassword1"/>
                </div>      
              </div>
              <div>
                <div style={{textAlign:"left"}}><b>Delivary Instruction</b></div>
                  <div class="form-group col-9">
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div>
              </div>
              <div class="form-group form-check col-2">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                  <label class="form-check-label" for="exampleCheck1">Save Address</label>
              </div>
              <div className="d-flex justify-content-left">
                <button type="submit" className="btn btn-primary mb-2 col-9" style={{alignSelf:"left"}}>Continue to payment method</button>
              </div>
          </div>
      </div>
  </CheckoutPageWrapper>
  )
}
