/**
 * Created by Walter on 27/03/2016.
 */
var userRouter = require('express').Router();

var users = [];
var id = 0;

userRouter.param('id', function(req, res, next, id) {
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

userRouter.get('/', function(req, res) {
    res.json(users);
});

userRouter.get('/:id', function(req, res) {
    res.json(req.user || {});
});

userRouter.post('/', function(req, res) {
    var user = req.body;
    id++;
    user.id = id + '';
    users.push(user);

    res.json(user);
});

userRouter.put('/:id', function(req, res) {
    var update = req.body;

    var userIndex = users.findIndex(function(user) {
        return user.id === req.params.id;
    });

    if(userIndex !== -1) {
        users[userIndex].name = update.name || users[userIndex].name;
        res.json(users[userIndex]);
    } else {
        res.send();
    }

});

userRouter.delete('/:id', function(req, res) {
    if(req.params.id) {
        var userIndex = users.findIndex(function(user) {
            return user.id === req.params.id;
        });

        if(userIndex !== -1) {
            users.splice(userIndex, 1);
            res.json(users[userIndex]);
        } else {
            res.send();
        }
    }
});





module.exports = userRouter;