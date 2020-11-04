import React from "react";
import AppBar from "../common/AppBar";

const useStyles = makeStyles({
  root: {
    width: 420,
    height: 620,
    margin: "2em auto",
    fontFamily: "sans-serif",
  },
  title: {},
});

function SigninLandingPage() {
  const classes = useStyles();

  return (
    <div>
      <AppBar />
      <div className={}>
        <img
          src="https://res.cloudinary.com/grubhub-marketing/image/upload/f_auto,fl_lossy,q_80/v1538431627/Homepage_Desktop_0018_Pizza_2x_qshvvo.jpg"
          alt="img"
        />
      </div>
    </div>
  );
}

export default SigninLandingPage;
