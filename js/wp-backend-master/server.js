var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var morgan = require('morgan');
var mongoose = require('mongoose');
var regex = require('regex');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var app = express();
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
  var queryCategory = req.query.category;

  console.log(req.query);
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("reyhoon");

    dbo.collection("resturant").aggregate(
      [
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

app.get('/api/resturant/category', (req, res) => {
  //   $_GET["area"]
  var query = req.query.area;
  var queryCategory = req.query.category;

  console.log(req.query);
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("reyhoon");
    var dbo1 = db.db("reyhoon");

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
        {
          "$unwind": "$resturantDeatails"
        },
        {
          $match:
          {
            "resturantDeatails.categories": queryCategory
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
  // var query = req.query.areas;

  // console.log(req.query);
  // MongoClient.connect(url, function(err, db) {
  //   if (err) throw err;
  //   var dbo = db.db("reyhoon");
  //   var dbo1 = db.db("reyhoon");

  //   dbo.collection("address").find({area: {'$regex': query}}).toArray(function(err, result) {
  //         if (err) throw err;
  //         res.json(result);
  //         console.log(result);
  //         db.close();;
  //   });
  // });
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

app.get('*', (req, res) => {
  res.send('404');
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`server running on port ${port}`));
