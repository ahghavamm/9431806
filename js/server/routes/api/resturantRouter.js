const express = require("express");
const comment = require("../../models/restaurant.js");

const router = express.Router();

//  api/resturants
router.post('/', (req, res) => {
    
});

// foodRouter
//   .use((req, res, next) => {
//     console.log("you've called food api");
//     req.restaurant = {};
//     next();
//   })
//   .get("/", (req, res) => {
//     food.model.find({}, (error, foods) => {
//       if (error) {
//         res.send(error);
//       }
//       res.send(foods);
//     });
//   });
module.exports = router;
