const mongoose = require('mongoose');

const DbSchema1 = mongoose.Schema({
    package_type:{
        type:String,
        required: true
    },
    package_name:{
        type:String,
        required: true 
    },
    package_price:{
        type:String,
        required: true 
    },
    package_des:{
        type:String,
        required: true 
    },
    package_img:{
        type:String,
        required: true
    }
})

module.exports = mongoose.model('Package',DbSchema1)