const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const movieRoute = require("./controllers/movieRouter")

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://geethanjali2001:ammu2001@cluster0.iwq8qez.mongodb.net/movieDb?retryWrites=true&w=majority",{useNewUrlParser:true})

app.use("/api/movies/", movieRoute)

app.listen(3002,()=>{
    console.log("server is running yo")
})