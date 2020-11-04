import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, TextField, Checkbox, Link, Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles({
  root: {
    width: 420,
    height: 620,
    margin: "2em auto",
    fontFamily: "sans-serif",
  },
  title: {},
});

export default function LoginModel() {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <p className={classes.title}>Sign in with your Seamless account</p>
          <label>Email</label>
          <br />
          <TextField
            error
            id="outlined-error"
            defaultValue="Hello World"
            variant="outlined"
            helperText="Incorrect entry."
          />
          <br />
          <label>Password</label>
          <br />
          <TextField
            error
            id="outlined-error"
            defaultValue="Hello World"
            variant="outlined"
            helperText="Incorrect entry."
          />
          <br />
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
            Create your account
          </Link>
        </CardContent>
      </Card>
    </>
  );
}
