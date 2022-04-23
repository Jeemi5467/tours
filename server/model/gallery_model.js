const mongoose = require('mongoose');

const DbSchemaGallery = mongoose.Schema({
    imageURL:{
        type:String,
        required: true
    }
})

module.exports = mongoose.model('Gallery',DbSchemaGallery)