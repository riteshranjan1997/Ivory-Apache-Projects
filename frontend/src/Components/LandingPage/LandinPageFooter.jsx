import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import { createMuiTheme } from '@material-ui/core/styles';
// import { ThemeProvider } from '@material-ui/styles';
// import {Link} from 'react-router-dom'


const useStyles = makeStyles({
    root: {
        background:"#2b8282",
        color:"white",
        display:"flex",
        alignItems:"center",
        justifyContent:"left",
        padding:"30px",
        textAlign:"left"
    },
    headings:{
       textAlign:"left",
    },
    font:{
        fontSize:12,
    },
    socialMedia:{
        display:"flex",        
    },
    socialMediaItem:{
        padding:"10px"
    }
});

const useStyles1 = makeStyles((theme) => ({
    root: {
      width: '100%',
      background:theme.palette.primary,
    },
    heading: {
      fontSize: theme.typography.pxToRem(17),
      fontWeight: theme.typography.fontWeightBold,      
    },
  }));

function LandingPageFooter(){
    const classes = useStyles();
    const classes1 = useStyles1();
    const matches = useMediaQuery('(min-width:600px)');
    return(
        <div>
        <Grid container className={classes.root} spacing={1}>
                <Grid item xs={12} md={6}>
                    <Grid item  spacing={1}>  
                    {matches?
                        <div>
                           <Typography gutterBottom variant="h5" component="h2">
                                    Become a restaurant partner                               
                            </Typography>
                            <p className={classes.font}>If you're a restaurant owner, 
                                    joining Seamless can help you reach more hungry New Yorkers 
                                    and get more orders.</p>
                                {/* <Link>Learn More</Link>  */}
                        </div>
                            : <div className={classes1.root} >
                                 <Accordion style={{background:"#2b8282",color:"white"}}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        >
                                        <Typography className={classes1.heading}>Become a restaurant partner </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                                If you're a restaurant owner, 
                                            joining Seamless can help you reach more hungry New Yorkers 
                                            and get more orders.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div> }
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Grid item className={classes.headings}> 
                    {matches?
                        <div>
                            <Typography gutterBottom variant="h5" component="h2">
                            Sign up your office                                
                           </Typography>  
                           <p className={classes.font}>Workplaces of all shapes and sizes choose Seamless for reliable food ordering and delivery.
                                     We make it easy to feed your office through hundreds of local restaurants and caterers,
                                     convenient ordering options for groups and individuals, and one invoice for all orders placed.</p>
                                {/* <Link>Learn More</Link>  */} 
                        </div>
                        :
                        <div className={classes1.root} >
                                 <Accordion style={{background:"#2b8282",color:"white"}}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        >
                                        <Typography className={classes1.heading}>Sign up your office  </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                                Workplaces of all shapes and sizes choose Seamless for reliable food ordering and delivery.
                                            We make it easy to feed your office through hundreds of local restaurants and caterers,
                                            convenient ordering options for groups and individuals, and one invoice for all orders placed.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                        </div>}                           
                    </Grid>
                </Grid> 
                <Grid item xs={12} md={6}>
                    <Grid item className={classes.headings}> 
                    {matches?
                        <div>
                            <Typography gutterBottom variant="h5" component="h2">
                                what is Seamless?                              
                           </Typography>  
                           <p className={classes.font}>Seamless is simply the easiest way to order food for delivery or takeout. 
                           Whatever you're in the mood for, wherever you're in the mood for it, you've got it. No menus,
                            no phone calls, no repeating yourself. Seamless is a part of the Grubhub Inc. portfolio of brands.
                             For more information on Grubhub,
                            Inc., please visit about.grubhub.com.</p>
                                {/* <Link>Learn More</Link>  */} 
                        </div>
                        :
                        <div className={classes1.root} >
                                 <Accordion style={{background:"#2b8282",color:"white"}}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        >
                                        <Typography className={classes1.heading}>what is Seamless?   </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                        Seamless is simply the easiest way to order food for delivery or takeout. 
                                        Whatever you're in the mood for, wherever you're in the mood for it, you've got it. No menus,
                                            no phone calls, no repeating yourself. Seamless is a part of the Grubhub Inc. portfolio of brands.
                                            For more information on Grubhub,
                                            Inc., please visit about.grubhub.com.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                        </div>}                           
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Grid item className={classes.headings}> 
                    {matches?
                        <div>
                            <Typography gutterBottom variant="h5" component="h2">
                                Stay Connected                          
                           </Typography>  
                           <div className={classes.socialMedia}>
                                <div className={classes.socialMediaItem}><i class="fab fa-facebook-square"></i></div>
                                <div className={classes.socialMediaItem}><i class="fab fa-twitter-square"></i></div>
                                <div className={classes.socialMediaItem}><i class="fab fa-instagram-square"></i></div>
                                <div className={classes.socialMediaItem}><i class="fab fa-youtube"></i></div>

                            </div>
                                {/* <Link>Learn More</Link>  */} 
                        </div>
                        :
                        <div className={classes1.root} >
                                 <Accordion style={{background:"#2b8282",color:"white"}}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        >
                                        <Typography className={classes1.heading}>Stay Connected  </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                        <div className={classes.socialMedia}>
                                            <div className={classes.socialMediaItem}><i class="fab fa-facebook-square"></i></div>
                                            <div className={classes.socialMediaItem}><i class="fab fa-twitter-square"></i></div>
                                            <div className={classes.socialMediaItem}><i class="fab fa-instagram-square"></i></div>
                                            <div className={classes.socialMediaItem}><i class="fab fa-youtube"></i></div>
                                        </div>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                        </div>}                           
                    </Grid>
                </Grid>         
             </Grid>
             <Grid container className={classes.root} spacing={1}>
                <hr/>
                    <Grid item xs={12} md={6}>
                        <p>© 2020 Grubhub All rights reserved.</p>
                    </Grid>
                    <Grid container xs={12} md={6}>
                        <Grid item xs={6} md={3}>
                            <p>Terms of Use</p>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <p>Privacy policy</p>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <p>CA Privacy Notice</p>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <p>Do not sell my info</p>
                        </Grid>
                    </Grid>
            </Grid>
        </div>
    )
}

export default LandingPageFooter