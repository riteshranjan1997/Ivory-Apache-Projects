import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles({
  root: {
    width: 420,
    height: 620,
    margin: "2em auto",
    fontFamily: "sans-serif",
  },
  title: {},
});



export default function RegisterModel() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <p className={classes.title}>Create your account</p>
          <div>
            <label>First name</label>
            <br />
            <TextField
              error
              id="outlined-error"
              defaultValue="Hello World"
              variant="outlined"
              helperText="Incorrect entry."
            />
          </div>
          <br />
          <label>Last name</label>
          <br />
          <TextField
            error
            id="outlined-error"
            defaultValue="Hello World"
            variant="outlined"
            helperText="Incorrect entry."
          />
          <br />
          <TextField
            error
            id="outlined-error"
            defaultValue="Hello World"
            variant="outlined"
            helperText="Incorrect entry."
          />
          <br />
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
          <Checkbox
            value="checkedA"
            inputProps={{ "aria-label": "Checkbox A" }}
          />
          <label>Keep me signed in</label>
          <Link
            component="button"
            variant="body2"
            onClick={() => {
              console.info("I'm a button.");
            }}
          >
            Reset password
          </Link>
          <br />
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <br />
          <p>or</p>
          <br />
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <br />
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <br />
          <Link
            component="button"
            variant="body2"
            onClick={() => {
              console.info("I'm a button.");
            }}
          >
            Have an account? Sign in
          </Link>
        </CardContent>
      </Card>
    </>
  );
}
