const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("run success db");
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = connectDB;