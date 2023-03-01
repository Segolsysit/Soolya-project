const express = require("express");
const  mongoose  = require("mongoose");
const app = express();
const router = require("./Router/Router")
const cors = require("cors");
const path = require("path");
const subcategory_router = require("./Router/subcategory_route");
const service_router = require("./Router/service_route");
const serviceman_route = require("./Router/serviceman_route");
const auth_router = require("./Router/authRoutes");
const cookieParser= require("cookie-parser")

app.use(express.json())
app.use(cookieParser())
app.use(
    cors({
      origin: ["http://localhost:3000"],
      credentials: true,
    })
  );
app.use("/api", router)
app.use("/sub_api", subcategory_router)
app.use("/service_api", service_router )
app.use("/serviceman",serviceman_route);
app.use("/auth_router",auth_router);

app.use(express.static(path.join(__dirname, "js")));
const cart_router = require("./Router/cart_router");
const bookingdetails_router = require("./Router/bookingdetails_router");
const RejectedList_router = require("./Router/RejectedList_router");

app.use(express.json());
app.use(cors())
app.use("/api", router);
app.use("/sub_api", subcategory_router);
app.use("/service_api", service_router );
app.use("/serviceman",serviceman_route);
app.use("/cart_api",cart_router);
app.use("/booking_api",bookingdetails_router);
app.use("/reject_api",RejectedList_router);
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
