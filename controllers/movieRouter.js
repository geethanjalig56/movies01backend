const express = require("express")
const movieModel = require("../model/movieModel")
const router01 = express.Router()

router01.post("/add", async(req,res)=>{
  let data = req.body
  let movies01 = new movieModel(data)
  let result = await movies01.save()
  res.json({status:"success"})
})

router01.get("/view", async(req,res)=> {
   let data = await movieModel.find()
   res.json(data)
})

router01.post("/src",async(req,res)=>{
    let input = req.body
    let data = await movieModel.find(input)
    res.json(data)
})

module.exports = router01