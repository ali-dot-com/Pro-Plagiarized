const express = require("express");
const { config } = require('dotenv')
const cors = require("cors");
const path = require('path');
const connectToMongo = require('configs/db');


const app = express();
config();
require('dotenv').config({path: './.env'});
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors()) // Use this after the variable declaration
app.use(express.static(path.join(__dirname, 'assets')));
app.use("/static", express.static("assets"))
//const publicpath = path.join(_driname, '/public/src');
connectToMongo();


//Availble routes
//app.use(express.json())

// To parse the request body

app.use('/api', require('routes/routes'));

app.get('/test', (_, res) => {console.log("test build done");return res.status(200).json({ message: "server is live now" })})



const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`node server is listening on port ${port}`);
});