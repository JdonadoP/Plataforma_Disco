const express = require("express")
const router = express.Router()  
const userModel = require("../models/user.js")
const albumModel = require("../models/album.js")
const user = require("../models/user.js")


router.post("/user", async(req, res)=>{
    try{
        await userModel.create(req.body)
        res.status(201).send("User created")
    }catch(error){
        res.status(500).send("Error adding user")
    }
})

router.get("/user/specific/:id", async(req, res)=>{
    try{
        const id = req.params.id
        const user = await userModel.findById(id)
        if(user){
            res.status(200).send(user)
        }else{
            res.status(200).send("Users not exist")
        }
    }catch(error){
        res.status(500).send("Error something went wrong")
    }
})

router.put("/user/update/:id", async(req, res)=>{
    try{
        const userDate = await userModel.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.status(200).send(userDate)
    }catch(error){
        res.status(500).send("Error something went wrong")
    }
})

router.post("/album", async(req, res)=>{
    try{
        await albumModel.create(req.body)
        res.status(201).send("User created")
    }catch(error){
        res.status(500).send("Error adding album")   
    }
})

router.put("/album/update/:id", async(req, res)=>{
    try{
        const albumDate = await albumModel.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.status(200).send(albumDate)
    }catch(error){
        res.status(500).send("Error something went wrong")
    }
})

router.put("/addSong/:id", async(req, res)=>{
    try{
        const id = req.params.id
        const album = await albumModel.findById(id)
        if(album){
            const song = album.songs.title.duration.findByIdAndUpdate(req.body, {new:true})
            res.status(201).send(`Add ${song}`)
        }else{
            res.status(200).send("Album not exist")
        }
    }catch(error){
        res.status(500).send("Error something went wrong")
    }
})

router.get("/albums", async(req, res)=>{
    try{
        const albums = await albumModel.find()
        if(albums){
            res.status(200).send(albums)
        }else{
            res.status(200).send("Not exist albums")
        }
    }catch(error){
        res.status(500).send("Error something went wrong")
    }
})

router.get("/album/specific/:id", async(req, res)=>{
    try{
        const id = req.params.id
        const  album = await albumModel.findById(id)
        if(album){
            res.status(200).send(album)
        }else{
            res.status(200).send("Albums not exist")
        }
    }catch(error){
        res.status(500).send("Error something went wrong")
    }
})

router.delete("/album/delete/:id", async(req, res)=>{
    try{
        const albumdelete = await albumModel.findByIdAndDelete(req.params.id)
        res.status(204).send(`Album ${albumdelete} removed`)
    }catch(error){
        res.status(500).send("Error something went wrong")
    }
})


module.exports = router