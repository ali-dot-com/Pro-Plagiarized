const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const userDetails = require("models/userdetails");
const userVerficationCode = require('models/userVerficationCode');
const mailTransporter = require('configs/mailTransporter')


const generateCode = () => {
  var min = 100000;
  var max = 999999;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


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
        debugger
        userDetails
          .create({
            name: req.body.name,
            country: req.body.country,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            password: passHash,
          
          })
          .then((r) => {

            const verCode = generateCode(); //saving verCode

            userVerficationCode.create({
              code: verCode,
              email: req.body.email,
            })
              .then(() => {
                //sending mail
                // console.log(res);
                console.log("verfication code saved");
                res.render(
                  "verificationCodeEmail",
                  { code: verCode },
                  function (err, html) {
                   
                    const mailOptions = {
                      from: "docadvisormail@gmail.com", // sender address
                      to: req.body.email, // list of receivers
                      subject: `Welcome to turnitinPro`, // Subject line
                      html: html,
                    };

                    mailTransporter.sendMail(mailOptions, function (err, info) {
                      if (err) {
                        console.log("nodemailer error" + err);
                        res.status(500).json({ error: err });
                      } 
                      else 
                      {console.log(info)

                      res.status(200).json({
                        nextroute: "/verification",
                        email: req.body.email,
                        
                      });
                      
                    }
                    });
                  }
                );
              })
              .catch((err) => {
                console.log("error at insetion of vercode" + err);
                res.status(500).json({ error: err });
              });



            //  return res
            //     .status(200)
            //     .json({ statusBit: 1, message: "Account Created Succesfully" });
            
          })
          .catch((errors) => {
            res.status(500).json({
              errors: errors,
              message: "Internal Server Error Occured",
            });
          });
      })
      .catch(
        //error catch if pass hash not get genrated
        (errors) => {
          res.status(500).json({
            errors: errors,
            message: "Internal Server Error Occured",
          });
        }
      );
  } catch {
    res.status(500).json({
      errors: errors,
      message: "Internal Server Error Occured",
    });
  }
};





module.exports = signUpContr;
