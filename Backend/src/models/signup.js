const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName : {
        type: String,
        required: true
    },
    lastName : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    confirmPassword : {
        type: String,
        required: true
    },
    gender : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber : {
        type: Number,
        required: true,
        unique: true
    },
    address : {
        type: String,
        required: true
    },
    pinCode : {
        type: Number,
        required: true
    }
    
})

// now we need to create a collection
const Signup = new mongoose.model("User", userSchema);

module.exports= Signup;