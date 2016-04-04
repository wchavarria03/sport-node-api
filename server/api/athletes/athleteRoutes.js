/**
 * Created by Walter on 27/03/2016.
 */
var router = require('express').Router();

var athletes = [];
var id = 0;

var updateId = function updateId(req, res, next){
    if(!req.body.id){
        id++;
        req.body.id = id + '';
    }
    next();
};

router.param('id', function(req, res, next, id) {
    var athlete = athletes.find(function(athlete){
        return athlete.id == id;
    });

    if(athlete){
        req.athlete = athlete;
        next();
    } else {
        res.send();
    }
});


router.route('/')
    .get(function(req, res) {
        res.json(athletes);
    })
    .post(updateId, function(req, res) {
        var athlete = req.body;
        athletes.push(athlete);
        res.json(athlete);
    });


router.route('/:id')
    .get(function(req, res) {
        res.json(req.user || {});
    })
    .put(function(req, res) {
        var update = req.body;

        var athleteIndex = athletes.findIndex(function(athlete) {
            return athlete.id === req.params.id;
        });

        if(athleteIndex === -1) {
            res.send();
        } else {
            athletes[athleteIndex].name = update.name || athletes[athleteIndex].name;
            res.json(athletes[athleteIndex]);
        }

    })
    .delete(function(req, res) {
        if(req.params.id) {
            var athleteIndex = athletes.findIndex(function(athlete) {
                return athlete.id === req.params.id;
            });

            if(athleteIndex === -1) {
                res.send();
            } else {
                var deletedAthlete = athletes[athleteIndex];
                athletes.splice(athleteIndex, 1);
                res.json(deletedAthlete);
            }
        }
    });

module.exports = router;