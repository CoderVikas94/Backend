const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path :'./config.env'});

const mongoURI = process.env.MONGO_URL;

const connectToMongo = ()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected to mongo successfully");
    })
}

module.exports = connectToMongo;