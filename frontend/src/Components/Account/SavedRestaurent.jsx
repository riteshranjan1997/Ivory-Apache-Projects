import React , { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Bar from "../common/AppBar";
import SideBar from "./SideBar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";

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

function SavedRestaurent() {
    const classes = useStyles();
    const dispatch = useDispatch();
  return (
    <>
      <Bar />
      <Grid container>
        <SideBar />

        <Grid item xs={9} style={{ marginTop: "60px" }}>
        <main className={classes.content}>
                <div className={classes.toolbar} />
                <Card className={classes.root}>
                  <CardContent>
                    <Typography className={classes.title}>
                      <div className={classes.orderHeader}>
                        <div>Restaurant</div>
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
      </Grid>
    </>
  );
}

export default SavedRestaurent;
