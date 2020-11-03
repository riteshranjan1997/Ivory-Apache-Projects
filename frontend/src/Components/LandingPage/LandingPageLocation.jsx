import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop:"-8px",
    },
    paper: {
        marginTop:"8px"        
    },
    // control: {
    //   padding: theme.spacing(2),
    // },
    signInBar:{
        color:"#2b8282",
        fontSize:"20px",
        marginTop:"100px",
        marginLeft:"150px"
    },
    location:{
        alignItems:"center",
        marginTop:"200px",
        margin:"10px"
    },
    button:{
        background:"#2b8282",
        color:"white",
        marginLeft:"5px",
        padding :"15px",
    },
    logo:{
        height:"120px",
        width:"180px",
        position:"absolute",
       top:"100px"
    }
  }));
  

//Added Location part,Logo and Image

function LandingPageLocation(){
    const classes = useStyles();
    return (
   
            <Grid container className={classes.root} spacing={1}>
                <Grid item xs={12} md={6}>
                    <Grid container justify="center" spacing={1}>            
                        <Box className={classes.paper} display={{ xs: 'none', sm: 'none', md: 'block'}} >             
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt = "FrontImage"
                                        // display={{ xs: 'none', sm: 'none', md: 'block'}}
                                        image="https://media-cdn.grubhub.com/image/upload/c_scale,w_1650/q_50,dpr_auto,f_auto,fl_lossy,c_crop,e_vibrance:20,g_center,h_900,w_800/v1539269005/Onboarding/SL/burger-and-fries.jpg"
                                        title="LandingPageImage"
                                    />
                                </CardActionArea>
                            </Card>
                        </Box>
                        <img className={classes.logo} src="https://res.cloudinary.com/grubhub-assets/image/upload/v1576524886/Seamless_logo_flxqyg.svg" alt="logo"/>
                    </Grid>                    
                </Grid>
                <Grid item xs={12} md={6}>
                    <Grid container justify="center" spacing={2}>     
                        <div className={`d-flex ${classes.signInBar} justify-content-end `}>
                            <div className="p-2">Get Perks in the App</div>
                            <div className="p-2">Sign in</div>
                        </div>                           
                            <Typography className={classes.location} variant="h3" gutterBottom>
                                <b>Seamless food delivary every time</b>
                            </Typography>  
                             <div>
                                <form>
                                    <TextField 
                                        id="outlined-basic" 
                                        label="Enter street address or zipcode"
                                         variant="outlined" 
                                         style={{ width:"250px"}} />
                                    <Button variant="contained" className={classes.button}>
                                        Find Food
                                    </Button>
                                </form>
                            </div>     
                    </Grid>                    
                </Grid>
            </Grid>       
    )
}

export default LandingPageLocation