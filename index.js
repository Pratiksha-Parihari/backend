const express = require("express")
const app = express()
const route = require("./route")
const cron = require("node-cron");
app.use(express.json())


app.use("/", route)

app.listen(process.env.PORT || 3000, function () {
    console.log("Server running at " + (process.env.PORT || 3000))
})