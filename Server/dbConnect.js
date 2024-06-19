const mongoose = require("mongoose");


const connectDB = (url) =>{
    mongoose.set('strictQuery', true);

    mongoose.connect(url)
    .then(()=>console.log('Successfully connected to the MongoDB'))
    .catch((err)=>console.log(err));
}

module.exports = connectDB;