const mongoose = require('mongoose')

const DetailSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    mobile:{
        type:Number,
        required:true
    },
    dateofbirth:{
        type:String,
        required:true       
    },
    gender:{
        type:String,
        required:true
    },
    course:{
        type:String,
        required:true
    }
})

const details = mongoose.model("details",DetailSchema)
module.exports = details