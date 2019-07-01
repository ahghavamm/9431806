var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var morgan = require('morgan');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var app = express();
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(cors());

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


app.get('/api/resturant/:id', (req, res) => {
  res.send(req.params.id);
});

app.get('*', (req, res) => {
  res.send('404');
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`server running on port ${port}`));
