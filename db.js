const mongoose = require('mongoose');
require("dotenv").config();

const connectToMongo = async ()=>{
    await mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser:true, useUnifiedTopology:true, }, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;



