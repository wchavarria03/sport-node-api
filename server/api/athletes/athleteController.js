/**
 * Created by Walter on 04/04/2016.
 */
var Athlete = require('./athleteModel');

exports.params = function (req, res, next, id) {
    Event.findById(id)
        .then(function(athlete){
            if(!athlete){
                next(new Error('No Activity with that id'))
            } else {
                req.athlete = athlete;
                next();
           }
        }, function(err){
            next(err);
        });
};

exports.get = function(req, res, next) {
    Event.find({})
        .then(function(athletes){
            res.json(athletes);
        }, function(err){
            next(err);
        });
};

exports.getOne = function(req, res, next) {
    var athlete = req.athlete;
    res.json(athlete);
};

exports.put = function(req, res, next) {
    var athlete = req.athlete;

    var update = req.body;


    /*Lodash Assign*/
    Object.prototype.extend = function(obj) {
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                this[i] = obj[i];
            }
        }
    };
    /*End Lodash Assign*/

    athlete.extend(update);

    Athlete.save(function(err, saved) {
        if (err) {
            next(err);
        } else {
            res.json(saved);
        }
    })
};


exports.post = function(req, res, next) {
    var newAthlete = req.body;

    Athlete.create(newAthlete)
        .then(function(athlete) {
            res.json(athlete);
        }, function(err) {
            next(err);
        });
};

exports.delete = function(req, res, next) {
    req.athlete.remove(function(err, removed) {
        if (err) {
            next(err);
        } else {
            res.json(removed);
        }
    });
};
