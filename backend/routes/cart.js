const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { registerValidation, loginValidation } = require("../validation");
require("dotenv").config();
const User = require("../models/User");
const router = require("./auth");
const authenticateToken = require("../middlewares/jwtAuthentication");

router.post("/addToCart", authenticateToken, async (req, res) => {
  const { email } = req.user;
  try {
    const user = await User.findOne({ email });
    const { restaurant_id, item_id, quantity } = req.body;
    user.cart = [...user.cart, { restaurant_id, item_id, quantity }];
    const savedUser = await user.save();
    res.status(200).json({ error: false, data: savedUser });
  } catch (err) {
    res.status(400).json({ error: true, message: err });
  }
});
router.delete("/deleteFromCart", authenticateToken, async (req, res) => {
  const { email } = req.user;
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
    res.status(200).json({ error: false, data: savedUser });
  } catch (err) {
    res.status(400).json({ error: true, message: err });
  }
});
router.put("/editCart", authenticateToken, async (req, res) => {
  const { email } = req.user;
  const {
    prev_restaurant_id,
    prev_item_id,
    prev_quantity,
    new_restaurant_id,
    new_item_id,
    new_quantity,
  } = req.body;
  try {
    const user = await User.findOne({ email: email });
    user.cart = user.cart.filter(
      (ele) =>
        ele.restaurant_id + "" + ele.item_id + "" + ele.quantity !==
        prev_restaurant_id + prev_item_id + prev_quantity
    );
    user.cart = [
      ...user.cart,
      {
        restaurant_id: new_restaurant_id,
        item_id: new_item_id,
        quantity: new_quantity,
      },
    ];
    const savedUser = await user.save();
    res.status(200).json({ error: false, data: savedUser });
  } catch (err) {
    res.status(400).json({ error: true, message: err });
  }
});

router.get("/checkOut", authenticateToken, async (req, res) => {
  const user = req.user;
  try {
  } catch (err) {
    return res.status(400).json({ error: true, message: err });
  }
});

module.exports = router;
