/**
 * Created by Walter on 27/03/2016.
 */
var router = require('express').Router();
var controller = require('./eventController');

router.param('id', controller.params);


router.route('/')
    .get(controller.get)
    .post(controller.post);


router.route('/:id')
    .get(controller.getOne)
    .put(controller.put)
    .delete(controller.delete);

module.exports = router;


/*
var events = [];
var id = 0;

var updateId = function updateId(req, res, next){
    if(!req.body.id){
        id++;
        req.body.id = id + '';
    }
    next();
};

router.param('id', function(req, res, next, id) {
    var event = events.find(function(event){
        return event.id == id;
    });

    if(event){
        req.event = event;
        next();
    } else {
        res.send();
    }
});


router.route('/')
    .get(function(req, res) {
        res.json(events);
    })
    .post(updateId, function(req, res) {
        var event = req.body;
        events.push(event);
        res.json(event);
    });


router.route('/:id')
    .get(function(req, res) {
        var event = req.event;
        res.json(event || {});
    })
    .put(function(req, res) {
        var update = req.body;

        var eventIndex = events.findIndex(function(event) {
            return event.id === req.params.id;
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
                var deletedEvent = events[eventIndex];
                events.splice(eventIndex, 1);
                res.json(deletedEvent);
            }
        }
    });

module.exports = router;
    */