import React from "react";
import Styles from "./RegisterModel.module.css";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { registerRequest,googleLoginRequest } from "../../redux/Auth/action";
import { Redirect,Link } from "react-router-dom";
import {
  Checkbox,
  Button,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import GoogleLogin from 'react-google-login'

const useStyles = makeStyles({});

export default function RegisterModel() {
  const dispatch = useDispatch();
  const [user_data, setAddData] = React.useState({});

  const isAuth = useSelector((state) => state.auth.isAuth);

  const handleRegister = (e) => {
    let payload = {
      ...user_data,
    };
    console.log(payload);
    dispatch(registerRequest(payload));
  };

  const responseGoogle = (response) => {
    const payload = {tokenId:response.tokenId}
    dispatch(googleLoginRequest(payload));
  }

  if (isAuth) {
    return <Redirect to="/lets-eat" />;
  }

  return (
    <>
      <div className={`card ${Styles.main}`}>

        <div className="row">
          <div className="col">
            <h5 className={Styles.title}>Create your account</h5>
          </div>
        </div>

        <div className="row my-2">
          <div className="col-6">
            <label>First name</label>
            <br />
            <input
            className={Styles.input}
              id="outlined-error-helper-text"
              type="text"
              required
              value={user_data.firstname}
              onChange={(e) =>
                setAddData({ ...user_data, first_name: e.target.value })
              }
              variant="outlined"
            />
          </div>

          <div className="col-6">
            <label>Last name</label>
            <br />
            <input
            className={Styles.input}
              id="outlined-error-helper-text"
              type="text"
              required
              value={user_data.lastname}
              onChange={(e) =>
                setAddData({ ...user_data, last_name: e.target.value })
              }
              variant="outlined"
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label>Email</label>
            <br />
            <input
            className={Styles.input}
              id="outlined-error-helper-text"
              type="text"
              required
              value={user_data.email}
              onChange={(e) =>
                setAddData({ ...user_data, email: e.target.value })
              }
              variant="outlined"
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label>password</label>
            <br />
            <input
            className={Styles.input}
            value={user_data.password}
              type="password"
              onChange={(e) => setAddData({ ...user_data, password: e.target.value })}
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <Checkbox
              value="checkedA"
              inputProps={{ "aria-label": "Checkbox A" }}
            />
            <label>Keep me signed in</label>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <button 
            className="btn btn-light"
              style={{backgroundColor:"#2b8282",color:"white",fontFamily:"Poppins",fontSize:"14px",fontWeight:"500", padding:"10px 16px"}}
              color="primary"
              onClick={handleRegister}
            >
              Create your account
            </button>
          </div>
        </div>
        <p style={{ textAlign: "center",margin:"10px" }}>or</p>

        <br />
        <div className="row">
          <div className="col">
          <GoogleLogin
        clientId="1069087639484-chisqt1vcpiq2rqcbk2dvr8u3lr2k9hk.apps.googleusercontent.com"
        buttonText={<div style={{marginLeft:"60px",fontWeight:"bolder"}}>Continue With Google</div>}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        theme="dark"   
      >

      </GoogleLogin>
          </div>
        </div>

        <div className="row">
          <div className="col" style={{ textAlign: "center",marginTop:"15px" , fontSize:"13px"}}>
            <p>Have an account?{" "} <Link
              to="/login"
            >
              Sign in
            </Link></p>
            
          </div>
        </div>

        <span style={{ textAlign: "center", fontSize:"13px"}}>
          By creating your Seamless account, you agree to the{" "}
          <Link
          >
            Terms of Use
          </Link>{" "}
          and{" "}
          <Link
          >
            Privacy Policy
          </Link>
        </span>
      </div>
    </>
  );
}
