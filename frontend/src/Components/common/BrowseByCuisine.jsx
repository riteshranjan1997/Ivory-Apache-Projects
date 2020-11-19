import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import RestaurantCard from "../RestaurantsListingPage/RestaurantCard";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { gioLocationData } from "../../redux/GioLocation/action";
import Pagination from "@material-ui/lab/Pagination";
import { Redirect } from "react-router-dom";
function TabPanel(props) {
  const isAuth = useSelector((state) => state.auth.isAuth);

  if (!isAuth) {
    <Redirect to="/" />;
  }

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
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    background: "inherit",
  },
}));
export default function BrowseByCuisine() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  let data = useSelector((state) => state.app.restaurantsData);
  const userAddress = useSelector((state) => state.app.userAddress);
  const coordinates = useSelector((state) => state.location.coordinates);
  // console.log("in Browse CusFine",coordinates)
  const dispatch = useDispatch();
  const [cusine, setCusine] = React.useState("");
  const [cusineArray, setCusineArray] = React.useState([]);
  const filterRatings = useSelector((state) => state.filter.star);
  const [page, setPage] = React.useState(1);
  // const [totalPage,setTotalPage] = React.useState(1)
  const limit = 4;
  let offset = (page - 1) * limit;
  const sort = useSelector((state) => state.filter.sort);
  console.log("sort", sort, data);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    if (cusine) {
      return axios
        .post(
          `http://localhost:5001/api/restaurant/lets-eat?starRating=${
            filterRatings ? filterRatings : "0"
          }&cuisine=${cusine}`,
          {
            longitude: coordinates[0],
            lattitude: coordinates[1],
          }
        )
        .then((res) => setCusineArray(res.data.data.current))
        .catch((err) => console.log("Fetch Error", err));
    } else {
      return axios
        .post(
          `http://localhost:5001/api/restaurant/lets-eat?starRating=${
            filterRatings ? filterRatings : "0"
          } `,
          {
            longitude: coordinates[0],
            lattitude: coordinates[1],
          }
        )
        .then((res) => setCusineArray(res.data.data.current))
        .catch((err) => console.log("Fetch Error", err));
    }
    // .then(res=>console.log(res))
  }, [filterRatings, cusine]);
  // console.log("cusine",cusine)
  const handlePageChange = (event, value) => {
    setPage(value);
  };
  const handleClick = (cusine) => {
    setCusine(cusine);
  };
  useEffect(() => {
    dispatch(gioLocationData(userAddress));
  }, [userAddress]);
  const displayData = () => (
    <div>
      {cusineArray ? (
        cusineArray
          .sort(
            (a, b) =>
              sort == "high" &&
              Math.round(parseInt(b.votes)) - Math.round(parseInt(a.votes))
          )
          .sort(
            (a, b) =>
              sort == "low" &&
              Math.round(parseInt(a.votes)) - Math.round(parseInt(b.votes))
          )
          .sort((a, b) =>
            sort == "asc"
              ? b.restaurant_name > a.restaurant_name
                ? -1
                : b.restaurant_name < a.restaurant_name
              : 0
          )
          .sort((a, b) =>
            sort == "desc"
              ? a.restaurant_name > b.restaurant_name
                ? -1
                : a.restaurant_name < b.restaurant_name
              : 0
          )
          .filter((item, index) => index >= offset && index <= offset + limit)
          .map((item) => <RestaurantCard data={item} />)
      ) : (
        <div className="col">
          <p>No Data</p>
        </div>
      )}
    </div>
  );

  // console.log(cusineArray)
  return (
    <div className="container-fluid ">
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ fontSize: "20px" }}>
          <b>Most Popular near you</b>
        </div>
        <div style={{ color: "grey", marginLeft: "10px" }}>Restaurents</div>
        <div style={{ color: "#2B8282", marginLeft: "550px" }}>
          All cuisines
        </div>
      </div>
      <div className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="on"
          aria-label="scrollable auto tabs example"
          style={{ background: "white" }}
        >
          <Tab
            label={
              <div onClick={() => handleClick(null)}>
                <div
                  style={{
                    background: "#2B8282",
                    height: "100px",
                    width: "100px",
                    borderRadius: "50%",
                  }}
                >
                  <i
                    class="fas fa-utensils"
                    style={{
                      fontSize: "40px",
                      color: "white",
                      position: "relative",
                      top: "20px",
                    }}
                  ></i>
                </div>
                <div>all restaurents</div>
              </div>
            }
            {...a11yProps(0)}
            style={{ textTransform: "capitalize" }}
          />
          <Tab
            label={
              <div onClick={() => handleClick("deserts")}>
                <div>
                  <img
                    src="https://media-cdn.grubhub.com/d_search:browse-images:default.jpg/d_search:browse-images:default.jpg/dpr_auto,c_fill,w_124,h_124,f_auto,q_auto,g_auto/search/browse-images/lunch-specials-v4.jpg"
                    alt="JPEG"
                    style={{
                      height: "100px",
                      width: "100px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div>deserts</div>
              </div>
            }
            {...a11yProps(1)}
            style={{ textTransform: "capitalize" }}
          />
          <Tab
            label={
              <div onClick={() => handleClick("Cafe")}>
                <div>
                  <img
                    src="https://media-cdn.grubhub.com/d_search:browse-images:default.jpg/d_search:browse-images:default.jpg/dpr_auto,c_fill,w_124,h_124,f_auto,q_auto,g_auto/search/browse-images/cafe-v4.jpg"
                    alt="JPEG"
                    style={{
                      height: "100px",
                      width: "100px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div>Cafe</div>
              </div>
            }
            {...a11yProps(2)}
            style={{ textTransform: "capitalize" }}
          />
          <Tab
            label={
              <div onClick={() => handleClick("Italian")}>
                <div>
                  <img
                    src="https://media-cdn.grubhub.com/d_search:browse-images:default.jpg/d_search:browse-images:default.jpg/dpr_auto,c_fill,w_124,h_124,f_auto,q_auto,g_auto/search/browse-images/italian-v4.jpg"
                    alt="JPEG"
                    style={{
                      height: "100px",
                      width: "100px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div>Italian</div>
              </div>
            }
            {...a11yProps(3)}
            style={{ textTransform: "capitalize" }}
          />
          <Tab
            label={
              <div onClick={() => handleClick("Pizza")}>
                <div>
                  <img
                    src="pizza_cusine.jpg"
                    alt="JPEG"
                    style={{
                      height: "100px",
                      width: "100px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div>Pizza</div>
              </div>
            }
            {...a11yProps(4)}
            style={{ textTransform: "capitalize" }}
          />
          <Tab
            label={
              <div onClick={() => handleClick("South Indian")}>
                <div>
                  <img
                    src="salad_cusine.jpg"
                    alt="JPEG"
                    style={{
                      height: "100px",
                      width: "100px",
                      objectFit: "cover",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div>South Indian</div>
              </div>
            }
            {...a11yProps(5)}
            style={{ textTransform: "capitalize" }}
          />
          <Tab
            label={
              <div onClick={() => handleClick("Chinese")}>
                <div>
                  <img
                    src="https://media-cdn.grubhub.com/d_search:browse-images:default.jpg/d_search:browse-images:default.jpg/dpr_auto,c_fill,w_124,h_124,f_auto,q_auto,g_auto/search/browse-images/lunch-specials-v4.jpg"
                    alt="JPEG"
                    style={{
                      height: "100px",
                      width: "100px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div>Chinese</div>
              </div>
            }
            {...a11yProps(6)}
            style={{ textTransform: "capitalize" }}
          />
          <Tab
            label={
              <div onClick={() => handleClick("Fast Food")}>
                <div>
                  <img
                    src="https://media-cdn.grubhub.com/d_search:browse-images:default.jpg/d_search:browse-images:default.jpg/dpr_auto,c_fill,w_124,h_124,f_auto,q_auto,g_auto/search/browse-images/lunch-specials-v4.jpg"
                    alt="JPEG"
                    style={{
                      height: "100px",
                      width: "100px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div>Fast Food</div>
              </div>
            }
            {...a11yProps(7)}
            style={{ textTransform: "capitalize" }}
          />
          <Tab
            label={
              <div onClick={() => handleClick("Continental")}>
                <div>
                  <img
                    src="https://media-cdn.grubhub.com/d_search:browse-images:default.jpg/d_search:browse-images:default.jpg/dpr_auto,c_fill,w_124,h_124,f_auto,q_auto,g_auto/search/browse-images/lunch-specials-v4.jpg"
                    alt="JPEG"
                    style={{
                      height: "100px",
                      width: "100px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div>Continental</div>
              </div>
            }
            {...a11yProps(8)}
            style={{ textTransform: "capitalize" }}
          />
          <Tab
            label={
              <div>
                <div>
                  <img
                    src="https://media-cdn.grubhub.com/d_search:browse-images:default.jpg/d_search:browse-images:default.jpg/dpr_auto,c_fill,w_124,h_124,f_auto,q_auto,g_auto/search/browse-images/lunch-specials-v4.jpg"
                    alt="JPEG"
                    style={{
                      height: "100px",
                      width: "100px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div>North Indian</div>
              </div>
            }
            {...a11yProps(9)}
            style={{ textTransform: "capitalize" }}
          />
        </Tabs>
        <TabPanel value={value} index={0}>
          {filterRatings === 0 || filterRatings === null ? (
            data ? (
              data
                .sort(
                  (a, b) =>
                    sort == "high" &&
                    Math.round(parseInt(b.votes)) -
                      Math.round(parseInt(a.votes))
                )
                .sort(
                  (a, b) =>
                    sort == "low" &&
                    Math.round(parseInt(a.votes)) -
                      Math.round(parseInt(b.votes))
                )
                .sort((a, b) =>
                  sort == "asc"
                    ? b.restaurant_name > a.restaurant_name
                      ? -1
                      : b.restaurant_name < a.restaurant_name
                    : 0
                )
                .sort((a, b) =>
                  sort == "desc"
                    ? a.restaurant_name > b.restaurant_name
                      ? -1
                      : a.restaurant_name < b.restaurant_name
                    : 0
                )
                .filter(
                  (item, index) => index >= offset && index <= offset + limit
                )
                .map((elem) => <RestaurantCard data={elem} />)
            ) : (
              <div className="col">
                <p>No Data</p>
              </div>
            )
          ) : (
            displayData()
          )}
          <Pagination
            count={Math.ceil(
              filterRatings === 0 || filterRatings === null
                ? data.length / limit
                : cusineArray.length / limit
            )}
            page={page}
            onChange={handlePageChange}
            size="large"
            variant="outlined"
            color="primary"
            style={{
              display: "inline-block",
              position: "absolute",
              left: "32%",
              bottom: "-10%",
            }}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          {displayData()}
          <Pagination
            count={Math.ceil(cusineArray.length / limit)}
            page={page}
            onChange={handlePageChange}
            size="large"
            variant="outlined"
            color="primary"
            style={{
              display: "inline-block",
              position: "absolute",
              left: "32%",
              bottom: "-10%",
            }}
          />
        </TabPanel>
        <TabPanel value={value} index={2}>
          {displayData()}
          <Pagination
            count={Math.ceil(cusineArray.length / limit)}
            page={page}
            onChange={handlePageChange}
            size="large"
            variant="outlined"
            color="primary"
            style={{
              display: "inline-block",
              position: "absolute",
              left: "32%",
              bottom: "-10%",
            }}
          />
        </TabPanel>
        <TabPanel value={value} index={3}>
          {displayData()}
          <Pagination
            count={Math.ceil(cusineArray.length / limit)}
            page={page}
            onChange={handlePageChange}
            size="large"
            variant="outlined"
            color="primary"
            style={{
              display: "inline-block",
              position: "absolute",
              left: "32%",
              bottom: "-10%",
            }}
          />
        </TabPanel>
        <TabPanel value={value} index={4}>
          {displayData()}
          <Pagination
            count={Math.ceil(cusineArray.length / limit)}
            page={page}
            onChange={handlePageChange}
            size="large"
            variant="outlined"
            color="primary"
            style={{
              display: "inline-block",
              position: "absolute",
              left: "32%",
              bottom: "-10%",
            }}
          />
        </TabPanel>
        <TabPanel value={value} index={5}>
          {displayData()}
          <Pagination
            count={Math.ceil(cusineArray.length / limit)}
            page={page}
            onChange={handlePageChange}
            size="large"
            variant="outlined"
            color="primary"
            style={{
              display: "inline-block",
              position: "absolute",
              left: "32%",
              bottom: "-10%",
            }}
          />
        </TabPanel>
        <TabPanel value={value} index={6}>
          {displayData()}
          <Pagination
            count={Math.ceil(cusineArray.length / limit)}
            page={page}
            onChange={handlePageChange}
            size="large"
            variant="outlined"
            color="primary"
            style={{
              display: "inline-block",
              position: "absolute",
              left: "32%",
              bottom: "-10%",
            }}
          />
        </TabPanel>
        <TabPanel value={value} index={7}>
          {displayData()}
          <Pagination
            count={Math.ceil(cusineArray.length / limit)}
            page={page}
            onChange={handlePageChange}
            size="large"
            variant="outlined"
            color="primary"
            style={{
              display: "inline-block",
              position: "absolute",
              left: "32%",
              bottom: "-10%",
            }}
          />
        </TabPanel>
        <TabPanel value={value} index={8}>
          {displayData()}
          <Pagination
            count={Math.ceil(cusineArray.length / limit)}
            page={page}
            onChange={handlePageChange}
            size="large"
            variant="outlined"
            color="primary"
            style={{
              display: "inline-block",
              position: "absolute",
              left: "32%",
              bottom: "-10%",
            }}
          />
        </TabPanel>
        <TabPanel value={value} index={9}>
          {displayData()}
          <Pagination
            count={Math.ceil(cusineArray.length / limit)}
            page={page}
            onChange={handlePageChange}
            size="large"
            variant="outlined"
            color="primary"
            style={{
              display: "inline-block",
              position: "absolute",
              left: "32%",
              bottom: "-10%",
            }}
          />
        </TabPanel>
      </div>
    </div>
  );
}
