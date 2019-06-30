// const express = require("express");
// const mongoose = require("mongoose");
// const app = express();
// const port = 3000;

// // app.get("*", function(req, res){
// //   res.end("hello world", "EXPRESS-STYLE");
// // });

// app.get("/api/resturants/:resturantid.json", function(req, res){
//   res.end("you asked for user: " + req.params.resturantid);
// });

// // app.get("/api", handle_function);

// app.get("*", function(req, res){
//   send_failure(res, 404, {code: "no_such_page", message:"no such page"});
// });

// function send_failure(res, server_code, err){
//   var code = (err.code) ? err.code : err.name;
//   res.writeHead(server_code, {"Content-Type": "application/json"});
//   res.end(make_resp_error(err));
// }

// function make_resp_error(err){
//   return JSON.stringify({code: (err.code) ? err.code : err.name, message: err.message});
// }

// app.listen(port);

// mongoose.connect("mongodb://localhost/reyhoon", { useNewUrlParser: true });
// const db = mongoose.connection;

// db.on("error", console.error.bind(console, "connection error:"));

// db.once("open", function() {
//   console.log("DB connection alive");
// });


// db.address.find({})
//    .projection({})
//    .sort({_id:-1})
//    .limit(100)

var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var app = express();

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("reyhoon");
//   dbo.collection("address").find({}, { projection: { _id: 0, addressLine: 1 } }).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });


app.get('/', (req, res) => res.send('hello world asdf'));
app.get('/address', (req, res) => {
  var query = req.query.page;
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("reyhoon");
    var dbo1 = db.db("reyhoon");

    dbo.collection("address").aggregate(
      [
        {$match:
          {
            area: 'جردن'
          }
        },
        {$lookup:
          {
            from: 'resturant',
            localField: '_id',
            foreignField: 'address',
            as: 'resturantDeatails'
          }
      }
      ]).toArray(function(err, resault){
        if (err) throw err;
        res.json(resault);
        db.close();
      });

    // dbo.collection("resturant").aggregate(
    //   [
    //     {$lookup:
    //       {
    //         from: 'address',
    //         localField: 'address',
    //         foreignField: '_id',
    //         as: 'addressDeatails'
    //       }
    //   }
    //   ]).toArray(function(err, resault){
    //     if (err) throw err;
    //     res.json(resault);
    //     db.close();
    //   });

    // dbo.collection("address").find({area: 'جردن'}, { projection: { _id: 0, addressLine: 1 } }).toArray(function(err, result) {

    //   dbo.collection("address").find({area: 'جردن'}, {projection: {addressLine: 0, area: 0,city: 0}} ).toArray(function(err, result) { 
    //     if (err) throw err;
    //     res.send(result);
    //     db.close();
    //     // dbo1.collection("resturant").find({id: result}).toArray(function(err1, finalResualt){
    //     //   if (err1) throw err1;
    //     //   res.json(finalResualt);
    //     //   db.close();
    //     // });
    // });
  });
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`server running on port ${port}`));
