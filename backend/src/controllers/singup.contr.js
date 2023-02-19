const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const userDetails = require('models/userdetails')



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
    bcrypt
      .hash(req.body.pass, saltRound)
      .then((passHash) => {
        const dob = new Date(req.body.dob);
        userDetails.create({name: req.body.name, email: req.body.email, password:passHash, dob}).then((r)=>
        {
            return res.status(200).json({statusBit:1, message:"Account Created Succesfully"})
        })
      })
      .catch(
        //error catch if pass hash not get genrated
        (errors) => {
        return res
          .status(400)
          .json({
            errors: errors.array(),
            message: "Internal Server Error Occured",
          });
      });
  } catch {
    return res
      .status(400)
      .json({
        errors: errors.array(),
        message: "Internal Server Error Occured",
      });
  }
};

module.exports = signUpContr ;
