const feedback_router = require("express").Router();
const feedback = require("../Schema/feedback");

feedback_router.post("/feedback",async(req,res) => {
    const {email , message ,time,date} = req.body

    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: 'numeric', minute: 'numeric', hour12: true });


    const options = { timeZone: 'Asia/Kolkata' }; // set the time zone to India
    const indiaDate = new Date().toLocaleDateString('en-IN', options);

    const feed = new feedback({
        email,
        message,
        time:timeString,
        date:indiaDate
    })

  
// console.log(timeString); // Outputs, for example: "2:30 PM"
    await feed.save()
    console.log(timeString);
    res.status(200).json({email:email,message:message,time,date})
})

feedback_router.get("/get_feedback",async(req,res) => {
    const fetch_items = await feedback.find()
    res.json(fetch_items)
})


module.exports = feedback_router;