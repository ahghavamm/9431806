const express = require("express");
const address = require("../../models/address");
// const resturant = require("../../models/restaurant.js");
const mongoose = require("mongoose");

const router = express.Router();

//   api/address
// mongoose.model('users', {area: String});
// router.get('/', (req, res) => res.json({msg: 'it works'}));

router.get('/', (req, res) => {
    const query = req.query;
    // address.model.find({area: 'جردن'}).then(function(resualt){
    //     res.send(resualt);
    // });
    // mongoose.model('users').find(function(err, users){
    //     res.send(users);
    // });


    // address.model.find({}, (error, resturants) => {
    //     if (error) {
    //         res.send(error);
    //     }
    //     res.send(resturants);
    // });

    address.model.find()
    .then(addresses => {
        res.json({
            confirm: 'suc',
            name: addresses
        })
    })
    .catch(err => {
        res.json({
            confirm: 'fail',
            name: err.message
        })
    });
    
    // address.model.find({area:'جردن'})
    // .then(address => {
    //     if(!address){
    //         err.noaddress = 'there is not exist any resturants in this area';
    //         return res.status(404).json(err);
    //     }
    //     res.json(address);
    // })
    // .catch(err => res.status(404).json(err));
});

module.exports = router;
