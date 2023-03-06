const mongoose = require("mongoose");

    const cart_schema = mongoose.Schema({
        Username:{
            type:String   
        },
        Email:{
            type:String
        },
        Password:{
            type:String
        }
    })

module.exports = mongoose.model("Vendor_register_schema" , Vendor_register_schema)