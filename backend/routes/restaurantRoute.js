const Restaurants = require("../models/Restaurant")
const express = require("express")
const router = express.Router();

router.get("/lets-eat",paginatedResults(Restaurants),async (req,res)=>{
    console.log("in lets-eat",req.body)
    // const data = getNearByRestaurants(req.body.lattitude,req.body.longitude)
    // try{
    //   var restaurants = await Restaurants.find( { location:
    //     { $near :
    //       { $geometry :
    //          { type : "Point" ,
    //            coordinates : [ req.body.lattitude, req.body.longitude] } ,
    //         $maxDistance : 1000
    //  } } } )
    // var restaurants = await Restaurants.find()
    // }catch(error){
    //   res.status({error:true,message:error})
    //   return
    // }
    // console.log("in lets-eat else",data.data)
    res.status(200).json({error:false,data:res.pagination,message:"test3"})
    return
    // console.log(" in get near by restaurants")
    // console.log("in getnearby restaurants",restaurants)
    //  return {error:false,data:restaurants}
    // console.log("Restaurants data is",data,data.data)
    // if(data.error){
    //   res.status({error:true,message:data.message})
    // }
    // else{
    //   if(data.data){
    //     console.log(data)
    //   }
    //   console.log("in lets-eat else",data.data)
    //   res.status(200).json({error:false,data:data.data,message:"test3"})
    // }
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
  }catch(error){
    return {error:true,message:error}
  }
  console.log(" in get near by restaurants")
  console.log("in getnearby restaurants",restaurants)
   return {error:false,data:restaurants}
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
