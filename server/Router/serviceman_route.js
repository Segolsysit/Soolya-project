const serviceman_route = require("express").Router();
const serviceManScheme = require("../Schema/serviceman_schema");
const multer = require("multer");
const path = require("path");
const fs = require("fs");


const Storage=multer.diskStorage({
    destination:(req,file,cb)=>{

cb(null , "files&img")

    },
    filename:(req,file,cb)=>{
          cb(null,file.fieldname + "_"+Date.now() + path.extname(file.originalname))  
    }
})
const fileFilter = (req, file, cb) => {
    const acceptFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if (acceptFileTypes.includes(file.mimetype)) {
        cb(null, true)
    }
    else {
        cb(null, false)
    }
}

const upload = multer({
    storage:Storage,
    fileFilter: fileFilter
})

serviceman_route.get("/get_user",async(req,res) => {
   const userData = await serviceManScheme.find();
    res.json(userData)
})

serviceman_route.get("/get_by_id/:id",async(req,res) => {
    const userData = await serviceManScheme.findById(req.params.id);
     res.json(userData)
 })
 

serviceman_route.post("/user",upload.single("file"),async(req,res) => {

    const userData = new serviceManScheme({
    WorkType: req.body.WorkType,
    district:req.body.district,
    Title:req.body.Title,
    FirstName:req.body.FirstName,
    LastName:req.body.LastName,
    MobilePhoneNumber:req.body.MobilePhoneNumber,
    StreetAddress:req.body.StreetAddress,
    PostalCode:req.body.PostalCode,
    originalname:req.file.originalname,
    mimetype:req.file.mimetype,
    filename:req.file.filename,
    path:req.file.path,
    size:req.file.size
})
    await userData.save();
    res.status(200).json({message:"Uploaded Successfully",userData})

})


module.exports = serviceman_route;