var express = require("express");

var router = express.Router();

const Admin = require("../model/admin_model");

exports.admin_login_check = function (req, res) {
    var admin = new Admin({
        admin_username: req.body.admin_username,
        admin_password: req.body.admin_password,
        
    });
    console.log();
    console.log(admin.admin_password);

    if(admin.admin_username=="Admin123@gmail.com" && admin.admin_password =="Admin123")
    {
        res.redirect('/admin');
    }
    else{
        res.redirect('/adminLogin');
    }

    
    // admin
    //     .save(admin)
    //     .then(data => {
    //         console.log("-------------------------------------");
    //         //res.send(data)
    //         console.log("admin Login");
    //         res.redirect('/admin');
    //     })
    //     .catch(err => {
    //         res.status(500).send({
    //             message: err.message || "Error occurred"
    //         });
    //     });
}