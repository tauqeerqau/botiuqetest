var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Database = function Constructor() {
    
    };
    
    
    Database.prototype.connectDatabase = function () {
        var url = 'mongodb://admin:ideofuzion123@ds159926.mlab.com:59926/botiquedb';
        //var url = 'mongodb://dbAdmin:ideofuzion123@ds135069.mlab.com:35069/botiquelive';
        mongoose.connect(url, function(err, db) {
            if (err) {
                console.log(err);
            } else {
                console.log("Successfully Connected");
            }
        });
        return url;
    };

    module.exports = Database;  