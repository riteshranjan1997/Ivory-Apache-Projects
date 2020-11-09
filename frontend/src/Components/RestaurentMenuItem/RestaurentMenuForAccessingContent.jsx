import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import MenuPage from './MenuPage'

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-force-tabpanel-${index}`}
        aria-labelledby={`scrollable-force-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography><div style={{position:"relative",top:"-50px"}}>{children}</div><hr style={{position:"relative",top:"-50px"}}/></Typography>
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

const AntTabs = withStyles({
    root: {   
        position:"relative",
        top:"-100px",
      borderBottom: '1px solid #e8e8e8',
    },
    indicator: {
      backgroundColor: '#1890ff',
    },
  })(Tabs);

  const AntTab = withStyles((theme) => ({
    root: {
      textTransform: 'none',
      fontWeight: "bolder",
    //   marginRight: theme.spacing(1),
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:hover': {
        color: 'black',
        opacity: 1,
      },
      '&$selected': {
        color: 'black',
        fontWeight: theme.typography.fontWeightMedium,
      },
      '&:focus': {
        color: '#40a9ff',
      },
    },
    selected: {},
  }))((props) => <Tab disableRipple {...props} />);




  const useStyles = makeStyles((theme) => ({
    root: {
    //   flexGrow: 1,
  
    },
    padding: {
        
      padding: theme.spacing(0),
    },
    demo1: {
        
      backgroundColor: theme.palette.background.paper,
      marginLeft:"100px",
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
            <AntTabs value={value} onChange={handleChange} aria-label="ant example">
                <AntTab label="Menu" />
                <AntTab label="About" />
                <AntTab label="Review" />
            </AntTabs>
            <Typography className={classes.padding} />
            <TabPanel value={value} index={0}>
                <MenuPage/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Welcome To  About page
            </TabPanel>
            <TabPanel value={value} index={2}>
                Welcome To  Review page
            </TabPanel>
           
        </div>
    </div>
    )
}

export default RestaurentMenuForAccessingContent