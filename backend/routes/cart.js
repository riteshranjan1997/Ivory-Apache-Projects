const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { registerValidation, loginValidation } = require("../validation");
require("dotenv").config();
const User = require("../models/User");
const router = require("./auth");
const authenticateToken = require("../middlewares/jwtAuthentication");

router.post("/addToCart",authenticateToken,(req,res)=>{
    const {_id:search_id} = req.user;
    try {
      const user = await User.findById(search_id);
      const { restaurant_id,item_id,quantity } = req.body;
      user.cart = [...user.cart,{restaurant_id,item_id,quantity}]        
      const savedUser = await user.save();
      res.status(200).json({ error: false, data: savedUser });
    } catch (err) {
      res.status(400).json({ error: true, message: err });
    }
})
router.post("/deleteFromCart",authenticateToken,(req,res)=>{
    const {_id:search_id} = req.user;
    try {
      const user = await User.findById(search_id);
      const { restaurant_id,item_id,quantity } = req.body;
      user.cart = user.cart.filter(ele=>(ele.restaurant_id+""+ele.item_id+""+ele.quantity) === (restaurant_id+item_id+quantity) )      
      const savedUser = await user.save();
      res.status(200).json({ error: false, data: savedUser });
    } catch (err) {
      res.status(400).json({ error: true, message: err });
    }
})
router.post("/editCart",authenticateToken,(req,res)=>{
    const {_id:search_id} = req.user;
    const {prev_restaurant_id,prev_item_id,prev_quantity,new_restaurant_id,new_item_id,new_quantity} = req.body
    try {
      const user = await User.findById(search_id);
      const { restaurant_id,item_id,quantity } = req.body;
      user.cart = user.cart.filter(ele=>(ele.restaurant_id+""+ele.item_id+""+ele.quantity) !== (prev_restaurant_id+prev_item_id+prev_quantity) )  
      user.cart = [...user.cart,{restaurant_id:new_restaurant_id,item_id:new_item_id,quantity:new_quantity}]    
      const savedUser = await user.save();
      res.status(200).json({ error: false, data: savedUser });
    } catch (err) {
      res.status(400).json({ error: true, message: err });
    }
})

router.get("/checkOut",authenticateToken,async (req,res)=>{
    const user = req.user
    try{

    }catch(err){
        return res.status(400).json({error:true,message:err})
    }

})