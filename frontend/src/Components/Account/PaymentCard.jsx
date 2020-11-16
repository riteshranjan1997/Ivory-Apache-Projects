import React, { useEffect, useState } from "react";

import Style from "./card.module.css";

import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  // align-items: center;
  justify-content: center;
  margin-top: 60px;
`;

const Circle = styled.div`
  width: 4px;
  height: 4px;
  background: rgba(225, 225, 225, 0.2);
  border-radius: 50%;
  position: absolute;
  z-index: -1;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
`;

const LeftTrangle = styled.div`
  width: 0;
  height: 0;
  border-top: 50px solid transparent;
  border-right: 100px solid rgba(225, 225, 225, 0.2);
  border-bottom: 50px solid transparent;
  z-index: -1;
  position: absolute;
  left: 20%;
  top: 20%;
`;

const RightTrangle = styled.div`
  width: 0;
  height: 0;
  border-top: 50px solid transparent;
  border-left: 100px solid rgba(225, 225, 225, 0.2);
  border-bottom: 50px solid transparent;
  z-index: -1;
  position: absolute;
  left: 52%;
  top: 20%;
`;

const CardArea = styled.div`
  width: 350px;
  height: 200px;
  font-family: "Courier New", Courier, monospace;
  border-radius: 7px;
  position: relative;
  z-index: -2;
  color: white;
  box-shadow: 53px 53px 0px 0px rgba(235, 232, 234, 1);
  margin: auto;
  margin-top: 100px;
`;

const FormArea = styled.div`
  position: relative;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export default function Card(props) {
  const [cardType, setCardType] = useState("");

 const getCreditCardType = (accountNumber) => {
    let result = "unknown";

    if (/^5[1-5]/.test(accountNumber)) {
      result = "mastercard";
    } else if (/^4/.test(accountNumber)) {
      result = "visa";
    } else if (/^3[47]/.test(accountNumber)) {
      result = "amex";
    } else {
      result = "rupay";
    }

    setCardType(result);
  };

  useEffect(() => {
    getCreditCardType(props.card_number);
  }, []);

  return (
    <CardContainer>
      <div>
        <CardArea
          className={
            cardType === "mastercard"
              ? Style.mastercard
              : cardType === "visa"
              ? Style.visa
              : cardType === "amex"
              ? Style.amex
              : Style.unknown
          }
        >
          <Circle left="25%" top="2px" />
          <Circle left="25%" top="10px" />
          <Circle left="25%" top="20px" />
          <Circle left="25%" top="30px" />
          <Circle left="25%" top="40px" />
          <Circle left="25%" top="50px" />
          <Circle left="25%" top="60px" />

          <Circle left="28%" top="2px" />
          <Circle left="28%" top="10px" />
          <Circle left="28%" top="20px" />
          <Circle left="28%" top="30px" />
          <Circle left="28%" top="40px" />

          <Circle left="31%" top="2px" />
          <Circle left="31%" top="10px" />
          <Circle left="31%" top="20px" />
          <Circle left="31%" top="30px" />
          <Circle left="31%" top="40px" />
          <Circle left="31%" top="50px" />
          <Circle left="31%" top="60px" />
          <Circle left="31%" top="70px" />
          <Circle left="31%" top="80px" />

          <Circle left="75%" top="120px" />
          <Circle left="75%" top="130px" />
          <Circle left="75%" top="140px" />
          <Circle left="75%" top="150px" />
          <Circle left="75%" top="160px" />
          <Circle left="75%" top="170px" />
          <Circle left="75%" top="180px" />
          <Circle left="75%" top="190px" />
          <Circle left="75%" top="198px" />

          <Circle left="78%" top="160px" />
          <Circle left="78%" top="170px" />
          <Circle left="78%" top="180px" />
          <Circle left="78%" top="190px" />
          <Circle left="78%" top="198px" />

          <Circle left="81%" top="140px" />
          <Circle left="81%" top="150px" />
          <Circle left="81%" top="160px" />
          <Circle left="81%" top="170px" />
          <Circle left="81%" top="180px" />
          <Circle left="81%" top="190px" />
          <Circle left="81%" top="198px" />

          <LeftTrangle />
          <RightTrangle />
          <div className={Style.imgContainer}>
            <img
              className={Style.chip}
              src="chip.png"
              alt="chip"
              style={{ width: "50px" }}
            />
            {cardType === "mastercard" ? (
              <img className={Style.type} src="master_logo.png" alt="Company" />
            ) : cardType === "visa" ? (
              <img className={Style.type} src="visa_logo.png" alt="Company" />
            ) : cardType === "amex" ? (
              <img className={Style.type} src="amex_logo.png" alt="Company" />
            ) : cardType === "rupay" ? (
              <img className={Style.type} src="rupay_logo.jpg" alt="Company" />
            ) : null}
          </div>
          <div className={Style.cardNo}>
            <p>{props.card_number.toString().slice(0, 4)}</p>
            <p>{props.card_number.toString().slice(4, 8)}</p>
            <p>{props.card_number.toString().slice(8, 12)}</p>
            <p>{props.card_number.toString().slice(12, 16)}</p>
          </div>

          <div className={Style.details}>
            <small>NAME</small>
            <small>VALID</small>
            <small>CVV</small>
          </div>

          <div className={Style.details}>
            <div>
              <p>abc</p>
            </div>

            <div className={Style.valid}>
              <p>{props.expires_on.split("/")[1]}</p>{" "}
              {props.expires_on.split("/")[1] ? <p> / </p> : <p> </p>}{" "}
              <p>{props.expires_on.split("/")[2]}</p>
            </div>

            <div>
              <p>{props.security_code}</p>
            </div>
          </div>
        </CardArea>
      </div>
    </CardContainer>
  );
}
