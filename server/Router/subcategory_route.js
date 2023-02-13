const subcategory_router = require("express").Router();
const subcategoyr_schema = require("../Schema/Subcategory_schema");
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

subcategory_router.post("/new_subcategory",upload.single("file"),async(req,res) => {
    const items = new subcategoyr_schema({
        Category:req.body.Category,
        Subcategory:req.body.Subcategory,
        Discription:req.body.Discription,
        originalname: req.file.originalname,
        mimetype: req.file.mimetype,
        filename: req.file.filename,
        path: req.file.path,
        size: req.file.size
       })
       await items.save();
       res.status(200).json({message:"Uploaded Successfully",items})
})

subcategory_router.get("/new_fetch_items",async(req,res)=>{
    const new_fetch_items = await subcategoyr_schema.find()
    res.json( new_fetch_items)
})

subcategory_router.get("/new_fetch_items/:id",async(req,res)=>{
    const item_by_id = await subcategoyr_schema.findById(req.params.id)
    res.json(item_by_id )
})

subcategory_router.patch("/update_subcategory/:id",upload.single('file'),async(req,res)=>{
    const removeExisitingFile = await subcategoyr_schema.findById(req.params.id)
    fs.unlink(removeExisitingFile.path,((err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("existing file removed ");
        }

    }));
    const update_subcategory = await subcategoyr_schema.findByIdAndUpdate(req.params.id)
    update_items.Category=req.body.Category;
    update_items.Subcategory=req.body.Subcategory;
    update_items.Discription=req.body.Discription;
    update_items.originalname=req.file.originalname;
    update_items.mimetype=req.file.mimetype;
    update_items.filename=req.file.filename;
    update_items.path = req.file.path;
    update_items.size = req.file.size;

    await update_subcategory .save();
    res.status(200).json("File Updated")
})

subcategory_router.delete("/delete_item/:id",async(req,res)=>{
    const delExFile = await subcategoyr_schema.findById(req.params.id)
    await fs.unlink(delExFile.path,((err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("removed del file");
        }
    }));
     await subcategoyr_schema.findByIdAndDelete(req.params.id)
     return res.json('Deleted')
})

module.exports = subcategory_router;