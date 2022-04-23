var express = require("express");

var router = express.Router();

const Feedback = require("../model/feedback_model");

exports.feedback_create = function (req, res) {
    var feedback = new Feedback({
        name: req.body.name,
        desc: req.body.desc
    });

    feedback
        .save(feedback)
        .then(data => {
            res.redirect('/');
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error occurred"
            });
        });
};
exports.find = (req, res) => {
    Feedback.find()
        .then(user => {
            res.send(user)
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "Error Occured" })
        })
};

exports.admin_feedback = (req, res) => {
    Feedback.find()
        .then(user => {
            res.send(user)
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "Error Occured" })
        })
};





//module.exports = router;