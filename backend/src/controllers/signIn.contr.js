const bcrypt = require("bcrypt");
const userDetails = require("models/userdetails");
var jwt = require("jsonwebtoken");
const signIn = async (req, res) => {
  let mail = req.body.email;
  try {
    const data = userDetails.findOne({ email: mail });
    if (data) {
      if (data.status) {
        const passflag = await bcrypt.compare(req.body.password, data.password);
        if (!passflag) {
          console.log("wrong password");
          return res
            .status(200)
            .json({ status_bit: 0, error: "Invalid Credentials" });
        } else {
          const tokenLoad = { id: data._id, role: "user" };
          console.log(passflag);
          let logintoken = jwt.sign(tokenLoad, process.env.PWT_KEY, { expiresIn: '24h' });
          suc = true;
          return res
            .status(200)
            .json({ token: logintoken, status_bit: 1, message: "succes" });
        }
      } else {
        res.status(200).json({
          status_bit: -1,
          message: "Account not verified",
          nextroute: "/verify",
        });
      }
    } else {
      res.status(200).json({
        status_bit: -1,
        message: "Invalid Credentials",
        nextroute: "/signup",
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Internal Server Error Occured" });
  }
};
