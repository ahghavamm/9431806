const express = require('express');
const mongoose = require('mongoose');
const mysql = require('mysql');
// const bodyParser = require('body-parser');
const app = express();

mongoose.connect("mongodb://localhost/reyhoon", { useNewUrlParser: true });
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function() {
  console.log("DB connection alive");
});

// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '1234',
//   database: 'ProjectOfReyhoon'
// })
// connection.connect(function(error){
//   if(!!error){
//     console.log('error');
//   }else{
//     console.log('connected');
//   }
// });

// load all files
// const fs=require('fs');
// fs.readdirSync(__dirname + './models').forEach(function(fileName){
//   if(~fileName.indexOf('.js')) require(__dirname + './models/' + fileName)
// });

app.get('/', (req, res) => res.send('hello world asdf'));
const port = process.env.PORT || 5000;

//router
const foodRouter = require("./routes/api/foodRouter.js");
app.use("/api/foods", foodRouter);

const addressRouter = require("./routes/api/addressRouter.js");
app.use("/api/address", addressRouter);

// const resturantRouter = require("./routes/api/resturantRouter.js");
// app.use("/api/resturants", resturantRouter);

app.listen(port, () => console.log(`server running on port ${port}`));


