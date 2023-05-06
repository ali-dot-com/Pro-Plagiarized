const userDetails = require("models/userdetails");
const userVerficationCode = require("models/userVerficationCode");

const Verify = (req, res) => {
  let mail = req.body.email;
  userVerficationCode
    .findOne({ email: mail })
    .then((data) => {
      if(data){
        let code = parseInt(req.body.code, 10);
        if (data.code === code) {
          userDetails
            .updateMany({ email: mail }, { emailVerified: true })
            .then((r) => {
              userVerficationCode
                .deleteMany({ email: mail })
                .then((r) => {
                  res
                    .send(200)
                    .json({ status_bit: 1, message: "Account Verified" });
                })
                .catch((e) => {
                  res.status(400).json({
                    errors: errors,
                    message: "Internal Server Error Occured",
                  });
                });
            })
            .catch((e) => {
              res.status(400).json({
                errors: errors,
                message: "Internal Server Error Occured",
              });
            });
        } else {
          return res
            .status(200)
            .json({ status_bit: 0, message: "Invalid Code" });
        }
      }
      else{
        res.status(200).json({status_bit:-1, message:"No code Avaiable to Verify"})
      }
    })
    .catch((e) => {
      res.status(400).json({
        errors: errors,
        message: "Internal Server Error Occured",
      });
    });
};

module.exports = Verify;
