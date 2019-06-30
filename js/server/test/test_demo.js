const mocha = require('mocha');
const assert = require('assert');
const addressChar = require("../models/address.js");


describe('demo test', function(){
    it('save to db', function(done){
        var char = new addressChar({
            city: 'خرم آباد'
        });
        char.save().then(function(){
            assert(char.isNew === false);
            done();
        });
    })
});