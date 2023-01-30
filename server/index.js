const express = require("express");
const  mongoose  = require("mongoose");
const app = express();
const router = require("./Router/Router")


app.use("/api", router)
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/soolya_project',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("DB connected successfully");
    }
})



app.listen(3001,(err) => {
    if(err){
        console.log(err);
    }

    else{
        console.log("server started on 3001 port");
    }
})
