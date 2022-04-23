var express = require("express");

var router = express.Router();

const Package = require("../model/package_model");

exports.package_create = function (req, res) {
    var package = new Package({
        package_name: req.body.package_name,
        package_type: req.body.package_type,
        package_price: req.body.package_price,
        package_des: req.body.package_des,
        package_img: req.body.package_img
    });

    
    package
        .save(package)
        .then(data => {

            //res.send(data)
            console.log("package created");
            res.redirect('/admin');
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error occurred"
            });
        });
}

exports.findpackage = (req, res) => {
    //product.find()
    Package.find()
        .then(user => {
            res.send(user)
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "Error Occured" })
        })
}

