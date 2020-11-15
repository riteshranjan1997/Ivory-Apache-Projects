import React from "react";
import { Link } from "react-router-dom";
import Rating from "@material-ui/lab/Rating";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { makeStyles ,withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles((theme)=>({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& > * + *': {
      marginTop: theme.spacing(1),
    },
  },
}))

const StyledRating = withStyles({
  iconFilled: {
    color: 'orange',
  },
  iconHover:{
    color:"inherit",
  }
  
})(Rating); 

const popover = (
  <Popover id="popover-basic">
    <h6 style={{textAlign:"center" , padding:"10px"}} >Here's what people are saying:</h6>
    <Popover.Content>
      And here's some <strong>amazing</strong> content. It's very engaging.
      right?
    </Popover.Content>
  </Popover>
);
export default function RestaurantCard(props) {
  const classes = useStyles();
    const [value, setValue] = React.useState(2);
  return (
    <Link
      style={{ textDecoration: "none", color: "black" }}
      to={`/menu/${props.data.restaurant_id}`}
    >
      <div class="card" style={{ padding: "12px 5px",width:"100%" }}>
        <div className="row d-flex">
          <div className="mx-4">
            <img
              style={{ width: "92px", height: "92px" }}
              src={props.data.restaurant_images}
              alt=""
            />
          </div>
          <div style={{ width: "40%" }}>
            <h6><b>{props.data.restaurant_name}</b></h6>
            <img style={{padding:"5px"}}
              src="https://res.cloudinary.com/grubhub-assets/image/upload/v1577663084/subscriptions/s_flag_ihsory.svg"
              alt="s+"
            />
            <div className="d-flex">
            {props.data.cuisines.map(item=>(
               <span className="text-muted" style={{fontSize:"12px",marginLeft:"5px"}}>{item}</span>
            ))}</div>
     
            
          </div>

          <div style={{ marginRight: "12%" }}>         

            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={popover}
            >
              <div>
                <div className="mr-5">
                   
                      <div className={classes.root}>
                        {/* <Box component="fieldset"  borderColor="transparent"> */}
                              <StyledRating
                                name="unique-rating"
                                defaultValue={props.data.aggregate_rating}
                                // getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                                precision={1}
                                icon={<StarIcon fontSize="inherit" />}
                              />
                            {/* </Box> */}
                        </div>
                    </div>
                    <spam className="text-muted ml-2" style={{fontSize:"12px"}}>{props.data.votes} ratings</spam>
                <br />               
              </div>
            </OverlayTrigger>
          </div>
          <div>
            <h6><b>20-30</b></h6>
            <span className ="text-muted" style={{fontSize:"10px"}}>mins</span>
          </div>
        </div>
      </div>
    </Link>
  );
}