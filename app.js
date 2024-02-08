const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const movieRoute = require("./controllers/movieRouter")

const app = express()
app.use(express.json())
app.use(cors())

app.use("/api/movies/", movieRoute)

app.listen(3002,()=>{
    console.log("server is running yo")
})