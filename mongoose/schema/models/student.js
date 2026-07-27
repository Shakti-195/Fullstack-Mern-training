const mongoose = require("mongoose");


// Schema
const studentSchema = new mongoose.Schema({


    name:{
        type:String,
        required:true,


    },

    age:{
        type:Number,
        required:true,

    },

    city:{
        type:String,
        required:true,


    },

    course:{
        type:String,
        required:true,


    },

    pincode:{
        type:Number,
        default:203001,


    },

    email:{
        type:String,
        required:true,
        unique:true,
    },

    gender:{
        type:String,
        required:true,
    },



});

module.exports=mongoose.model("Student",studentSchema,);