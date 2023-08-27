const mongoose = require("mongoose");
const { number } = require("xpress/lib/string");

const albumModel = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "The title is required"]
    },
    description: {
        type: String,
        required: [true, "The description is required"],
        minLength: 5,
        maxLength: 200,
    },
    releaseYear: {
        type: Number,
        required: [true, "The date is required"],
        min: 1,
    },
    songs: {
        title: {type: String}   ,
        duration: {type: Number}
    },
    cover: {type: URL}

});

module.exports = mongoose.model("modelAlbum", albumModel)