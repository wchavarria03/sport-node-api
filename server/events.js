/**
 * Created by Walter on 27/03/2016.
 */

var eventRouter = require('express').Router();

var events = [];
var id = 0;

var updateId = function updateId(req, res, next){

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

eventRouter.get('/',function(req, res) {
    res.json(events);
});

eventRouter.post('/', updateId, function(req, res) {
    var event = req.body;
    event.push(event);
    res.json(event);
});

eventRouter.put('/:id', function(req, res) {
    var event = ;
});

module.exports = eventRouter;