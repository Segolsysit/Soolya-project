const router = require("express").Router();
const serviceman_schema = require("../Schema/serviceman_schema");
const multer = require("multer");
const path = require("path");
const fs = require("fs");


const storage = multer.diskStorage({
    destination:()=>{
        
    }
})
