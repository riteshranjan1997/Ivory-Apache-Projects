import React from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}
const useStyles = makeStyles(theme=>({
  root: {
    flexGrow: 1,
    width: '100%',
    background: "inherit",
  },
}));
export default function BrowseByCuisine() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
<<<<<<< HEAD
=======

>>>>>>> aa54deb2eea1f6cd34a6183b0a9ece2a146f0b88
  return (
     <div className="container"> 
        <div className={classes.root}>
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="scrollable"
                scrollButtons="on"
                aria-label="scrollable auto tabs example"
                style={{background:"white"}}
              >
                <Tab label={
                  <div>
                    <div style={{background:"#2B8282",height:"100px",width:"100px",borderRadius:"50%"}}><i class="fas fa-utensils" style={{fontSize:"40px",color:"white",position:"relative",top:"20px"}}></i>
                    </div>
                    <div>all restaurents</div>
                  </div>
                }  {...a11yProps(0)} style={{textTransform:"capitalize"}} />
<<<<<<< HEAD
                <Tab label={<div>
                    <div><img src="https://media-cdn.grubhub.com/d_search:browse-images:default.jpg/d_search:browse-images:default.jpg/dpr_auto,c_fill,w_124,h_124,f_auto,q_auto,g_auto/search/browse-images/lunch-specials-v4.jpg" alt="JPEG" style={{height:"100px",width:"100px",borderRadius:"50%",objectFit:"cover"}}/></div>
                    <div>deserts</div>
                </div>}  {...a11yProps(1)} style={{textTransform:"capitalize"}} />
                <Tab  label={<div>
                    <div><img src="https://media-cdn.grubhub.com/d_search:browse-images:default.jpg/d_search:browse-images:default.jpg/dpr_auto,c_fill,w_124,h_124,f_auto,q_auto,g_auto/search/browse-images/lunch-specials-v4.jpg" alt="JPEG" style={{height:"100px",width:"100px",borderRadius:"50%",objectFit:"cover"}}/></div>
                    <div>Lunch Specials</div>
                </div>} {...a11yProps(2)} style={{textTransform:"capitalize"}}/>
                <Tab label={<div>
                    <div><img src="https://media-cdn.grubhub.com/d_search:browse-images:default.jpg/d_search:browse-images:default.jpg/dpr_auto,c_fill,w_124,h_124,f_auto,q_auto,g_auto/search/browse-images/lunch-specials-v4.jpg" alt="JPEG" style={{height:"100px",width:"100px",borderRadius:"50%",objectFit:"cover"}}/></div>
                    <div>Lunch Specials</div>
                </div>} {...a11yProps(3)} style={{textTransform:"capitalize"}} />
                <Tab label={<div>
                    <div><img src="https://media-cdn.grubhub.com/d_search:browse-images:default.jpg/d_search:browse-images:default.jpg/dpr_auto,c_fill,w_124,h_124,f_auto,q_auto,g_auto/search/browse-images/lunch-specials-v4.jpg" alt="JPEG" style={{height:"100px",width:"100px",borderRadius:"50%",objectFit:"cover"}}/></div>
                    <div>Lunch Specials</div>
                </div>} {...a11yProps(4)} style={{textTransform:"capitalize"}}/>
                <Tab label={<div>
                    <div><img src="https://media-cdn.grubhub.com/d_search:browse-images:default.jpg/d_search:browse-images:default.jpg/dpr_auto,c_fill,w_124,h_124,f_auto,q_auto,g_auto/search/browse-images/lunch-specials-v4.jpg" alt="JPEG" style={{height:"100px",width:"100px",borderRadius:"50%",objectFit:"cover"}}/></div>
                    <div>Lunch Specials</div>
                </div>} {...a11yProps(5)} style={{textTransform:"capitalize"}} />
                <Tab label={<div>
                  <div><img src="https://media-cdn.grubhub.com/d_search:browse-images:default.jpg/d_search:browse-images:default.jpg/dpr_auto,c_fill,w_124,h_124,f_auto,q_auto,g_auto/search/browse-images/lunch-specials-v4.jpg" alt="JPEG" style={{height:"100px",width:"100px",borderRadius:"50%",objectFit:"cover"}}/></div>
                  <div>Lunch Specials</div>
              </div>} {...a11yProps(6)} style={{textTransform:"capitalize"}}/>
              <Tab label={<div>
                    <div><img src="https://media-cdn.grubhub.com/d_search:browse-images:default.jpg/d_search:browse-images:default.jpg/dpr_auto,c_fill,w_124,h_124,f_auto,q_auto,g_auto/search/browse-images/lunch-specials-v4.jpg" alt="JPEG" style={{height:"100px",width:"100px",borderRadius:"50%",objectFit:"cover"}}/></div>
                    <div>Lunch Specials</div>
                </div>} {...a11yProps(7)} style={{textTransform:"capitalize"}}/>
                <Tab label={<div>
                    <div><img src="https://media-cdn.grubhub.com/d_search:browse-images:default.jpg/d_search:browse-images:default.jpg/dpr_auto,c_fill,w_124,h_124,f_auto,q_auto,g_auto/search/browse-images/lunch-specials-v4.jpg" alt="JPEG" style={{height:"100px",width:"100px",borderRadius:"50%",objectFit:"cover"}}/></div>
                    <div>Lunch Specials</div>
                </div>} {...a11yProps(8)} style={{textTransform:"capitalize"}} />
                <Tab label={<div>
=======
                <Tab label={<div>
                    <div><img src="https://media-cdn.grubhub.com/d_search:browse-images:default.jpg/d_search:browse-images:default.jpg/dpr_auto,c_fill,w_124,h_124,f_auto,q_auto,g_auto/search/browse-images/lunch-specials-v4.jpg" alt="JPEG" style={{height:"100px",width:"100px",borderRadius:"50%",objectFit:"cover"}}/></div>
                    <div>deserts</div>
                </div>}  {...a11yProps(1)} style={{textTransform:"capitalize"}} />
                <Tab  label={<div>
                    <div><img src="https://media-cdn.grubhub.com/d_search:browse-images:default.jpg/d_search:browse-images:default.jpg/dpr_auto,c_fill,w_124,h_124,f_auto,q_auto,g_auto/search/browse-images/lunch-specials-v4.jpg" alt="JPEG" style={{height:"100px",width:"100px",borderRadius:"50%",objectFit:"cover"}}/></div>
                    <div>Lunch Specials</div>
                </div>} {...a11yProps(2)} style={{textTransform:"capitalize"}}/>
                <Tab label={<div>
                    <div><img src="https://media-cdn.grubhub.com/d_search:browse-images:default.jpg/d_search:browse-images:default.jpg/dpr_auto,c_fill,w_124,h_124,f_auto,q_auto,g_auto/search/browse-images/lunch-specials-v4.jpg" alt="JPEG" style={{height:"100px",width:"100px",borderRadius:"50%",objectFit:"cover"}}/></div>
                    <div>Lunch Specials</div>
                </div>} {...a11yProps(3)} style={{textTransform:"capitalize"}} />
                <Tab label={<div>
                    <div><img src="https://media-cdn.grubhub.com/d_search:browse-images:default.jpg/d_search:browse-images:default.jpg/dpr_auto,c_fill,w_124,h_124,f_auto,q_auto,g_auto/search/browse-images/lunch-specials-v4.jpg" alt="JPEG" style={{height:"100px",width:"100px",borderRadius:"50%",objectFit:"cover"}}/></div>
                    <div>Lunch Specials</div>
                </div>} {...a11yProps(4)} style={{textTransform:"capitalize"}}/>
                <Tab label={<div>
                    <div><img src="https://media-cdn.grubhub.com/d_search:browse-images:default.jpg/d_search:browse-images:default.jpg/dpr_auto,c_fill,w_124,h_124,f_auto,q_auto,g_auto/search/browse-images/lunch-specials-v4.jpg" alt="JPEG" style={{height:"100px",width:"100px",borderRadius:"50%",objectFit:"cover"}}/></div>
                    <div>Lunch Specials</div>
                </div>} {...a11yProps(5)} style={{textTransform:"capitalize"}} />
                <Tab label={<div>
                  <div><img src="https://media-cdn.grubhub.com/d_search:browse-images:default.jpg/d_search:browse-images:default.jpg/dpr_auto,c_fill,w_124,h_124,f_auto,q_auto,g_auto/search/browse-images/lunch-specials-v4.jpg" alt="JPEG" style={{height:"100px",width:"100px",borderRadius:"50%",objectFit:"cover"}}/></div>
                  <div>Lunch Specials</div>
              </div>} {...a11yProps(6)} style={{textTransform:"capitalize"}}/>
              <Tab label={<div>
                    <div><img src="https://media-cdn.grubhub.com/d_search:browse-images:default.jpg/d_search:browse-images:default.jpg/dpr_auto,c_fill,w_124,h_124,f_auto,q_auto,g_auto/search/browse-images/lunch-specials-v4.jpg" alt="JPEG" style={{height:"100px",width:"100px",borderRadius:"50%",objectFit:"cover"}}/></div>
                    <div>Lunch Specials</div>
                </div>} {...a11yProps(7)} style={{textTransform:"capitalize"}}/>
                <Tab label={<div>
                    <div><img src="https://media-cdn.grubhub.com/d_search:browse-images:default.jpg/d_search:browse-images:default.jpg/dpr_auto,c_fill,w_124,h_124,f_auto,q_auto,g_auto/search/browse-images/lunch-specials-v4.jpg" alt="JPEG" style={{height:"100px",width:"100px",borderRadius:"50%",objectFit:"cover"}}/></div>
                    <div>Lunch Specials</div>
                </div>} {...a11yProps(8)} style={{textTransform:"capitalize"}} />
                <Tab label={<div>
>>>>>>> aa54deb2eea1f6cd34a6183b0a9ece2a146f0b88
                  <div><img src="https://media-cdn.grubhub.com/d_search:browse-images:default.jpg/d_search:browse-images:default.jpg/dpr_auto,c_fill,w_124,h_124,f_auto,q_auto,g_auto/search/browse-images/lunch-specials-v4.jpg" alt="JPEG" style={{height:"100px",width:"100px",borderRadius:"50%",objectFit:"cover"}}/></div>
                  <div>Lunch Specials</div>
              </div>} {...a11yProps(9)} style={{textTransform:"capitalize"}}/>
              </Tabs>
          </div>
     </div>
  );
}