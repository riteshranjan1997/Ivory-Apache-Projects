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
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}


const useStyles = makeStyles(theme=>({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  icon:{
    background:'url("imgIcon/aadharCard backside.ico")',
    height:"30px",
    width:"30px",
    display:"block",
  }
}));

export default function BrowseByCuisine() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const seeAll=()=>{
    return(
      <div>
        <i class="fas fa-utensils"></i>
      </div>
    )
  }

  const cusine=()=>{
    <div>
      <i className={classes.icon}></i>
    </div>
  }

  return (
     <div className="container"> 
        <div className={classes.root}>
            
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="see all restaurent" icon={seeAll()} {...a11yProps(0)} />
                <Tab label={<div>
                    <div><img src="https://mukasash.com/wp-content/blogs.dir/242/files/ciclocafe/CicloCafe_1d.jpeg" alt="JPEG" style={{height:"100px",width:"100px",borderRadius:"50%"}}/></div>
                    <div>See All Restaurents</div>
                </div>}  {...a11yProps(1)} />
                <Tab label="Item Three" {...a11yProps(2)} />
                <Tab label="Item Four" {...a11yProps(3)} />
                <Tab label="Item Five" {...a11yProps(4)} />
                <Tab label="Item Six" {...a11yProps(5)} />
                <Tab label="Item Seven" {...a11yProps(6)} />
              </Tabs>
            
          </div>
     </div>
  );
}
