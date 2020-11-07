import React from "react";
import Styles from "./LoginModel.module.css";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "../../redux/Auth/action";
import { Redirect, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Card, TextField, Checkbox, Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles({});

export default function LoginModel() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const isError = useSelector((state) => state.auth.isError);
  const message = useSelector((state) => state.auth.message);
  const [user_data, setAddData] = React.useState({});

  const handleLogin = () => {
    let payload = {
      email: user_data.email,
      password: user_data.password,
    };
    dispatch(loginRequest(payload));
  };

  if (isAuth) {
    return <Redirect to="/lets-eat" />;
  }

  return (
    <>
      <div className={`card ${Styles.main}`}>
        <h5 className={Styles.title}>Sign in with your Seamless account</h5>

        <div className="row">
          <div className="col">
            <label>Email</label>
            <br />
            <TextField
              id="email"
              type="text"
              required
              // value={user_data.email}
              onChange={(e) =>
                setAddData({ ...user_data, email: e.target.value })
              }
              variant="outlined"
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label>Password</label>
            <br />
            <TextField
              id="password"
              type="text"
              required
              // value={user_data.password}
              onChange={(e) =>
                setAddData({ ...user_data, password: e.target.value })
              }
              variant="outlined"
            />
          </div>
        </div>

        <div className="row">
          <div className="col justify-content-start">
            <Checkbox
              value="true"
              label="Keep me signed in"
              inputProps={{ "aria-label": "Checkbox A" }}
            />
            <label>Keep me signed in</label>
          </div>

          <div className="col justify-content-end">
            <Link to="/">Reset password</Link>
          </div>
        </div>

        <div className="row">
          <div className="col">
          <button type="button" class="btn btn-danger" onClick={handleLogin}>Sign in</button>
          </div>
        </div>

        <p>or</p>

        <div className="row">
          <div className="col">
            <Button variant="contained" color="primary">
              Primary
            </Button>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <Button variant="contained" color="primary">
              Primary
            </Button>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <Link to="/create-account">Create your account</Link>
          </div>
        </div>
      </div>
    </>
  );
}
