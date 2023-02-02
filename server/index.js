const express = require("express");
const  mongoose  = require("mongoose");
const app = express();
const router = require("./Router/Router")
const cors = require("cors");
const path = require("path");


app.use(cors())
app.use("/api", router)
app.use(express.static(path.join(__dirname, "files&img")));

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
