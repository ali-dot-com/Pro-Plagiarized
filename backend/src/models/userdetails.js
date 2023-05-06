const mongoose = require("mongoose");
const { Schema } = mongoose;

const userDetails = new Schema({

  name: { type: String, required: true },
  country: { type: String, require:true },
  email : { type: String, required: true, unique:true},
  phoneNumber : { type: String, required: true},
  password: { type: String, required: true },
  emailVerified: {type: Boolean, required: true, default: false}
});

module.exports = mongoose.model("userDetails", userDetails);
