/**
 * Created by wchavarria-as on 04/04/2016.
 */
var router = require('express').Router();

var activities = [];
var id = 0;

var updateId = function updateId(req, res, next){
    if(!req.body.id){
        id++;
        req.body.id = id + '';
    }
    next();
};

router.param('id', function(req, res, next, id) {
    var activity = activities.find(function(activity){
        return activity.id == id;
    });

    if(activity){
        req.activity = activity;
        next();
    } else {
        res.send();
    }
});


router.route('/')
    .get(function(req, res) {
        res.json(activities);
    })
    .post(updateId, function(req, res) {
        var activity = req.body;
        activities.push(activity);
        res.json(activities);
    });


router.route('/:id')
    .get(function(req, res) {
        var activity = req.activity;
        res.json(activity || {});
    })
    .put(function(req, res) {
        var update = req.body;

        var activityIndex = activities.findIndex(function(activity) {
            return activity.id === req.params.id;
        });

        if(activityIndex === -1){
            res.send();
        } else {
            activities[activityIndex].name = update.name || event[activityIndex].name;
            res.json(activities[activityIndex]);
        }
    })
    .delete(function(req, res) {
        if(req.params.id) {
            var activityIndex = activities.findIndex(function(activity) {
                return activity.id === req.params.id;
            });

            if(activityIndex === -1) {
                res.send();
            } else {
                var deletedActivity = activities[activityIndex];
                activities.splice(activityIndex, 1);
                res.json(deletedActivity);
            }
        }
    });

module.exports = router;