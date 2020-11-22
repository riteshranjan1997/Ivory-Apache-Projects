import React from "react";
import Styled from "styled-components";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import DialogContentText from "@material-ui/core/DialogContentText";
import Button from "@material-ui/core/Button";
import { addRequest } from "../../redux/Auth/action";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import ErrorBar from "../../Components/common/ErrorBar";

const useStyles = makeStyles({
  price: {
    background: "white",
    opacity: 0.9,
    color: "black",
    height: "30px",
    width: "45px",
    display: "flex",
    alignItems: "center",
    justifyContent: "left",
    borderRadius: "10px",
    fontWeight: "bolder",
    textAlign: "center",
    position: "relative",
    left: "150px",
    zIndex: 20,
  },
  description: {
    fontSize: "12px",
    color: "grey",
  },
  itemName: {
    fontSize: "14px",
    fontWeight: "bolder",
    paddingBottom: "20px",
  },
  closeMark: {
    color: "#2B8282",
    fontWeight: "bolder",
  },
  dialog: {
    display: "flex",
    flexDirection: "column",
  },
  quantity: {
    width: "120px",
    fontSize: "15px",
  },
});

const MenuWrapper = Styled.div`
    display:flex;
    margin-top:0px;
    margin-left:400px;
    .delivary{
        display:flex;
        flex-direction:column;
        justify-content:center;
    }
    .marginChange{
        margin-left:20px;
    }
`;

function MenuPage() {
  const isAuth = useSelector((state) => state.auth.isAuth);

  if (!isAuth) {
    <Redirect to="/" />;
  }
  const classes = useStyles();
  const ParamsId = useParams();
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [image, setImage] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [quantity, setQuantity] = React.useState(1);
  const [id, setId] = React.useState("");
  const [price, setPrice] = React.useState(0);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const cart = useSelector((state) => state.auth.user_data.cart);
  const access_token = useSelector((state) => state.auth.access_token);
  console.log("access token is ", access_token);
  console.log(cart);
  const restaurantsData = useSelector((state) => state.app.restaurantsData);
  // console.log("reataurentsData",restaurantsData)
  // console.log(typeof(ParamsId),typeof(restaurantsData[0].restaurant_id))
  const data = restaurantsData.find(
    (item) => item.restaurant_id == ParamsId.id
  );
  console.log("menu Page", data);
  const restaurentId = data.restaurant_id;
  const restaurentName = data.restaurant_name;
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState("");
  // console.log(quantity,typeof(quantity))

  const handleClickOpen = (name, image, description, price, id) => {
    setOpen(true);
    setName(name);
    setImage(image);
    setDescription(description);
    setPrice(price);
    setId(id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCart = (e) => {
    e.preventDefault();
    const payload = {
      // restaurent_id:restaurentId,
      restaurant_id: restaurentId,
      restaurantName: restaurentName,
      item_id: id,
      name: name,
      quantity: quantity,
      totalPrice: price * quantity,
    };
    dispatch(addRequest(payload, access_token));
    handleClose();
    setQuantity(1);
  };

  const handleRotate = (item) => {
    // console.log("in handle rotate",product,item.name)
    setProduct(item.name);
    // console.log("item is",item,item.name)
    // console.log("in handle rotate after setproduct",product,item.name,"loading status",loading)
    console.log("before start", product, item.name, "loading status", loading);
    // setLoading(!loading)
    console.log("after start", product, item.name, "loading status", loading);
    // for(var i=0;i<100000;i++){}
    // handleClickOpen(item.name,item.image,item.description,item.price,item.id);
    setTimeout(() => {
      if(!isAuth){
        alert("Login to continue")
        setProduct("");
        return
        // <Redirect to = "/login" />
      }
      handleClickOpen(
        item.name,
        item.image,
        item.description,
        item.price,
        item.id
      );
      setProduct("");
      
    }, 1000);
    // setLoading(!loading)

    console.log("at end", product, item.name, "loading status", loading);
    console.log(item.name, product, item.name === product);
  };

  return (
    <div>
      <hr
        style={{
          marginTop: "-27px",
          width: "120%",
          position: "relative",
          left: "-100px",
        }}
      />
      <MenuWrapper>
        <div className="delivary">
          <div style={{ fontSize: "12px" }}>Delivary,ASAP(20-30m)</div>
          <div style={{ fontSize: "10px", color: "green" }}>Free delivary</div>
        </div>
        <div className="marginChange" style={{ color: "#2B8282" }}>
          Change
        </div>
        <Divider />
      </MenuWrapper>

      <div className="container">
        <div className="row">
          {data &&
            data.menu_items &&
            data.menu_items.map((item) => (
              <div
                className="col-12 col-md-5 border m-2 rounded"
                onClick={() => handleRotate(item)}
              >
                <div className="row">
                  <div className="col-7" style={{ textAlign: "left" }}>
                    {/* {(item.name === product)  &&   <i class="fas fa-sync fa-spin" style={{size:25}}></i>} */}
                    <div
                      className={classes.itemName}
                      style={{ marginTop: "10px" }}
                    >
                      {item.name}
                    </div>
                    <div className={classes.description}>
                      {item.description}
                    </div>
                  </div>
                  {item.name !== product && (
                    <div className={`${classes.price}`}>₹{item.price}</div>
                  )}
                  {item.name === product && (
                    <div
                      className={`${classes.price}`}
                      style={{ background: "transparent", textAlign: "center" }}
                    >
                      {" "}
                      <i
                        class="fas fa-sync fa-spin"
                        style={{ fontSize: 25, marginLeft: 8 }}
                      ></i>
                    </div>
                  )}
                  <div
                    className="col-3"
                    style={{ position: "relative", right: "-16px" }}
                  >
                    <img
                      src={`../${item.image}`}
                      alt="menu"
                      height="120px"
                      className="rounded-right"
                      width="120px"
                      style={{ zIndex: 1, objectFit: "cover" }}
                    />
                  </div>
                </div>
              </div>
            ))}
          <Dialog
            fullScreen={fullScreen}
            open={open}
            fullWidth="fullwidth"
            maxWidth="sm"
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
          >
            <DialogTitle id="responsive-dialog-title">
              <h4 className={classes.closeMark} onClick={handleClose}>
                {<i class="fas fa-times"></i>}
              </h4>
            </DialogTitle>

            <DialogContent>
              {/* <div className="d-flex justify-content-center mb-3"><img src={image} alt="Menu Item" height="200px" width="450px" style={{objectFit:"cover",objectPosition:"0% 80%"}} /></div> */}
              <div className="d-flex justify-content-center mb-3">
                <img
                  src={`../${image}`}
                  alt="Menu Item"
                  height="230px"
                  width="550px"
                  style={{ objectFit: "cover", objectPosition: "0% 80%" }}
                />
              </div>
              <h4 className={classes.modelHeading}>{name}</h4>
              <h5>
                <b>₹{price}</b>
              </h5>
              <DialogContentText>
                <div className={classes.design}></div>
                <div className="mb-4">{description}</div>
                <div
                  className={`border  border-dark rounded-pill d-flex justify-content-between ${classes.quantity}`}
                >
                  <div
                    className="m-2"
                    onClick={() => setQuantity(Number(quantity) - 1)}
                    style={{ color: quantity === 0 ? "grey" : "black" }}
                  >
                    <i class="fas fa-minus"></i>
                  </div>
                  <div className="m-2">{quantity}</div>
                  <div
                    className="m-2"
                    onClick={() => setQuantity(Number(quantity) + 1)}
                    style={{ color: "black" }}
                  >
                    <i class="fas fa-plus"></i>
                  </div>
                </div>
                <hr />
                <Button
                  style={{
                    backgroundColor: "#2B8282",
                    color: "white",
                    width: "180px",
                    height: "40px",
                    borderRadius: "10px",
                  }}
                  onClick={handleCart}
                >
                  Add to Bag : ₹{price * quantity}
                </Button>
              </DialogContentText>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}

export default MenuPage;
