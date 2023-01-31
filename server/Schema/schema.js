const mongoose = require("mongoose");

const schema = mongoose.Schema({
    catagortSetup: {
        type: String,

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

module.exports = mongoose.model("schema" , schema)