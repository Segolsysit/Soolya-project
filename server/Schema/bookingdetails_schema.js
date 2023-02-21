const mongoose = require("mongoose");


const bookingdetails_schema = mongoose.Schema({
    address:{
        type:String
    },
    street:{
        type:String
    },
    city:{
        type:String
    },
    zip:{
        type:Number
    },
    person:{
        type:String
    },
    number:{
        type:Number
    }
})

module.exports = mongoose.model("bookingdetails_schema", bookingdetails_schema)