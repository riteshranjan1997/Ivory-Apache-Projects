const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { registerValidation, loginValidation } = require("../validation");
require("dotenv").config();
const User = require("../models/User");
const authenticateToken = require("../middlewares/jwtAuthentication");
const { emailValidation, passwordValidation } = require("../validation");
const { serialize } = require("v8");

const router = express.Router();

router.put("/profile", authenticateToken, async (req, res) => {
  const { _id, first_name, email } = req.user;
  let userData;
  if (data.first_name) {
    if (data.password != "") {
      userData = await User.findOne({ email: email });
      let validPass;
      try {
        validPass = await bcrypt.compare(req.body.password, userData.password);
      } catch (err) {
        return res.status(500).json({
          error: true,
          message: "Something went wrong, try again after some time",
        });
      }
    }
    if (validPass) {
      userData.first_name = req.body.first_name;
      userData.last_name = req.body.last_name;
      try {
        const savedUser = await userData.save();
        const { _id, first_name, email } = savedUser;
        const user = { id: _id, first_name: first_name, email: email };
        const accessToken = jwt.sign(user, process.env.SECRET_KEY_TO_ACCESS);
        return res
          .status(200)
          .json({ error: false, data: savedUser, accessToken: accessToken });
      } catch (err) {
        return res
          .status(400)
          .json({
            error: true,
            message:
              "We were unable to update the account. Please refresh the page and try again.",
          });
      }
    } else {
      return res
        .status(400)
        .json({
          error: true,
          message:
            "We were unable to update the account. Please refresh the page and try again.",
        });
    }
  } else if (req.body.new_email) {
    if (req.body.new_email !== req.body.confirm_email) {
      return res
        .status(400)
        .json({
          error: true,
          message:
            "We were unable to update the account. Please refresh the page and try again.",
        });
    }
    const { error } = emailValidation(req.body.new_email);

    if (error) {
      res.status(400).json({ error: true, message: error.details[0].message });
      return;
    }
    //   const {current_email} = req.user
    const userData = await User.findOne({ email: req.body.new_email });
    if (userData) {
      return res
        .status(400)
        .json({ error: true, message: "Email already exists in database" });
    }
    let validPass;
    try {
      validPass = await bcrypt.compare(req.body.password, userData.password);
    } catch (err) {
      return res.status(500).json({
        error: true,
        message: "Something went wrong, try again after some time",
      });
    }
    if (validPass) {
      userData.email = req.body.new_email;
      try {
        const savedUser = await userData.save();
        const { _id, first_name, email } = savedUser;
        const user = { id: _id, first_name: first_name, email: email };
        const accessToken = jwt.sign(user, process.env.SECRET_KEY_TO_ACCESS);
        return res
          .status(200)
          .json({ error: false, data: savedUser, accessToken: accessToken });
      } catch (err) {
        return res
          .status(400)
          .json({
            error: true,
            message:
              "We were unable to update the account. Please refresh the page and try again.",
          });
      }
    } else {
      return res
        .status(400)
        .json({
          error: true,
          message:
            "We were unable to update the account. Please refresh the page and try again.",
        });
    }
  } else if (req.body.new_password) {
    if (req.body.new_password !== req.body.confirm_password) {
      return res
        .status(400)
        .json({
          error: true,
          message:
            "We were unable to update the account. Please refresh the page and try again.",
        });
    }
    const { error } = passwordValidation(req.body.new_password);

    if (error) {
      res.status(400).json({ error: true, message: error.details[0].message });
      return;
    }
    const { current_email } = req.user;
    const userData = await User.findOne({ email: current_email });
    let validPass;
    try {
      validPass = await bcrypt.compare(req.body.password, userData.password);
    } catch (err) {
      return res.status(500).json({
        error: true,
        message: "Something went wrong, try again after some time",
      });
    }
    if (validPass) {
      let hashedPassword;
      try {
        hashedPassword = await bcrypt.hash(
          req.body.new_password,
          await bcrypt.genSalt(10)
        );
      } catch (err) {
        res.status(500).json({
          error: true,
          message: "something went wrong, try again after some time",
        });
        return;
      }
      userData.password = hashedPassword;
      try {
        const savedUser = await userData.save();
        const { _id, first_name, email } = savedUser;
        const user = { id: _id, first_name: first_name, email: email };
        const accessToken = jwt.sign(user, process.env.SECRET_KEY_TO_ACCESS);
        return res
          .status(200)
          .json({ error: false, data: savedUser, accessToken: accessToken });
      } catch (err) {
        return res
          .status(400)
          .json({
            error: true,
            message:
              "We were unable to update the account. Please refresh the page and try again.",
          });
      }
    } else {
      return res
        .status(400)
        .json({
          error: true,
          message:
            "We were unable to update the account. Please refresh the page and try again.",
        });
    }
  }
});
router.post("/addAddress",authenticateToken,async (req,res)=>{
    const {id,email,first_name} = req.user
    try{
        const user = await User.findOne({email:email});
        const {street,city,state,zip,phone,name} = req.body
        const prevAddress = user.address.filter(ele=>ele.street+ele.city+ele.state+ele.zip+ele.phone+ele.name === street+city+state+zip+phone+name)
        if(prevAddress){
            return res.status(400).json({error:true,message:"Already the given address is present"})
        }
        else{
            user.address = [...user.address,{street,city,state,phone,zip,name}]
            const saveduser = user.save()
            return res.status(200).json({error:false,data:savedUser})
        }
    }catch(err){
        return res.status(400).json({error:true,message:err})
    }
})
router.put("/editAddress",authenticateToken,async (req,res)=>{
    const {id,email,first_name} = req.user
    try{
        const user = await User.findOne({email:email});
        const {street,city,state,zip,phone,name} = req.body.prevAddress
        const prevAddress = user.address.filter(ele=>ele.street+ele.city+ele.state+ele.zip+ele.phone+ele.name === street+city+state+zip+phone+name)
        if(!prevAddress){
            return res.status(400).json({error:true,message:"Some thing went wrong try again later..."})
        }
        else{
            prevAddress[0].street = req.body.newAddress.street
            prevAddress[0].city = req.body.newAddress.city
            prevAddress[0].state = req.body.newAddress.state
            prevAddress[0].zip = req.body.newAddress.zip
            prevAddress[0].phone = req.body.newAddress.phone
            prevAddress[0].name = req.body.newAddress.name
            const savedUser = await user.save()
            res.status(200).status.json({error:false,data:savedUser})
        }
    }catch(err){
        return res.status(400).json({error:true,message:err})
    }
})
router.delete("/deleteAddress",async (req,res)=>{
    const {id,email,first_name} = req.user
    try{
        const user = await User.findOne({email:email});
        const {street,city,state,zip,phone,name} = req.body.prevAddress
        const prevAddress = user.address.filter(ele=>ele.street+ele.city+ele.state+ele.zip+ele.phone+ele.name !== street+city+state+zip+phone+name)
        if(!prevAddress){
            return res.status(400).json({error:true,message:"Some thing went wrong try again later..."})
        }
        else{
            user.address = prevAddress
            const savedUser = await user.save()
            res.status(200).status.json({error:false,data:savedUser})
        }
    }catch(err){
        return res.status(400).json({error:true,message:err})
    }
})

router.post("/addCard",authenticateToken,async (req,res)=>{
    const {id,email,first_name} = req.user
    try{
        const user = await User.findOne({email:email});
        const {card_number,expires_on,security_code,postal_code} = req.body
        const prevCards = user.credit_cards.filter(ele=>ele.card_number+ele.expires_on+ele.security_code+ele.postal_code === card_number+expires_on+security_code+postal_code)
        if(prevCards){
            return res.status(400).json({error:true,message:"Already the given card is present"})
        }
        else{
            user.credit_cards = [...user.credit_cards,{card_number,expires_on,security_code,postal_code}]
            const saveduser = user.save()
            return res.status(200).json({error:false,data:savedUser})
        }
    }catch(err){
        return res.status(400).json({error:true,message:err})
    }
})

router.get("/saveRestaurant",authenticateToken,async(req,res)=>{
    const {id,email,first_name} = req.user
    const {_id} = req.body["_id"]
    try{
        const user = await User.findOne({email:email})
        user.saved_restaurants = [...user.saved_restaurants,_id]
        const savedUser = await user.save()
        res.status(200).json({error:false,data:savedUser})
    }
    catch(err){
        res.status(400).json({error:true,message:err})
    }

})


module.exports = router;
