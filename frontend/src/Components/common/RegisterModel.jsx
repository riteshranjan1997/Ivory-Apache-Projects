import React from "react";
import Styles from "./RegisterModel.module.css";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { registerRequest } from "../../redux/Auth/action";
import { Redirect } from "react-router-dom";
import {
  Card,
  TextField,
  Checkbox,
  Link,
  Button,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const useStyles = makeStyles({});

export default function RegisterModel() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [user_data, setAddData] = React.useState({});

  // for show/hide password
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  const isAuth = useSelector((state) => state.auth.isAuth);

  const handleRegister = (e) => {
    let payload = {
      ...user_data,
    };
    console.log(payload);
    dispatch(registerRequest(payload));
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    if(prop == "password"){
      setAddData({ ...user_data, password: event.target.value })
    }
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

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
        <div className="row">
          <div className="col">
            <label>First name</label>
            <br />
            <TextField
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

          <div className="col">
            <label>Last name</label>
            <br />
            <TextField
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
            <TextField
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
            <OutlinedInput
              id="password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
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
            <Button
              variant="contained"
              color="primary"
              onClick={handleRegister}
            >
              Create your account
            </Button>
          </div>
        </div>
        <p style={{ textAlign: "center",margin:"10px" }}>or</p>
        <div className="row">
          <div className="col">
            <Button variant="contained" color="primary">
              facebook
            </Button>
          </div>
        </div>

        <br />
        <div className="row">
          <div className="col">
            <Button variant="contained" color="primary">
              google
            </Button>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <p>Have an account?{" "} <Link
              component="button"
              variant="body2"
              onClick={() => {
                console.info("I'm a button.");
              }}
            >
              Sign in
            </Link></p>
            
          </div>
        </div>

        <span>
          By creating your Seamless account, you agree to the{" "}
          <Link
            component="button"
            variant="body2"
            onClick={() => {
              console.info("I'm a button.");
            }}
          >
            Terms of Use
          </Link>{" "}
          and{" "}
          <Link
            component="button"
            variant="body2"
            onClick={() => {
              console.info("I'm a button.");
            }}
          >
            Privacy Policy
          </Link>
        </span>
      </div>
    </>
  );
}
