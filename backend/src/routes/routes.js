const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const multer = require("multer");
const signUpContr  = require('controllers/singup.contr')
const verifyEmail = require('controllers/verify.contr')
const resendVerifyCode = require('controllers/resendVerify.contr')
/*const storage = multer.diskStorage({
    destination: function (req, file, cb) { cb(null, "./public/images") },
})*/



const upload = multer({ dest: './assets/files' });
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


router.post("/signup", signUpContr);
router.post("/verify", verifyEmail);
router.post("/resendVerifyCode", resendVerifyCode);


module.exports = router;