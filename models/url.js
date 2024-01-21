const mongoose = require("mongoose");

const Schema  = new mongoose.Schema({
    shortId:{
        type: String ,
        required: true,
        unique : true,
    },
    redirectURL :{
        type: String,
        required: true,
    },
    visitrHistory : [{timestamp: {type:Number}}],
},
    {     timestamp:true }

);

const URL = new mongoose.model("Url-shortner" , Schema);

module.exports = URL;