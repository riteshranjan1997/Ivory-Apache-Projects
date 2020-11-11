const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const Restaurant = require("../models/Restaurant");

const router = express.Router();

router.post("/lets-eat",paginatedResultsWithLocation(Restaurant),async (req,res)=>{
  return res.status(200).json({error:false,data:res.pagination})
})

router.get("/restaurantDetails",async (req,res)=>{
  const {_id} = req.body
  try{
    const restaurantDetails = await Restaurant.find({_id:_id})
    res.json(200).json({error:false,data:restaurantDetails})
  }catch(err){
    res.status(400).json({error:true,message:err})
  }
})

function paginatedResultsWithLocation(model) {
  return async (req, res, next) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};  

    try {
      results.current = await model.find({ location:
        { $near :
          { $geometry :
             { type : "Point" ,
               coordinates : [ req.body.lattitude, req.body.longitude] } ,
            $maxDistance : 1000
     } } }).limit(limit).skip(startIndex).exec();
      res.pagination = results;
      if (endIndex < results.current.length) {
        results.next = {
          page: page + 1,
          limit: limit,
        };
      }
  
      if (startIndex > 0) {
        results.prev = {
          page: page - 1,
          limit: limit,
        };
      }
      next();
    } catch (e) {
      res.status(400).json({error:true, message: e.message });
      return
    }
  };
}

module.exports = router;
