const axios = require('axios');
const Package = require("../model/package_model");
var Gallery = require("../model/gallery_model");

exports.homeRoutes=(req,res)=>
{
    axios.get('https://tourstimes.herokuapp.com/feedback_find')
    .then(function(response){ 
        res.render('index1',{feedback:response.data});
    })
    .catch(err =>{
        res.send(err);
    }) 
}

exports.packageRoutes= async(req,res)=>
{
    const package = await Package.find({});
    //package = JSON.stringify(package);
    res.render('package',{package});
}

exports.adminpackageRoutes= async(req,res)=>
{
    const package = await Package.find({});
    //package = JSON.stringify(package);
    res.render('./admin/viewPackage',{package});
}

exports.galleryRoutes=async(req,res)=>
{
    axios.get('https://tourstimes.herokuapp.com/gallery_find')
    .then(function(response){ 
        res.render('gallery',{feedback:response.data});
    })
    .catch(err =>{
        res.send(err);
    }) 
    // const gallery =await Gallery.find();
    // console.log(gallery);
    // res.render('gallery',{gallery});
}

exports.adminRoutes=(req,res)=>
{
    axios.get('https://tourstimes.herokuapp.com/feedback_find')
    .then(function(response){ 
        res.render('./admin/adminindex',{feedback:response.data});
    })
    .catch(err =>{
        res.send(err);
    }) 
}

exports.admin_feedbackRoutes=(req,res)=>
{
    axios.get('https://tourstimes.herokuapp.com/feedback_find')
    .then(function(response){ 
        res.render('./admin/view_feedback',{feedback:response.data});
    })
    .catch(err =>{
        res.send(err);
    }) 
}

exports.admin_viewPackageRoutes=(req,res)=>
{
    axios.get('https://tourstimes.herokuapp.com/package')
    .then(function(response){ 
        res.render('./admin/viewPackage',{package:response.data});
    })
    .catch(err =>{
        res.send(err);
    }) 
}

exports.contactusRoutes=(req,res)=>
{
    res.render('contactus');
}


exports.addPackageRoutes=(req,res)=>
{
    res.render('addPackage');
}

exports.viewPackageRoutes=(req,res)=>
{
    res.render('viewPackage');
}

exports.adminLoginRoutes=(req,res)=>
{
    res.render('adminLogin');
}

exports.addGalleryRoutes=(req,res)=>
{
    res.render('addGallery');
}

exports.feedbackRoutes=(req,res)=>
{
    res.render('feedback');
}

