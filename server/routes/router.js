const express=require('express');
const feedback_controller = require('../controller/feedback');
const package_controller = require('../controller/package');
const gallery_controller = require('../controller/gallery');
const admin_controller = require('../controller/admin');

//const app=express()=> this wil create another express application
//Allows to create diff router in seperate file
const route=express.Router();

const services=require('../services/render');

//ROUTES
//Root Route with get method
route.get('/',services.homeRoutes);
route.get('/admin',services.adminRoutes)
route.get('/package',services.packageRoutes);
route.get('/contactus',services.contactusRoutes);
route.post('/deletePkg/:id',package_controller.deleteOne);
route.get('/gallery',gallery_controller.find);
route.get('/feedback',services.feedbackRoutes);
route.post('/feedback_save',feedback_controller.feedback_create);
route.get('/feedback_find',feedback_controller.find);

//ADMIN ROUTES
route.get('/adminLogin',services.adminLoginRoutes);
route.post('/admin_login_check',admin_controller.admin_login_check);
route.get('/addPackage',services.addPackageRoutes);
route.get('/adminpackage',services.adminpackageRoutes);
route.get('/addGallery',services.addGalleryRoutes);
route.post('/addPackage_save',package_controller.package_create);
route.post('/addGallery_save',gallery_controller.gallery_create);
route.get('/view_feedback_admin',services.admin_feedbackRoutes);


module.exports=route;