import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { updateFilters } from "../../redux/app/action";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Tooltip from "@material-ui/core/Tooltip";
import Rating from "@material-ui/lab/Rating";
import StarIcon from "@material-ui/icons/Star";
import { useEffect } from "react";
import { filterStarRatings } from "../../redux/Filtering/action";
import { Redirect } from "react-router-dom";

const StyledRating = withStyles({
  iconFilled: {
    color: "#2B8282",
  },
  iconHover: {
    color: "white",
    backgroundColor: "#2B8282",
  },
})(Rating);

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#F5F5F5",
  },
  buttons: {
    display: "flex",
  },
  roots: {
    width: "100%",
    background: theme.palette.primary,
  },
  heading: {
    fontSize: theme.typography.pxToRem(17),
    fontWeight: theme.typography.fontWeightBold,
  },
  ratings: {
    textAlign: "center",
    "&:hover": {
      background: "#2B8282",
      color: "white",
    },
  },
  rootSlider: {
    width: 200 + theme.spacing(3) * 2,
  },

  rootRating: {
    width: 200,
    display: "flex",
    alignItems: "center",
  },
}));

function ValueLabelComponent(props) {
  const isAuth = useSelector((state) => state.auth.isAuth);

  if (!isAuth) {
    <Redirect to="/" />;
  }

  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};

function Filter() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.app.userFilter);
  const [value, setValue] = React.useState(0);
  const [hover, setHover] = React.useState(-1);
  const [free_delivery, setFreeDelivery] = React.useState("");
  const [order_tracking_enabled, setOrderTrackingEnabled] = React.useState("");
  const [seamless_plus, setSeamlessPlus] = React.useState("");
  const [group_order, setGroupOrder] = React.useState("");

  useEffect(() => {
    dispatch(filterStarRatings(value));
  }, [value]);

  const handleClearFilter = () => {
    dispatch(updateFilters({}));
  };

  const handleFilterChange = (star) => {
    dispatch(
      updateFilters({
        starRating: star,
      })
    );
  };

  return (
    <div
      className={`col-12 border border-right  ${classes.root}`}
      style={{ fontFamily: "Poppins", marginLeft: "-20px", height: "1300px" }}
    >
      \
      <div className="row">
        <div className="col-12">
          <div
            className="d-flex align-items-center"
            style={{ marginTop: "60px" }}
          >
            <div className="mr-3">
              <h4 style={{ fontWeight: "700" }}>Filters</h4>
            </div>
            <div style={{ fontSize: "12px" }} onClick={handleClearFilter}>
              Clear All
            </div>
          </div>
          <div className={classes.buttons}>
            <div className="mr-3 mb-3">Restaurents</div>
            <div>Catering</div>
          </div>
          <div className={classes.buttons}>
            <Button
              style={{
                backgroundColor: "#2B8282",
                color: "white",
                width: "180px",
                height: "40px",
                borderRadius: "5px  0px 0px 5px",
              }}
            >
              Delivary
            </Button>
            <Button
              style={{
                border: "1px solid #2B8282",
                color: "#2B8282",
                width: "180px",
                height: "40px",
                borderRadius: "0px  5px 5px 0px",
              }}
            >
              PickUp
            </Button>
          </div>
          <div style={{ fontSize: "12px" }}>
            <br />
            Deliver my food <i class="fas fa-dot-circle "></i>
            <span style={{ color: "#2B8282", zIndex: 10 }}>Today,ASAP</span>
          </div>
          <div>
            <div className={`${classes.roots} mt-3`}>
              <Accordion style={{ background: "inherit" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>Feature </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div class="form-group form-check d-flex justify-content-left">
                      <input
                        type="checkbox"
                        value="seamless_plus"
                        class="form-check-input"
                        id="exampleCheck1"
                        onChange={(e) => {
                          setSeamlessPlus(e.target.checked);
                        }}
                      />
                      <label
                        class="form-check-label"
                        for="exampleCheck1"
                        style={{ color: "black" }}
                      >
                        <img
                          src="https://res.cloudinary.com/grubhub-assets/image/upload/v1577663084/subscriptions/s_flag_ihsory.svg"
                          alt="item"
                        />
                        Seamless+
                      </label>
                    </div>
                    <div class="form-group form-check d-flex justify-content-left">
                      <input
                        value="group_order"
                        type="checkbox"
                        class="form-check-input"
                        id="exampleCheck1"
                        onChange={(e) => {
                          setGroupOrder(e.target.checked);
                        }}
                      />
                      <label class="form-check-label" for="exampleCheck1">
                        Group order
                      </label>
                    </div>
                    <div class="form-group form-check d-flex justify-content-left">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="exampleCheck1"
                      />
                      <label class="form-check-label" for="exampleCheck1">
                        New
                      </label>
                    </div>
                    <div class="form-group form-check d-flex justify-content-left">
                      <input
                        value="order_tracking_enabled"
                        type="checkbox"
                        class="form-check-input"
                        id="exampleCheck1"
                        onChange={(e) => {
                          setOrderTrackingEnabled(e.target.checked);
                        }}
                      />
                      <label class="form-check-label" for="exampleCheck1">
                        Order Tracking Enabled
                      </label>
                    </div>
                    <div class="form-group form-check d-flex justify-content-left">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="exampleCheck1"
                      />
                      <label class="form-check-label" for="exampleCheck1">
                        Open Now
                      </label>
                    </div>
                    <div class="form-group form-check d-flex justify-content-left">
                      <input
                        value="free_delivery"
                        type="checkbox"
                        class="form-check-input"
                        id="exampleCheck1"
                        onChange={(e) => {
                          setFreeDelivery(e.target.checked);
                        }}
                      />
                      <label class="form-check-label" for="exampleCheck1">
                        Free delivary
                      </label>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
          <div>
            <div className={`${classes.roots} mt-3`}>
              <Accordion style={{ background: "inherit" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>Rating </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {/* <Typography>
                    <div className="d-flex" style={{ color: "#2B8282" }}>
                      <div
                        className={`border rounded-left p-2 ${classes.ratings}`}
                        style={{ width: "50px" }}
                        onClick={() => handleFilterChange(1)}
                      >
                        <i class="fas fa-star"></i>
                      </div>
                      <div
                        className={`border p-2 ${classes.ratings}`}
                        style={{ width: "50px" }}
                        onClick={() => handleFilterChange(2)}
                      >
                        <i class="fas fa-star"></i>
                      </div>
                      <div
                        className={`border p-2 ${classes.ratings}`}
                        style={{ width: "50px" }}
                        onClick={() => handleFilterChange(3)}
                      >
                        <i class="fas fa-star"></i>
                      </div>
                      <div
                        className={`border p-2 ${classes.ratings}`}
                        style={{ width: "50px" }}
                        onClick={() => handleFilterChange(4)}
                      >
                        <i class="fas fa-star"></i>
                      </div>
                      <div
                        className={`border rounded-right p-2 ${classes.ratings}`}
                        style={{ width: "50px" }}
                        onClick={() => handleFilterChange(5)}
                      >
                        <i class="fas fa-star"></i>
                      </div>
                    </div>
                  </Typography> */}
                  <div>
                    <StyledRating
                      name="hover-feedback"
                      value={value}
                      precision={1}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                      onChangeActive={(event, newHover) => {
                        setHover(newHover);
                      }}
                      icon={
                        <div
                          className={`border rounded-right p-2 ${classes.ratings}`}
                          style={{ width: "50px" }}
                        >
                          <StarIcon fontSize="inherit" />
                        </div>
                      }
                    />
                    {/* {value !== null && (
                        <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
                      )} */}
                    {/* <StyledRating
                                name="customized-color"
                                defaultValue={props.data.aggregate_rating}
                                // getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                                // precision={0.5}
                                icon={<StarIcon fontSize="inherit" />}
                              /> */}
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
          <div>
            <div className={`${classes.roots} mt-3`}>
              <Accordion style={{ background: "inherit" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>
                    Delivary Time{" "}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className={classes.rootSlider}>
                      <Slider
                        ValueLabelComponent={ValueLabelComponent}
                        aria-label="custom thumb label"
                        defaultValue={20}
                      />
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
