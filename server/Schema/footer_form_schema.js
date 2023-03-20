const mongoose = require("mongoose")

const FooterFormSchema = mongoose.Schema({
    email:{
        type:String
    },
    comment:{
        type:String
    }
})

module.exports = mongoose.model("FooterFormSchema", FooterFormSchema)