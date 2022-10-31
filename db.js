const mongoose = require('mongoose');


const mongoURI = "mongodb://localhost:27017/notekaro"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log('Connected to MongoDb Successfully');
    })
}

module.exports = connectToMongo;
