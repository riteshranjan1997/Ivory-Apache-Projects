const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { registerValidation, loginValidation } = require("../validation");
require("dotenv").config();
const User = require("../models/User");

const { OAuth2Client } = require("google-auth-library");

const router = express.Router();
const client = new OAuth2Client(
  "1069087639484-chisqt1vcpiq2rqcbk2dvr8u3lr2k9hk.apps.googleusercontent.com"
);

router.post("/register", async (req, res, next) => {
  const { error } = registerValidation(req.body);
  if (error) {
    res.status(400).json({ error: true, message: error.details[0].message });
    return;
  }

  const emailExists = await User.findOne({ email: req.body.email });
  if (emailExists) {
    return res
      .status(400)
      .json({ error: true, message: "Email already exists in database" });
  }
  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(
      req.body.password,
      await bcrypt.genSalt(10)
    );
  } catch (err) {
    res.status(500).json({
      error: true,
      message: "something went wrong, try again after some time",
    });
    return;
  }

  const user1 = new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: hashedPassword,
  });

  try {
    const savedUser = await user1.save();
    const first_name = savedUser.first_name;
    const email = savedUser.email;
    const user = { id: user1["_id"], first_name: first_name, email: email };
    const accessToken = jwt.sign(user, process.env.SECRET_KEY_TO_ACCESS);
    res.status(200).json({
      error: false,
      data: { userData: savedUser, accessToken: accessToken },
      message: "Register Successful",
    });
  } catch (err) {
    console.log("errpr in register", err);
    res.status(400).json({ error: true, message: err });
  }
});

router.post("/login", async (req, res, next) => {
  console.log(" in login ", req.body);
  const { error } = loginValidation(req.body);
  if (error) {
    console.log("error in login is", error);
    return res
      .status(400)
      .json({ error: true, message: error.details[0].message });
  }
  const userData = await User.findOne({ email: req.body.email });
  if (!userData) {
    return res.status(400).json({ error: true, message: "Email not exists" });
  }
  let validPass;
  try {
    validPass = await bcrypt.compare(req.body.password, userData.password);
  } catch (err) {
    res.status(500).json({
      error: true,
      message: "Something went wrong, try again after some tinme",
    });
  }
  if (!validPass) {
    return res.status(400).json({ error: true, message: "incorrect password" });
  } else {
    // const email = req.body.email;
    const first_name = userData.first_name;
    const email = userData.email;
    const user = { id: userData["_id"], first_name: first_name, email: email };
    const accessToken = jwt.sign(user, process.env.SECRET_KEY_TO_ACCESS);
    res.status(200).json({
      error: false,
      data: { accessToken, userData },
      message: "Login Successful",
    });
  }
});

router.post("/googleLogin", (req, res) => {
  const { tokenId } = req.body;
  client
    .verifyIdToken({
      idToken: tokenId,
      audience:
        "1069087639484-chisqt1vcpiq2rqcbk2dvr8u3lr2k9hk.apps.googleusercontent.com",
    })
    .then((response) => {
      const { email_verified, name, email } = response.payload;
      console.log(response.payload);
      if (email_verified) {
        User.findOne({ email }).then(async (userData) => {
          if (userData) {
            const name = userData.name;
            const user = {
              id: userData["_id"],
              first_name: name,
              email: email,
            };
            const accessToken = jwt.sign(
              user,
              process.env.SECRET_KEY_TO_ACCESS
            );
            return res.status(200).json({
              error: false,
              data: { accessToken, userData },
              message: "Login Successful",
            });
          } else {
            try {
              hashedPassword = await bcrypt.hash(
                email,
                await bcrypt.genSalt(10)
              );
            } catch (err) {
              res.status(500).json({
                error: true,
                message: "something went wrong, try again after some time",
              });
              return;
            }
            console.log("in auth.js", name, email, hashedPassword);
            const user = new User({
              first_name: name,
              email: email,
              password: hashedPassword,
            });
            console.log("in google auth new user is ", user);
            try {
              const savedUser = await user.save();
              const first_name = user.first_name;
              const email = user.email;
              const user = {
                id: user["_id"],
                first_name: first_name,
                email: email,
              };
              const accessToken = jwt.sign(
                user,
                process.env.SECRET_KEY_TO_ACCESS
              );
              res.status(200).json({
                error: false,
                data: { userData: savedUser, accessToken },
                message: "Register Successful",
              });
            } catch (err) {
              res.status(400).json({ error: true, message: err });
            }
          }
        });
      }
    })
    .catch((error) => {
      return res
        .status(400)
        .json({ error: true, message: "Something went wrong" });
    });
});

module.exports = router;
