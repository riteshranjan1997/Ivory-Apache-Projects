import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
// import { withStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography'



const useStyles= makeStyles({
    root: {
        marginTop:"50px",
        marginLeft:"60px",
        display:"flex",
        justifyContent:"center"
    },
    card:{
        display:"flex",
        flexDirection : "column",
        maxWidth:350,
        marginTop:"10px"       
    },
    media: {
        height:"100px",
        width:"100px",
        marginLeft:"100px"
    },
  });


function LandingPageSystem(){
    const classes = useStyles();
    return(

        <Grid container className={classes.root}  spacing={1}>
                <Grid item xs={12} sm={6} md={4} >
                    <Grid className={classes.card} container justify="center" spacing={1}>  
                         <img src="https://res.cloudinary.com/grubhub-assets/image/upload/v1567195464/illustration_1_sl_rg9zhj.svg" alt="System" />                                
                                   
                        <Typography gutterBottom variant="h5" component="h5">
                            Satisfy any craving
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Check out menus from popular local restaurants and chains. 
                            Order something new or tuck into your favorite go-to.
                        </Typography>                               
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Grid className={classes.card} container  justify="center" spacing={1}>  
                         <img src="https://res.cloudinary.com/grubhub-marketing/image/upload/f_auto,fl_lossy/v1584729955/HERMES/2020/DINER/BRD/BRD-20200316-COVID-19-RELIEF/DonatethechangeSLunauthenticated.png" height="100px" width="100px" alt="system" style={{marginLeft:"130px"}} />  
                        <Typography gutterBottom variant="h5" component="h5">
                            Support restaurants and drivers
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                                Donate your change to the Seamless Community Relief Fund at checkout. 
                                Donations go to charitable organizations supporting local restaurants and drivers impacted by COVID-19
                        </Typography>                               
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Grid className={classes.card} container justify="center" spacing={1}>  
                        <img src="https://res.cloudinary.com/grubhub-assets/image/upload/v1567195623/illustration_3_sl_ww1kc4.svg" alt="system" />                        
                        <Typography gutterBottom variant="h5" component="h5">
                            Cash in on Perks
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                                Kick back and enjoy exclusive deals and rewards. 
                                Discover new restaurants and get $100s in savings with Perks.
                        </Typography>                                
                    </Grid>
                </Grid>                
            </Grid>
    )
}

export default LandingPageSystem