/**
 * Created by Walter on 27/03/2016.
 */
var router = require('express').Router();

var users = [];
var id = 0;

var updateId = function updateId(req, res, next){
    if(!req.body.id){
        id++;
        req.body.id = id + '';
    }
    next();
};

router.param('id', function(req, res, next, id) {
    var user = users.find(function(user){
        return user.id == id;
    });

    if(user){
        req.user = user;
        next();
    } else {
        res.send();
    }
});


router.route('/')
    .get(function(req, res) {
        res.json(users);
    })
    .post(updateId, function(req, res) {
        var user = req.body;
        users.push(user);
        res.json(user);
    });


router.route('/:id')
    .get(function(req, res) {
        res.json(req.user || {});
    })
    .put(function(req, res) {
        var update = req.body;

        var userIndex = users.findIndex(function(user) {
            return user.id === req.params.id;
        });

        if(userIndex === -1) {
            res.send();
        } else {
            users[userIndex].name = update.name || users[userIndex].name;
            res.json(users[userIndex]);
        }

    })
    .delete(function(req, res) {
        if(req.params.id) {
            var userIndex = users.findIndex(function(user) {
                return user.id === req.params.id;
            });

            if(userIndex === -1) {
                res.send();
            } else {
                var deletedUser = users[userIndex];
                users.splice(userIndex, 1);
                res.json(deletedUser);
            }
        }
    });

module.exports = router;