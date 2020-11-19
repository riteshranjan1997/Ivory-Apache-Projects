import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function LandingPageHeader() {
  const isAuth = useSelector((state) => state.auth.isAuth);

  if (!isAuth) {
    <Redirect to="/" />;
  }

  return (
    <div
      style={{
        height: "58px",
        backgroundColor: "#0f8c92",
        textAlign: "center",
        paddingTop: "10px",
      }}
    >
      <p
        style={{
          fontFamily: "graphik",
          fontSize: "14px",
          color: "white",
          marginTop: "10px",
          fontWeight: "700",
        }}
      >
        Your health and safety is our priority, from restaurant to doorstep{" "}
        <Link style={{ color: "white", marginLeft: "10px" }}>Learn more</Link>
      </p>
    </div>
  );
}

export default LandingPageHeader;
