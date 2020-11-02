import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        marginTop:"50px",
        
    },
    headings:{
       textAlign:"left",
       marginLeft:"50px"
    }
});

function LandingPageDelivary(){
    const classes = useStyles();
    return(
        <Grid container className={classes.root} spacing={1}>
            <Grid item xs={12} md={6}>
                <Grid container  spacing={1}>  
                    <Typography className={classes.headings} gutterBottom variant="h5" component="h2">
                             Restaurants near you, delivered fast  
                             <Typography variant="body2" color="textSecondary" component="p" >
                            Seamless is simply the easiest way to order food for delivery or takeout. 
                            Whatever you're in the mood for, wherever you're in the mood for it, you've got it. 
                            No menus, no phone calls, no repeating yourself. Just simple neighborhood food delivery. 
                            Seamless is a part of the Grubhub Inc. portfolio of brands. 
                            For more information on Grubhub, Inc., please visit about.grubhub.com.
                        </Typography>                
                    </Typography>
                    
                </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
                <Grid container  spacing={1}>  
                    <img className="img-fluid" src="https://media-cdn.grubhub.com/image/upload/f_auto,fl_lossy,w_570/v1539270959/Onboarding/SL/female-friends-lunch.png" alt="description"/>
                    
                </Grid>
            </Grid>
        </Grid>
    )
}

export default LandingPageDelivary