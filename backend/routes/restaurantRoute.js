const Restaurants = require("../models/Restaurant")
const express = require("express")
const router = express.Router();

router.get("/lets-eat",async (req,res)=>{
    try{
    const data = await getNearByRestaurants(req.body.lattitude,req.body.longitude)
    }catch(err){
      return  res.status(400).json({error:true,message:err})
    }
    if(data.error){
      res.status(400).json({error:true,message:error})
    }
    else{
      res.status(200).json({error:false,data:data.data})
    }
})


 async function getNearByRestaurants (lattitude,longitude)  {
   try{
    var restaurants = await Restaurants.find( { location:
      { $near :
        { $geometry :
           { type : "Point" ,
             coordinates : [ lattitude, longitude] } ,
          $maxDistance : 1000
   } } } )
   return {error:false,data:restaurants}
  }catch(error){
    return {error:true,message:error}
  }   
}

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

function paginatedResults(model) {
  return async (req, res, next) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};

    if (endIndex < (await model.countDocuments().exec())) {
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

    try {
      results.current = await model.find().limit(limit).skip(startIndex).exec();
      res.pagination = results;
      next();
    } catch (e) {
      res.status(500).json({ message: e.message });
      return
    }
  };
}

module.exports = router;
