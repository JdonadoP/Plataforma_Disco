const express = require("express")
const app = express()
const path = require("path")
const routes = require("./routes/index.router.js")
const albumModel = require("./models/album.js")
const userModel = require("./models/user.js")
const PORT = 5000
const mongoose = require("mongoose")
const url = "mongodb+srv://jdonadop:fIE9yv7lNW7netTf@introfullstack.pgxauhx.mongodb.net/"

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use("/", routes);

const connectToMongo = async () => {
    try{
        await mongoose.connect(url)
        app.listen(PORT, ()=> {
            console.log(`Servidor escuchando: http://localhost:${PORT}`);
        })
    } catch(error){
        console.log(error)
    }
}

connectToMongo()

