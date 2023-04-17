const mongoose = require("mongoose");

const feedback = mongoose.Schema({
    email: {
        type: String,

    },

    message: {
        type: String,

    },

    time: {
        type: String,

    },
    date: {
        type: String,

    }
   
});

module.exports = mongoose.model("feedbackModel" , feedback)