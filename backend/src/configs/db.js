const mongoose = require('mongoose');

mongoose.set("strictQuery", false);
const connectToMongo = ()=>{
  mongoose.connect(process.env.MONGO_URI,()=>console.log("connected to mongo successfully"))
}

module.exports = connectToMongo;