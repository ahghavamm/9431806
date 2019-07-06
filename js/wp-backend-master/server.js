var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var morgan = require('morgan');
var mongoose = require('mongoose');
var regex = require('regex');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var app = express();
// var Regex = require("regex");
var chalk = require('chalk')
app.use(morgan('tiny'));
app.use(bodyParser.json());
// app.use(regex());
// app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

var urlencodeParser = bodyParser.urlencoded({extended: true });
mongoose.Promise = global.Promise;

// var commentSchema = new mongoose.Schema({
//   _id: {
//     type:mongoose.Types.ObjectId
//   },
//   author: {
//     type:String
//   },
//   quality: {
//     type:Number
//   },
//   packaging: {
//     type:Number
//   },
//   deliveryTime: {
//     type:Number
//   },
//   text: {
//     type:String
//   },
//   created_at: {
//     type:new Date
//   }
// });
// var comment = mongoose.model('comment',commentSchema);

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

app.get('/api/resturant', (req, res) => {
  //   $_GET["area"]
  var query = req.query.area;
  var queryCategory = req.query.category;

  console.log(req.query);
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("reyhoon");

    dbo.collection("address").aggregate(
      [
        {$match:
          {
            area: query
          }
        },
        {$lookup:
          {
            from: 'resturant',
            localField: '_id',
            foreignField: 'address',
            as: 'resturantDeatails'
          }
        },
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

app.get('/api/resturants', (req, res) => {
  //   $_GET["area"]
  var query = req.query.area;
  // var queryCategory = req.query['category'];

  console.log(req.query);
  // console.log(queryCategory);
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("reyhoon");

    dbo.collection("resturant").aggregate(
      [
        // {
        //   $match:
        //   {
        //     categories: queryCategory
        //   }
        // },
        {$lookup:
          {
            from: 'address',
            localField: 'address',
            foreignField: '_id',
            as: 'resturantDeatails'
          }
        },
        {
          "$unwind": "$resturantDeatails"
        },
        {
          $match:
          {
            "resturantDeatails.area": query
          }
        }
      ]).toArray(function(err, resault){
        if (err) throw err;
        res.json(resault);
        db.close();
      });
  });
});

app.get('/api/category', (req, res) => {
  console.log(req.query);
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("reyhoon");

    dbo.collection("category").find().toArray(function(err, resault){
        if (err) throw err;
        res.json(resault);
        db.close();
      });
  });
});

app.get('/api/resturants/category', (req, res) => {
  //   $_GET["area"]
  var query = req.query.area;
  var queryCategory = req.query['category'];
  var qqq = [];
  // var queryCategory = req.query.category;
  for(let t=0; t<queryCategory.length-1; t++){
    qqq.push(queryCategory[t].replace(/,/g, ''));
  }
  // queryCategory.forEach(element => {
  //   qqq.push(element.replace( /,/g, ''));
  // });
  console.log(qqq);
  console.log(queryCategory);

  // console.log(req.query);
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("reyhoon");

    dbo.collection("resturant").aggregate(
      [
        {
          $match:
          {
            categories: queryCategory 
          }
        },
        {$lookup:
          {
            from: 'address',
            localField: 'address',
            foreignField: '_id',
            as: 'resturantDeatails'
          }
        },
        {
          "$unwind": "$resturantDeatails"
        },
        {
          $match:
          {
            "resturantDeatails.area": query
          }
        }
      ]).toArray(function(err, resault){
        if (err) throw err;
        res.json(resault);
        db.close();
      });
  });
});

app.get('/api/hint', (req, res) => {
  var query = req.query.hint;

  console.log(req.query);
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("reyhoon");

    dbo.collection("address").find({area: {'$regex': query}}).toArray(function(err, result) {
          if (err) throw err;
          res.json(result);
          db.close();;
    });
  });
});

app.get('/api/hintt', (req, res) => {
  var query = req.query.hint;

  console.log(req.query);
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("reyhoon");

    // area: {'$regex': query}
    dbo.collection("location").aggregate(
      [
        {
          $match:
          {
            area: {'$regex': query}
          }
        },
        {$lookup:
          {
            from: 'address',
            localField: 'area',
            foreignField: 'area',
            as: 'resturantDeatails'
          }
        }
      ]).toArray(function(err, result) {
          if (err) throw err;
          res.json(result);
          db.close();;
    });
  });
});


app.get('/api/resturant/:id', (req, res) => {
  var query = req.params.id;
  console.log(req.params.id);
  const ObjectId = mongoose.Types.ObjectId;
  // MongoClient.connect(url, function(err, db) {
  //   if (err) throw err;
  //   var dbo = db.db("reyhoon");

  //   dbo.collection("address").aggregate(
  //     [
  //       {$match:
  //         {
  //           _id: ObjectId(query)
  //         }
  //       },
  //       {$lookup:
  //         {
  //           from: 'resturant',
  //           localField: '_id',
  //           foreignField: 'address',
  //           as: 'resturantDeatails'
  //         }
  //       },
  //       {
  //         $unwind: '$foods'
  //       },
  //       {$lookup:
  //         {
  //           from: 'food',
  //           localField: 'foods',
  //           foreignField: '_id',
  //           as: 'kindsOfFoods'
  //         }
  //       }
  //     ]).toArray(function(err, resault){
  //       if (err) throw err;
  //       res.json(resault);
  //       db.close();
  //     });
  //   });

    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("reyhoon");
  
      dbo.collection("resturant").aggregate(
        [
          {$match:
            {
              address: ObjectId(query)
            }
          },
          {$lookup:
            {
              from: 'food',
              localField: 'foods',
              foreignField: '_id',
              as: 'kindsOfFood'
            }
        }
        ]).toArray(function(err, resault){
          if (err) throw err;
          res.json(resault);
          db.close();
        });
      });
});


app.get('/api/resturants/:id', (req, res) => {
  var query = req.params.id;
  console.log(req.params.id);
  const ObjectId = mongoose.Types.ObjectId;

    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("reyhoon");
  
      dbo.collection("address").aggregate(
        [
          {$match:
            {
              _id: ObjectId(query)
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
      });
});

app.get('/api/resturants/:id/averageRate', (req, res) => {
  var query = req.params.id;
  console.log(req.params.id);
  const ObjectId = mongoose.Types.ObjectId;

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("reyhoon");

    dbo.collection("comment").aggregate(
      [
        {$lookup:
          {
            from: 'resturant',
            localField: '_id',
            foreignField: 'comments',
            as: 'resturantDetails'
          }
        },
        {
          "$unwind": "$resturantDetails"
        },
        {
          $match:
          {
            "resturantDetails.address": ObjectId(query)
          }
        }
      ]).toArray(function(err, resault){
        if (err) throw err;
        res.json(resault);
        db.close();
      });

  });
});


app.get('/api/resturant/:id/comments', (req, res) => {
  var query = req.params.id;
  console.log(req.params.id);
  const ObjectId = mongoose.Types.ObjectId;

    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("reyhoon");
  
      dbo.collection("resturant").aggregate(
        [
          {$match:
            {
              address: ObjectId(query)
            }
          },
          {$lookup:
            {
              from: 'comment',
              localField: 'comments',
              foreignField: '_id',
              as: 'commentProperties'
            }
        }
        ]).toArray(function(err, resault){
          if (err) throw err;
          res.json(resault);
          db.close();
        });
      });
  
});

app.get('/api/resturant/:id/comment', (req, res) => {
  var query = req.params.id;
  console.log(req.params.id);
  const ObjectId = mongoose.Types.ObjectId;

    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("reyhoon");
  
      dbo.collection("comment").aggregate(
        [
          {
            $match:
            {
              resturantId: ObjectId(query)
            }
          },
          {
            $lookup:
            {
              from: 'address',
              localField: 'resturantId',
              foreignField: '_id',
              as: 'commentProperties'
            }
          }
        ]).toArray(function(err, resault){
          if (err) throw err;
          res.json(resault);
          db.close();
        });
      });
  
});

app.post('/api/resturant/:id/comments', urlencodeParser, (req, res) => {
  const ObjectId = mongoose.Types.ObjectId;
  console.log(req.body);
  res.send({
    type: 'post',
    author: req.body.author,
    quality: req.body.quality,
    packaging: req.body.packaging,
    deliveryTime: req.body.deliveryTime,
    text: req.body.text,
    created_at: new Date,
    resturantId: req.params.id
  });
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("reyhoon");

    dbo.collection("comment").insert({
      author: req.body.author,
      quality: req.body.quality,
      packaging: req.body.packaging,
      deliveryTime: req.body.deliveryTime,
      text: req.body.text,
      created_at: new Date,
      resturantId: ObjectId(req.params.id)
    });
  });
});

app.post('/api/resturant', urlencodeParser, (req, res) => {
  const ObjectId = mongoose.Types.ObjectId;
  console.log(req.body);
  // console.log(req.body.categories);
  res.send({
    type: 'post',
    name: req.body.name,
    logo: req.body.logo,
    openingTime: req.body.openingTime,
    closingTime: req.body.closingTime,
    averageRate: req.body.averageRate,
    address: req.body.address,
    categories: req.body.categories,
    foods: req.body.foods,
  });
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("reyhoon");

    dbo.collection("resturant").insert({
      name: req.body.name,
      logo: req.body.logo,
      openingTime: req.body.openingTime,
      closingTime: req.body.closingTime,
      averageRate: req.body.averageRate,
      address: ObjectId(req.body.address),
      categories: [req.body.categories[0], req.body.categories[1], req.body.categories[2]],
      foods: [ObjectId(req.body.foods[0]), ObjectId(req.body.foods[1]), ObjectId(req.body.foods[2])],
    });
  });
});

app.get('*', (req, res) => {
  res.send('404');
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`server running on port ${port}`));
