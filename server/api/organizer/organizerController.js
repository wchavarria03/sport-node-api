/**
 * Created by Walter on 04/04/2016.
 */
var Organizer = require('./organizerModel');
var _ = require('lodash');

exports.params = function (req, res, next, id) {
    Organizer.findById(id)
        .then(function(organizer){
            if(!organizer){
                next(new Error('No Organizer with that id'))
            } else {
                req.organizer = organizer;
                next();
           }
        }, function(err){
            next(err);
        });
};

exports.get = function(req, res, next) {
    console.log(Organizer);
    Organizer.find({})
        .then(function(organizers){
            res.json(organizers);
        }, function(err){
            next(err);
        });
};

exports.getOne = function(req, res, next) {
    var organizer = req.organizer;
    res.json(organizer);
};

exports.put = function(req, res, next) {
    var organizer = req.organizer;

    var update = req.body;

    _.merge(organizer, update);

    Organizer.save(function(err, saved) {
        if (err) {
            next(err);
        } else {
            res.json(saved);
        }
    })
};


exports.post = function(req, res, next) {
    var newOrganizer = req.body;

    Organizer.create(newOrganizer)
        .then(function(organizer) {
            res.json(organizer);
        }, function(err) {
            next(err);
        });
};

exports.delete = function(req, res, next) {
    req.organizer.remove(function(err, removed) {
        if (err) {
            next(err);
        } else {
            res.json(removed);
        }
    });
};