"use strict";

var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var multer = require("multer");
var signUpContr = require("../controllers/singup.contr");

/*const storage = multer.diskStorage({
    destination: function (req, file, cb) { cb(null, "./public/images") },
})*/

var upload = multer({
  dest: './assets/files'
});
router.use(bodyParser.urlencoded({
  extended: false
}));
router.use(bodyParser.json());
router.post("/signup", signUpContr);
module.exports = router;