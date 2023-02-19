const mongoose = require("mongoose");
const { Schema } = mongoose;

const userDetails = new Schema({

  name: { type: String, required: true },
  dob: { type: Date },
  password: { type: String, required: true },
  email : { type: String, required: true}

});

module.exports = mongoose.model("userDetails", userDetails);
