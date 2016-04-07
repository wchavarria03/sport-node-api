/**
 * Created by Walter on 04/04/2016.
 */
var Activity = require('./activityModel');

exports.params = function (req, res, next, id) {
    Event.findById(id)
        .then(function(activity){
            if(!activity){
                next(new Error('No Activity with that id'))
            } else {
                req.activity = activity;
                next();
           }
        }, function(err){
            next(err);
        });
};

exports.get = function(req, res, next) {
    Event.find({})
        .then(function(activities){
            res.json(activities);
        }, function(err){
            next(err);
        });
};

exports.getOne = function(req, res, next) {
    var activity = req.activity;
    res.json(activity);
};

exports.put = function(req, res, next) {
    var activity = req.activity;

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

    activity.extend(update);

    Activity.save(function(err, saved) {
        if (err) {
            next(err);
        } else {
            res.json(saved);
        }
    })
};


exports.post = function(req, res, next) {
    var newActivity = req.body;

    Activity.create(newActivity)
        .then(function(activity) {
            res.json(activity);
        }, function(err) {
            next(err);
        });
};

exports.delete = function(req, res, next) {
    req.activity.remove(function(err, removed) {
        if (err) {
            next(err);
        } else {
            res.json(removed);
        }
    });
};