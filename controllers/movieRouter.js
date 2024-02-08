const express = require("express")
const movieModel = require("../model/movieModel")
const router01 = express.Router()

router01.post("/add", async(req,res)=>{
  let data = req.body
  let movies01 = new movieModel(data)
  let result = await movies01.save()
  res.json({status:"success"})
})

module.exports = router01