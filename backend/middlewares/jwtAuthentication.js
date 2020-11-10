const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { registerValidation, loginValidation } = require("../validation");
require("dotenv").config();
const User = require("../models/User");

const router = express.Router();

function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) {
      return res
        .status(401)
        .json({ error: true, message: "Not Authorized to access" });
    }
    jwt.verify(token, process.env.SECRET_KEY_TO_ACCESS, (err, user) => {
      if (err) {
        return res.status(403).json({ error: true, message: "Forbidden" });
      }
      req.user = user;
      next();
    });
  }

  module.exports = authenticateToken;