var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var CityModel = require('./citymodule');

/* GET home page. */
router.post('/', function(req, res, next) {

  mongoose.connect('mongodb://127.0.0.1:27017/cityDatabase');

  CityModel.find({ip:req.body.ip},function(err,data){
    if(!err){
      res.send(JSON.stringify(data));
      mongoose.connection.close();
    }else{
      res.end("Error in retriving the data");
      mongoose.connection.close();
    }
  })
});

module.exports = router;
