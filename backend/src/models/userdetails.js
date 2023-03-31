const mongoose = require("mongoose");
const { Schema } = mongoose;

const userDetails = new Schema({

  name: { type: String, required: true },
  country: { type: String, require:true },
  email : { type: String, required: true},
  phoneNumber : { type: String, required: true},
  password: { type: String, required: true }
});

module.exports = mongoose.model("userDetails", userDetails);
