import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "80px 0px",
    textAlign: "center",
    [theme.breakpoints.down('sm')]: {

    }
  },
  card: {
    display: "flex",
    flexDirection: "column",
    maxWidth: 350,
  },
  cardTitle:{
    fontFamily:"esti"
  },
  media: {
    height: "100px",
    width: "100px",
  },
}));

function LandingPageSystem() {
  const classes = useStyles();
  return (
    <Container fixed >
      <Grid container alignItems="center" justify=""  direction="row" className={classes.root}>
        <Grid item xs={12} md={4}>
          <div className={classes.card}>
            <img
              src="https://res.cloudinary.com/grubhub-assets/image/upload/v1567195464/illustration_1_sl_rg9zhj.svg"
              alt="System"
            />

            <Typography gutterBottom variant="h5" component="h5" className={classes.cardTitle}>
              Satisfy any craving
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Check out menus from popular local restaurants and chains. Order
              something new or tuck into your favorite go-to.
            </Typography>
          </div>
        </Grid>

        <Grid item xs={12} md={4}>
          <div className={classes.card}>
            <img
              src="https://res.cloudinary.com/grubhub-marketing/image/upload/f_auto,fl_lossy/v1584729955/HERMES/2020/DINER/BRD/BRD-20200316-COVID-19-RELIEF/DonatethechangeSLunauthenticated.png"
              height="100px"
              width="100px"
              alt="system"
              style={{ marginLeft: "130px" }}
            />
            <Typography gutterBottom variant="h5" component="h5" className={classes.cardTitle}>
              Support restaurants and drivers
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Donate your change to the Seamless Community Relief Fund at
              checkout. Donations go to charitable organizations supporting
              local restaurants and drivers impacted by COVID-19
            </Typography>
          </div>
        </Grid>

        <Grid item xs={12}  md={4}>
          <div className={classes.card}>
            <img
              src="https://res.cloudinary.com/grubhub-assets/image/upload/v1567195623/illustration_3_sl_ww1kc4.svg"
              alt="system"
            />
            <Typography gutterBottom variant="h5" component="h5" className={classes.cardTitle}>
              Cash in on Perks
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Kick back and enjoy exclusive deals and rewards. Discover new
              restaurants and get $100s in savings with Perks.
            </Typography>
          </div>
        </Grid>
      </Grid>
      </Container>
  );
}

export default LandingPageSystem;
