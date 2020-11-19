import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeAuthError } from "../../redux/Auth/action";
import { removeAppError } from "../../redux/app/action";

export default function ErrorBar(props) {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const appError = useSelector((state) => state.app.isError);
  const authError = useSelector((state) => state.auth.isError);
  const appErrorMsg = useSelector((state) => state.app.message);
  const authErrorMsg = useSelector((state) => state.auth.message);
  const dispatch = useDispatch();
  console.log("in error bar for auth", authError, authErrorMsg);
  console.log("in error bar for app", appError, appErrorMsg);

  if (!isAuth) {
    <Redirect to="/" />;
  }

  if (appError) {
    setTimeout(() => {
      dispatch(removeAppError());
    }, 1500);
    return (
      <div
        className="container"
        style={{
          textAlign: "center",
          color: "white",
          fontSize: "14",
          fontFamily: "Poppins",
          backgroundColor: "rgb(217, 83, 79)",
          height: 50,
        }}
      >
        <p>{appErrorMsg}</p>
      </div>
    );
  } else if (authError) {
    setTimeout(() => {
      dispatch(removeAuthError());
    }, 1500);
    return (
      <div
        className="container"
        style={{
          textAlign: "center",
          alignSelf: "center",
          color: "white",
          fontSize: "14",
          fontFamily: "Poppins",
          backgroundColor: "rgb(217, 83, 79)",
          height: 50,
        }}
      >
        <p>{authErrorMsg}</p>
      </div>
    );
  } else return null;
}
