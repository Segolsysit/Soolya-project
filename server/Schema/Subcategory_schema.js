const mongoose = require("mongoose");

const Subcategory_schema = mongoose.Schema({
    Category:{
        type:String
    },
    Subcategory:{
        type:String
    },
    Discription:{
        type:String
    },
    originalname: {
        type: String,

    },
    mimetype: {
        type: String,

    },
    filename: {
        type: String,

    },
    path: {
        type: String,

    },
    size: {
        type: Number,

    },
    name: {
        type: String
    }
});

module.exports = mongoose.model("Subcategory_schema" , Subcategory_schema)