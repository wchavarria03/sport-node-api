/**
 * Created by Walter on 04/04/2016.
 */
var Event = require('./eventModel');

exports.params = function (req, res, next, id) {
    Event.findById(id)
        .populate('organizer')
        .exec()
        .then(function(event){
            if(!event){
                next(new Error('No Event with that id'))
            } else {
                req.event = event;
                next();
           }
        }, function(err){
            next(err);
        });
};

exports.get = function(req, res, next) {
    Event.find({})
        .populate('organizer')
        .exec()
        .then(function(events){
            res.json(events);
        }, function(err){
            next(err);
        });
};

exports.getOne = function(req, res, next) {
    var user = req.user;
    res.json(user);
};

exports.put = function(req, res, next) {
    var event = req.user;

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

    event.extend(update);

    event.save(function(err, saved) {
        if (err) {
            next(err);
        } else {
            res.json(saved);
        }
    })
};


exports.post = function(req, res, next) {
    var newEvent = req.body;

    Event.create(newEvent)
        .then(function(event) {
            res.json(event);
        }, function(err) {
            next(err);
        });
};

exports.delete = function(req, res, next) {
    req.user.remove(function(err, removed) {
        if (err) {
            next(err);
        } else {
            res.json(removed);
        }
    });
};