const mongoose = require("mongoose");
const { Schema } = mongoose;

const userVerficationCode = new Schema({

  email : { type: String, required: true, ref: 'userDetails', unique:true},
  code: {type: Number, required: true}
});

module.exports = mongoose.model("userVerficationCodes", userVerficationCode);
