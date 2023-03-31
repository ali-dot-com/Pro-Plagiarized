const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const userDetails = require("models/userdetails");

const signUpContr = (req, res) => {
  //checking for basic errors

  /*const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ errors: errors.array(), message: "Invalid details entered" });
  }*/

  try {
    const saltRound = 10;
    // password hash creation
    bcrypt
      .hash(req.body.password, saltRound)
      .then((passHash) => {
        // after pass hash is created store it in server
        const dob = new Date(req.body.dob);
        userDetails
          .create({
            name: req.body.name,
            country: req.body.country,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            password: passHash,
            dob,
          })
          .then((r) => {
            return res
              .status(200)
              .json({ statusBit: 1, message: "Account Created Succesfully" });
          })
          .catch((errors) => {
            return res.status(400).json({
              errors: errors.array(),
              message: "Internal Server Error Occured",
            });
          });
      })
      .catch(
        //error catch if pass hash not get genrated
        (errors) => {
          return res.status(400).json({
            errors: errors.array(),
            message: "Internal Server Error Occured",
          });
        }
      );
  } catch {
    return res.status(400).json({
      errors: errors.array(),
      message: "Internal Server Error Occured",
    });
  }
};

module.exports = signUpContr;
