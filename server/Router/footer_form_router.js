const FooterFormSchema = require("../Schema/Footer_form_schema");
const Footer_form_router = require("express").Router()

Footer_form_router.post("/new_footer",async(req,res) => {
    const footer_data = new FooterFormSchema({
        email:req.body.email,
        comment:req.body.comment
       })
       await footer_data.save();
       res.status(200).json({message:"Uploaded Successfully",footer_data})
})

Footer_form_router.get("/footer_items",async(req,res)=>{
    const fetch_items = await FooterFormSchema.find()
    res.json(fetch_items)
})

Footer_form_router.get("/footer_items/:id",async(req,res)=>{
    const item_by_id = await FooterFormSchema.findById(req.params.id)
    res.json(item_by_id )
})

module.exports = Footer_form_router;