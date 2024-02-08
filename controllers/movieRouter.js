const express = require("express")
const router01 = express.Router()

router01.post("/add", (req,res)=>{
    res.send("hey ma")
})

module.exports = router01