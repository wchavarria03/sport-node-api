/**
 * Created by Walter on 04/04/2016.
 */
var Event = require('./eventModel');
var _ = require('lodash');

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
            res.json({'events':events});
        }, function(err){
            next(err);
        });
};

exports.getOne = function(req, res, next) {
    var event = req.event;
    res.json({'events':event});
};

exports.put = function(req, res, next) {
    var event = req.event;

    var update = req.body;

    _.merge(event, update);

    event.save(function(err, saved) {
        if (err) {
            next(err);
        } else {
            res.json({'events':saved});
        }
    })
};


exports.post = function(req, res, next) {
    var newEvent = req.body;

    Event.create(newEvent)
        .then(function(event) {
            res.json({'events':event});
        }, function(err) {
            next(err);
        });
};

exports.delete = function(req, res, next) {
    req.event.remove(function(err, removed) {
        if (err) {
            next(err);
        } else {
            res.json({'events':removed});
        }
    });
};
