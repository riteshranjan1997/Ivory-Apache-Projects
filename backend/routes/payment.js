const express = require('express');
const cors = require('cors')
const { v4: uuidv4 } = require('uuid')
const Razorpay = require('razorpay');
const dotenv = require('dotenv');
const authenticateToken = require("../middlewares/jwtAuthentication");
const User = require("../models/User")
const request  = require('request');
const { compareSync } = require('bcryptjs');

const router = express.Router();

dotenv.config()

const instance = new Razorpay({
    key_id: process.env.RAZOR_PAY_KEY_ID,
    key_secret: process.env.RAZOR_PAY_KEY_SECRET
})

router.post('/order',authenticateToken, async (req, res) => {
    console.log("in order 1")
    const {email} = req.user
    const user = await User.findOne({email:email})
    console.log("in order 2")
    console.log("in order",req.body,req.body.amount)
    try {
        const options = {
            amount: req.body.amount*100,
            currency: 'INR',
            receipt: uuidv4(),
            payment_capture: 0
        }
        instance.orders.create(options, (err, order) => {
            if (err) {
                console.log("in order error is",err)
                return res.status(500).json({ message: "Something went wrong" })
            }
            return res.status(200).json(order)
        })
    } catch (err) {
        console.log(err)
        console.log("in order 3")
        return res.status(500).json({
            message: 'Something went wrong'
        })
    }
    console.log("in order 4")
})

router.post("/capture/:paymentId", (req, res) => {
    console.log("in payment",req.body)
    try {
        return request(
            {
                method: "POST",
                url: `https://${process.env.RAZOR_PAY_KEY_ID}:${process.env.RAZOR_PAY_KEY_SECRET}@api.razorpay.com/v1/payments/${req.params.paymentId}/capture`,
                form: {
                    amount: req.body.amount * 100,
                    currency: "INR",
                },
            },
            async function (err, res1, body) {
                if (err) {
                    console.log("capture",err)
                    return res.status(500).json({
                        message: "Something Went Wrong",
                    });
                }
                console.log("in capture",body)
                return res.json(body);
            });
    } catch (err) {
        console.log("in payment",err)
        return res.status(500).json({
            message: "Something Went Wrong",
        });
    }
});

module.exports = router