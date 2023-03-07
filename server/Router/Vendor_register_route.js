const Vendor_register_router = require("express").Router();
const Vendor_register_schema = require("../Schema/Vendor_register_schema");

router.post("/new_vendor_register",async(req,res) => {
    const items = new Vendor_register_schema({
        Username:req.body.Username,
        Email: req.body.Email,
        Password: req.body.Password
       })
       await items.save();
       res.status(200).json({message:"Uploaded Successfully",items})
})

router.get("/get_items",async(req,res)=>{
    const fetch_items = await Vendor_register_schema.find()
    res.json(fetch_items)
})

router.get("/get_items_id/:id",async(req,res)=>{
    const item_by_id = await Vendor_register_schema.findById(req.params.id)
    res.json(item_by_id )
})

module.exports = Vendor_register_router;