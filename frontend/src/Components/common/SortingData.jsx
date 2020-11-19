import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { sortDataBy } from "../../redux/Filtering/action";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";

const useStyles = makeStyles({
  orderSearchFilter: {
    display: "flex",
    flexDirection: "row-reverse",
  },
});

function SortingData() {
  const isAuth = useSelector((state) => state.auth.isAuth);

  if (!isAuth) {
    <Redirect to="/" />;
  }
  const classes = useStyles();
  const [sort, setSort] = React.useState("all");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sortDataBy(sort));
  }, [sort]);

  return (
    <div>
      <hr />
      <div className={classes.orderSearchFilter}>
        <div>
          <select
            class="form-control"
            id="exampleFormControlSelect1"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="all">Default</option>
            <option value="high">Ratings High to Low</option>
            <option value="low">Ratings Low to High</option>
            <option value="asc">Restaurent(A-Z)</option>
            <option value="desc">Restaurent(Z-A)</option>
          </select>
        </div>
        <div style={{ marginTop: "5px" }}>Sort:</div>
      </div>
      <hr />
    </div>
  );
}

export default SortingData;
