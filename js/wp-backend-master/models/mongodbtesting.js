var async = require('async');
var MongoClient = require("mongodb").MongoClient;

var url = 'mongodb://localhost:27017/photo_app';
var db;

// var b = new mongodb.Binary(binary_data);
// var l = new mongodb.Long(number_string);

var pix = [
{
    city: 'تهران',
    area: 'جردن',
    addressLine: 'جردن - بلوار صبا'
},
{
    city: 'تهران',
    area: 'جردن',
    addressLine: 'جردن - گلشهر'
},
{
    city: 'تهران',
    area: 'میرداماد',
    addressLine: 'میرداماد'
}
];



async.waterfall([
    function(cb){
        MongoClient.connect(url, 
            (err, dbase) => {
            if(err){
                console.log('bad');
                process.exit(-1);
            }
            console.log('i have a connection');
            db = dbase;
            // db.close();
            cb(null);
        });
    },
    function(cb){
        db.model.collection("albums", cb);
    },
    function(albums_obj, cb){
        console.log("i created");
        console.log(albums_obj);
        cb(null);
    }
], function(err, resualts){
    console.log("done!");
    console.log(err);
    console.log(resualts);
});