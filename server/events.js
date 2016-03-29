/**
 * Created by Walter on 27/03/2016.
 */

var eventRouter = require('express').Router();

var events = [];
var id = 0;

var updateId = function updateId(req, res, next){
    if(!req.body.id){
        id++;
        req.body.id = id + '';
    }
    next();
};

eventRouter.param('id', function(req, res, next, id) {
    var event = events.find(function(event){
        return event.id == id;
    });

    if(user){
        req.event = event;
        next();
    } else {
        res.send();
    }
});


eventRouter.route('/')
    .get(function(req, res) {
        res.json(events);
    })
    .post(updateId, function(req, res) {
        var event = req.body;
        events.push(event);
        res.json(event);
    });


eventRouter.route('/:id')
    .get(function(req, res) {
        var event = req.event;
        res.json(event || {});
    })
    .put(function(req, res) {
        var update = req.body;

        var eventIndex = events.findIndex(function(user) {
            return user.id === req.params.id;
        });

        if(eventIndex === -1){
            res.send();
        } else {
            events[eventIndex].name = update.name || event[eventIndex].name;
            res.json(events[eventIndex]);
        }
    })
    .delete(function(req, res) {
        if(req.params.id) {
            var eventIndex = events.findIndex(function(event) {
                return event.id === req.params.id;
            });

            if(eventIndex === -1) {
                res.send();
            } else {
                events.splice(eventIndex, 1);
                res.json(events[eventIndex]);
            }
        }
    });

module.exports = eventRouter;