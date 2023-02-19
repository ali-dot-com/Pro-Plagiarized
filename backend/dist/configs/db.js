"use strict";

var mongoose = require('mongoose');
mongoose.set("strictQuery", false);
var connectToMongo = function connectToMongo() {
  mongoose.connect(process.env.MONGO_URI, function () {
    return console.log("connected to mongo successfully");
  });
};
module.exports = connectToMongo;