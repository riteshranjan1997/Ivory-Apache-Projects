import React, { useState, useEffect } from "react";
import Bar from "../common/AppBar";
import SideBar from "./SideBar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
// import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Styled from "styled-components";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import ErrorBar from "../../Components/common/ErrorBar";

const LocationWrapper = Styled.div`    
    width:250px;
    
    li{
        width:248px;
        padding:10px;
        border:1px solid #E0E0E0;
        border-top:none;
    }
    ul{        
        position:relative;
        left:-38px;
        top :-3px;
    }
    ul li:hover {
        background : #2b8282;
        color : white;
    }
`;

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  content: {
    padding: "20px",
  },
  toolbar: {
    toolbar: theme.mixins.toolbar,
  },
  title: {
    fontSize: 16,
    fontWeight: "bolder",
    textAlign: "left",
    padding: "5px",
  },
  pos: {
    marginBottom: 12,
  },
  nameField: {
    padding: "5px",
    display: "flex",
    justifyContent: "space-between",
    fontSize: "12px",
    color: "grey",
  },
  dividerFullWidth: {
    margin: `20px 0 0 ${theme.spacing(2)}px`,
  },
  orderHistory: {
    border: "1px solid white",
    outline: "none",
  },
  orderHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "grey",
  },
  orderSearchFilter: {
    display: "flex",
  },
  floatLeft: {
    float: "left",
    color: "grey",
  },
  upcomingOrders: {
    display: "flex",
    justifyContent: "center",
  },
  date: {
    width: "130px",
    height: "130px",
    margin: "10px",
  },
  dateCard: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
  datePart: {
    display: "flex",
    justifyContent: "center",
    marginTop: "50px",
  },
  insideDateCard: {
    padding: "5px",
    fontWeight: "lighter",
  },
  closeMark: {
    color: "#2B8282",
    fontWeight: "bolder",
  },
  dialog: {
    display: "flex",
    flexDirection: "column",
  },
}));
function PastOrders() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  let date = new Date();
  var dateItem = String(date).split(" ");
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const [query, setQuery] = React.useState("");
  const [data, setData] = React.useState([]);
  useEffect(() => {
    return axios
      .get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?limit=5&access_token=pk.eyJ1Ijoic291bmRhcnlhbWVjc2UiLCJhIjoiY2toMmUxZHBoMGJtdDJ3cGNqOWhmbTJqaiJ9.sZeF_rzMTfs2fPBA4JsHxQ`
      )
      .then((res) => setData(res.data.features))
      .catch((err) => console.log(err));
  }, [query]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getDate = (i) => {
    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + i);
    dateItem = String(tomorrow).split(" ");
  };

  const isAuth = useSelector((state) => state.auth.isAuth);

  if (!isAuth) {
    <Redirect to="/" />;
  }
  return (
    <>
      <Bar />
      <ErrorBar />
      <Grid container>
        <SideBar />

        <Grid item xs={9} style={{ marginTop: "60px" }}>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Card className={classes.root}>
              <CardContent>
                <Typography className={classes.title}>
                  <div className={classes.upcomingOrders}>
                    <div style={{ marginRight: "20px" }}>
                      <img
                        src="https://www.seamless.com/assets/img/no-results.svg"
                        height="100px"
                        alt="upcomingorders"
                      />
                    </div>
                    <div>
                      <div>
                        <h2>Your upcoming orders </h2>
                      </div>
                      <div>
                        <p className="text-muted">
                          Plan out your food for Today and later in the week
                        </p>
                      </div>
                      <Button
                        style={{
                          backgroundColor: "#2B8282",
                          color: "white",
                          width: "233px",
                        }}
                      >
                        <span>+</span>Add a meal
                      </Button>
                    </div>
                  </div>
                  <div className={classes.datePart}>
                    {new Array(5).fill(0).map((item, i) => (
                      <Card className={classes.date}>
                        <CardContent>
                          {i === 0 ? (
                            <div className={classes.dateCard}>
                              <div className={classes.insideDateCard}>
                                Today
                              </div>
                              <div className={classes.insideDateCard}>
                                <h3 className="text-muted">
                                  <b>{dateItem[2]}</b>
                                </h3>
                              </div>
                              <div
                                style={{
                                  color: "#2B8282",
                                  width: "100px",
                                  fontWeight: "lighter",
                                }}
                                onClick={handleClickOpen}
                              >
                                <span>+</span>Add a meal
                              </div>
                            </div>
                          ) : (
                            <div className={classes.dateCard}>
                              {getDate(i)}
                              <div className={classes.insideDateCard}>
                                {dateItem[0]}
                              </div>
                              <div className={classes.insideDateCard}>
                                <h3 className="text-muted">
                                  <b>{dateItem[2]}</b>
                                </h3>
                              </div>
                              <div
                                style={{
                                  color: "#2B8282",
                                  width: "100px",
                                  fontWeight: "lighter",
                                }}
                                onClick={handleClickOpen}
                              >
                                <span>+</span>Add a meal
                              </div>
                              <div className={classes.dialog}>
                                <Dialog
                                  fullScreen={fullScreen}
                                  open={open}
                                  fullWidth="fullwidth"
                                  maxWidth="xs"
                                  onClose={handleClose}
                                  aria-labelledby="responsive-dialog-title"
                                >
                                  <DialogTitle id="responsive-dialog-title">
                                    <h4
                                      className={classes.closeMark}
                                      onClick={handleClose}
                                    >
                                      {"X"}
                                    </h4>
                                  </DialogTitle>

                                  <DialogContent>
                                    <h4 className={classes.modelHeading}>
                                      Your order settings
                                    </h4>
                                    <div className={classes.buttons}>
                                      <Button
                                        onClick={handleClose}
                                        style={{
                                          backgroundColor: "#2B8282",
                                          color: "white",
                                          width: "180px",
                                          height: "40px",
                                          borderRadius: "5px  0px 0px 5px",
                                        }}
                                      >
                                        Delivary
                                      </Button>
                                      <Button
                                        onClick={handleClose}
                                        style={{
                                          border: "1px solid #2B8282",
                                          color: "#2B8282",
                                          width: "180px",
                                          height: "40px",
                                          borderRadius: "0px  5px 5px 0px",
                                        }}
                                      >
                                        PickUp
                                      </Button>
                                    </div>

                                    <DialogContentText>
                                      <div className={classes.design}></div>
                                      <div
                                        style={{
                                          padding: "20px 0px 20px 0px ",
                                        }}
                                      >
                                        When would You like your order?
                                      </div>
                                      <div></div>
                                      <div>Delivary Address</div>
                                      <div>
                                        <TextField
                                          id="outlined-basic"
                                          label="Enter street address or zipcode"
                                          variant="outlined"
                                          value={query}
                                          onChange={(e) =>
                                            setQuery(e.target.value)
                                          }
                                          style={{ width: "360px" }}
                                        />
                                      </div>
                                      <LocationWrapper>
                                        <ul
                                          style={{
                                            listStyleType: "none",
                                            textAlign: "left",
                                          }}
                                        >
                                          {query &&
                                            data &&
                                            data.map((item, i) => (
                                              <>
                                                <li
                                                  className={`dropDown`}
                                                  key={item.id}
                                                  onClick={(e) => {
                                                    setQuery(item.place_name);
                                                  }}
                                                >
                                                  {item.place_name}
                                                </li>
                                              </>
                                            ))}
                                        </ul>
                                      </LocationWrapper>
                                      <Button
                                        style={{
                                          backgroundColor: "#2B8282",
                                          color: "white",
                                          width: "360px",
                                          height: "40px",
                                        }}
                                      >
                                        Browse All Restaurents
                                      </Button>
                                      <div className={classes.design}></div>
                                    </DialogContentText>
                                  </DialogContent>
                                </Dialog>
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </Typography>
              </CardContent>
            </Card>
          </main>
        </Grid>
      </Grid>
    </>
  );
}

export default PastOrders;
