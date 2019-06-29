const express = require("express");
const food = require("../../models/food.js");

const foodRouter = express.Router();

//  api/foods/test
foodRouter.get('/test', (req, res) => res.json({msg: 'post'}));
// foodRouter.get('test', (req, res) => {

// });

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
module.exports = foodRouter;
