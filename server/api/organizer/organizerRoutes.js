/**
 * Created by wchavarria-as on 04/04/2016.
 */
var router = require('express').Router();

var organizers = [];
var id = 0;

var updateId = function updateId(req, res, next){
    if(!req.body.id){
        id++;
        req.body.id = id + '';
    }
    next();
};

router.param('id', function(req, res, next, id) {
    var organizer = organizers.find(function(organizer){
        return organizer.id == id;
    });

    if(organizer){
        req.organizer = organizer;
        next();
    } else {
        res.send();
    }
});


router.route('/')
    .get(function(req, res) {
        res.json(organizers);
    })
    .post(updateId, function(req, res) {
        var organizer = req.body;
        organizers.push(organizer);
        res.json(organizer);
    });


router.route('/:id')
    .get(function(req, res) {
        var organizer = req.organizer;
        res.json(organizer || {});
    })
    .put(function(req, res) {
        var update = req.body;

        var organizerIndex = organizers.findIndex(function(organizer) {
            return organizer.id === req.params.id;
        });

        if(organizerIndex === -1){
            res.send();
        } else {
            organizers[organizerIndex].name = update.name || event[organizerIndex].name;
            res.json(organizers[organizerIndex]);
        }
    })
    .delete(function(req, res) {
        if(req.params.id) {
            var organizerIndex = organizers.findIndex(function(organizer) {
                return organizer.id === req.params.id;
            });

            if(organizerIndex === -1) {
                res.send();
            } else {
                var deletedOrganizer = organizers[organizerIndex];
                organizers.splice(organizerIndex, 1);
                res.json(deletedOrganizer);
            }
        }
    });

module.exports = router;