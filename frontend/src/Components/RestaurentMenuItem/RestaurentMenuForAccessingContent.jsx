import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import MenuPage from './MenuPage';
import AboutPage from './AboutPage'
import ReviewPage from './ReviewPage';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    marginTop:"-100px",
    marginLeft:"50px",
 
  },
}));

function RestaurentMenuForAccessingContent(){
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
   return(
    <div className={classes.root}>
        <div className={classes.demo1}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
            <Tab label={<div style={{textTransform:"capitalize"}}>Menu</div>} {...a11yProps(0)}/>
            <Tab label={<div style={{textTransform:"capitalize"}}>About</div>}  {...a11yProps(1)} />
            <Tab label={<div style={{textTransform:"capitalize"}}>Review</div>}  {...a11yProps(2)}/>
        </Tabs>
            <Typography className={classes.padding} />
            <TabPanel value={value} index={0}>
                <MenuPage/>
            </TabPanel>
            <TabPanel value={value} index={1}>               
                <AboutPage/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <ReviewPage/>
            </TabPanel>
           
        </div>
    </div>
    )
}

export default RestaurentMenuForAccessingContent