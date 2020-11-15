const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../models/User");
const Restaurant = require("../models/Restaurant")
const authenticateToken = require("../middlewares/jwtAuthentication");

const router = express.Router()


router.post("/addToCart", authenticateToken, async (req, res) => {
  const { email } = req.user;
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  try {
    const user = await User.findOne({ email });
    console.log("user is ",user)
    const { restaurant_id, item_id, quantity } = req.body;
    console.log("in adding to cart",restaurant_id,typeof  restaurant_id, item_id,quantity)
    let restaurant = await Restaurant.findOne({restaurant_id:restaurant_id})
    console.log("in adding to cart restaurant is",restaurant)
    let menu_item = restaurant.menu_items.find(ele => ele.id === item_id)
    const price = menu_item.price*quantity
    user.cart = [...user.cart, { restaurant_name:restaurant.restaurant_name,restaurant_id, item_id,item_name:menu_item.name, quantity,price}];
    const savedUser = await user.save();
    res.status(200).json({ error: false, userData: savedUser,accessToken:token });
  } catch (err) {
    console.log("error in adding to cart",err)
    res.status(400).json({ error: true, message: err });
  }
});

router.post("/deleteFromCart", authenticateToken, async (req, res) => {
  const { email } = req.user;
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  try {
    const user = await User.findOne({ email });
    const { restaurant_id, item_id, quantity } = req.body;
    let len = user.cart.length;
    for (let i = 0; i < len; i++) {
      let ele = user.cart[i];
      if (
        ele.restaurant_id + "" + ele.item_id + "" + ele.quantity ===
        restaurant_id + "" + item_id + "" + quantity
      ) {
        user.cart = [...user.cart.slice(0, i), ...user.cart.slice(i + 1, len)];
        break;
      }
    }
    const savedUser = await user.save();
    res.status(200).json({ error: false, userData: savedUser,accessToken:token });
  } catch (err) {
    res.status(400).json({ error: true, message: err });
  }
});
router.put("/editCart", authenticateToken, async (req, res) => {
  console.log("in edit cart",req.body)
  const { email } = req.user;
  const {
    prev_restaurant_id,
    prev_item_id,
    prev_quantity,
    new_restaurant_id,
    new_item_id,
    new_quantity,
  } = req.body;
  console.log(prev_restaurant_id)
  try {
    const user = await User.findOne({ email: email });
    user.cart = user.cart.filter(
      (ele) =>
        ele.restaurant_id + "" + ele.item_id + "" + ele.quantity !==
        prev_restaurant_id + prev_item_id + prev_quantity
    );
    const restaurant = await Restaurant.findOne({restaurant_id:new_restaurant_id})
    if(!restaurant){
      return res.status(400).json({error:true,message:"Invalid restaurant Id"})
    }
    let menu_item = restaurant.menu_items.find(ele => ele.id === new_item_id)
    const price = menu_item.price*new_quantity
    user.cart = [
      ...user.cart,
      {
        restaurant_id: new_restaurant_id,
        item_id: new_item_id,
        quantity: new_quantity,
        price:price
      },
    ];
    const savedUser = await user.save();
    res.status(200).json({ error: false, data: savedUser });
  } catch (err) {
    console.log("error in editing cart",err)
    res.status(400).json({ error: true, message: err ,errorMessage:"temp1"});
  }
});


router.get("/checkOut", authenticateToken, async (req, res) => {
  const user = req.user;
  try {
  } catch (err) {
    return res.status(400).json({ error: true, message: err });
  }
});

router.post("/saveOrders",authenticateToken,async (req,res)=>{
  console.log("in saveOrder")
  const {email} = req.user
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  let user
  try{
     user = await User.findOne({email:email})
     user.past_orders = [...user.past_orders,{order:[...user.cart],date:new Date().toLocaleDateString() ,time:new Date().toLocaleTimeString()}]
     console.log("in saveOrder",user.past_orders)
     user.cart = []
     const savedUser = await user.save()
     return res.status(200).json({error:false,userData:savedUser,accessToken:token})
  }
  catch(err){
    return res.status(500).json({error:true,message:err})
  }
   
})

module.exports = router;
