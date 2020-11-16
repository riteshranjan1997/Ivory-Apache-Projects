import React from "react";
import Bar from "../common/AppBar";
import SideBar from "./SideBar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { useSelector } from "react-redux";
import OrderCard from "../OrderCard";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import {Redirect} from "react-router-dom"


const useStyles = makeStyles((theme) => ({
  root: {},
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
}));
function PastOrders() {
  const classes = useStyles();
  const userOrders = useSelector((state) => state.auth.user_data.past_orders);
  const isAuth = useSelector((state) => state.auth.isAuth);
  if(!isAuth){
    <Redirect to ="/" />
  }
  return (
    <>
      <Bar />

      <Grid container>
        <SideBar />

        <Grid item xs={9} style={{ marginTop: "60px" }}>
          <Grid container>
            <Grid item xs={12}>
              <main className={classes.content}>
                <div className={classes.toolbar} />
                <Card className={classes.root}>
                  <CardContent>
                    <Typography className={classes.title}>
                      <div className={classes.orderHeader}>
                        <div>Orders</div>
                        <div>Restaurant</div>
                        <div className={classes.orderSearchFilter}>
                          <div>
                            <i class="fas fa-search"></i>
                          </div>
                          <div>
                            <input
                              type="text"
                              placeholder="Filter Order History"
                              className={classes.orderHistory}
                            />
                          </div>
                        </div>
                        <div className={classes.orderSearchFilter}>
                          <div style={{ marginTop: "5px" }}>Sort By:</div>
                          <div>
                            <select
                              class="form-control"
                              id="exampleFormControlSelect1"
                            >
                              <option>Most Recent</option>
                              <option>Ratings</option>
                              <option>Relevance</option>
                              <option>Restaurant(A-Z)</option>
                              <option>Restaurant(Z-A)</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </Typography>
                  </CardContent>
                </Card>
              </main>
            </Grid>

            {userOrders && userOrders.map((ele) => {
              if (userOrders.length === 0) {
                return (
                  <Grid item xs={12} style={{margin:"10px"}}>
                    <div style={{ margin: "15px 20px", }}>
                      <h3 style={{ fontFamily: "esti" }}></h3>
                      <Link to="/lets-eat">
                        <Button>Order Now</Button>
                      </Link>
                    </div>
                  </Grid>
                );
              } else {
                return (
                  <Grid item xs={3} style={{margin:"10px"}}>
                    <div style={{ margin: "15px 20px" }}>
                      <OrderCard {...{ ele }} />
                    </div>
                  </Grid>
                );
              }
            })}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default PastOrders;
