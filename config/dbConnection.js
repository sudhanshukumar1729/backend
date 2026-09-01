const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const connectDb = async() =>{
    try{
        const conn = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Database connected successfully",conn.connection.host,conn.connection.name);
    }
    catch(err){
        console.error(err);
        process.exit(1);
    }
};

module.exports = connectDb;