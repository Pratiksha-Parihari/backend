const express = require("express");
const cron = require("node-cron");
const router = express.Router();


router.post("/schedule", (_, res) => {
try{
let obj = [
    {
        text: "One",
        time: "2023-02-12 19:41:00"
    },
    {
        text: "Two",
        time: "2023-02-12 19:41:03"
    },
    {
        text: "Three",
        time: "2023-02-12 19:41:06"
    },
    {
        text: "Four",
        time: "2023-02-12 19:41:09"
    },
    {
        text: "Five",
        time: "2023-02-12 19:41:12"
    },
    {
        text: "Six",
        time: "2023-02-12 19:41:15"
    }
]




obj.forEach(x => {
    let timeString = x.time
    let [dateString, time] = timeString.split(" ")

    let [year, month, date] = dateString.split("-")
    let [hour, min, sec] = time.split(":")

    cron.schedule(`${sec} ${min} ${hour} ${date} ${month} *`, () => {
        console.log(x.text)
    })
})
res.status(201).send({msg:"task is scheduled"})
}catch(error){
     res.status(500).send("Server error")

}
})

module.exports = router
