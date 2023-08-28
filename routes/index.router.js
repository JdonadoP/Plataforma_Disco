const express = require("express")
const router = express.Router()  
const userModel = require("../models/user.js")
const albumModel = require("../models/album.js")


router.post("/user", async(req, res)=>{
    try{
        await userModel.create(req.body)
        res.status(201).send("User created")
    }catch(error){
        res.status(500).send("Error adding user")
    }
})


module.exports = router