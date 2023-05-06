const userDetails = require("models/userdetails");
const userVerficationCode = require("models/userVerficationCode");
const mailTransporter = require('configs/mailTransporter')

const generateCode = () => {
  var min = 100000;
  var max = 999999;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const resendVerifyCode = (req, res) => {
  let mail = req.body.email;
  userDetails
    .findOne({ email: mail })
    .then((data) => {
      // account made
      if (data) {
        let newCode = generateCode();
        userVerficationCode
          .findOne({ email: mail })
          .then((data) => {
            if (data){
                userVerficationCode
                .updateMany({email:mail}, {code: newCode})
                .then(() => {
                    
                    Sendmail(newCode, res, mail)
                  
                })
                .catch();  
            }
            // if no record
            else {
              userVerficationCode
                .create({
                  code: newCode,
                  email: mail,
                })
                .then(() => {
                    
                  Sendmail(newCode, res, mail)
                })
                .catch((e)=>{
                    console.log(e)
                    res.status(500).json({message:"Internal Server Error Occured"})

                });
            }
          })
          .catch((e)=>{
            console.log(e)

            res.status(500).json({ message:"Internal Server Error Occured"})

          });
      }
      //account not made
      else {
      }
    })
    .catch();
};

const Sendmail = (verCode, res, mail) => {
  //sending mail
  // console.log(res);
  //console.log("verfication code saved");
  res.render("verificationCodeEmail", { code: verCode }, function (err, html) {
    const mailOptions = {
      from: "docadvisormail@gmail.com", // sender address
      to: mail, // list of receivers
      subject: `Welcome to turnitinPro`, // Subject line
      html: html,
    };

    mailTransporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        console.log("nodemailer error" + err);
        res.status(500).json({ message:"Internal Server Error Occured"})

        return false;
      } else {
        console.log(info);
        res.status(200).json({status_bit: 1, message:"New Verification Code Send"})

        return true;
      }
    });
  });
};

module.exports = resendVerifyCode;
