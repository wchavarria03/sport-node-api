var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var userRouter = require('./users/users');
var eventRouter = require('./events/events');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


/*Routes*/
app.use('/users', userRouter);
app.use('/events', eventRouter);

/*End Routes*/

app.use(function(err, req, res, next){
    if(err){
        console.log(err.message);
        res.status(500).send(err);
    }
});

module.exports = app;

