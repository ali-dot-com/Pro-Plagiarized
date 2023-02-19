"use strict";

var express = require("express");
var _require = require('dotenv'),
  config = _require.config;
var cors = require("cors");
var path = require('path');
var connectToMongo = require("./configs/db");
var app = express();
config();
require('dotenv').config({
  path: './.env'
});
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(cors()); // Use this after the variable declaration
app.use(express.static(path.join(__dirname, 'assets')));
app.use("/static", express.static("assets"));
connectToMongo();
//const publicpath = path.join(_driname, '/public');

//Availble routes
//app.use(express.json())

// To parse the request body

app.use('/api', require("./routes/routes"));
app.get('/test', function (_, res) {
  console.log("test build done");
  return res.status(200).json({
    message: "server is live now"
  });
});
var port = process.env.PORT || 8000;
app.listen(port, function () {
  console.log("node server is listening on port ".concat(port));
});