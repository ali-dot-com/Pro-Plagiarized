"use strict";

var _require = require("express-validator"),
  validationResult = _require.validationResult;
var bcrypt = require("bcrypt");
var userDetails = require("../models/userdetails");
var signUpContr = function signUpContr(req, res) {
  //checking for basic errors

  /*const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ errors: errors.array(), message: "Invalid details entered" });
  }*/

  try {
    var saltRound = 10;
    bcrypt.hash(req.body.pass, saltRound).then(function (passHash) {
      var dob = new Date(req.body.dob);
      userDetails.create({
        name: req.body.name,
        email: req.body.email,
        password: passHash,
        dob: dob
      }).then(function (r) {
        return res.status(200).json({
          statusBit: 1,
          message: "Account Created Succesfully"
        });
      });
    }).catch(
    //error catch if pass hash not get genrated
    function (errors) {
      return res.status(400).json({
        errors: errors.array(),
        message: "Internal Server Error Occured"
      });
    });
  } catch (_unused) {
    return res.status(400).json({
      errors: errors.array(),
      message: "Internal Server Error Occured"
    });
  }
};
module.exports = signUpContr;